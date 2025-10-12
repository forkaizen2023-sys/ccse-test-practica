// =======================================================
// SCRIPT PRINCIPAL DEL CUESTIONARIO CCSE
// =======================================================

// --- VARIABLES GLOBALES ---
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let quizData = [];

// --- ELEMENTOS DEL DOM (CACHEADOS PARA EFICIENCIA) ---
const nextButton = document.getElementById('next-button');
const questionArea = document.getElementById('question-area');
const resultMessage = document.getElementById('result-message');

/**
 * 💡 FUNCIÓN DE INICIO
 * Se ejecuta cuando la página está lista para determinar qué test cargar.
 */
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const quizType = params.get('quiz');

    if (!quizType) {
        displayError("Error: No se ha seleccionado ningún test. Vuelve al menú principal.");
        return;
    }

    // Construye la ruta al archivo de datos JSON
    const dataFile = `data/${quizType}.json`;
    loadQuizData(dataFile);
};

/**
 * Carga las preguntas de forma asíncrona desde un archivo JSON.
 * @param {string} fileName - La ruta al archivo JSON.
 */
async function loadQuizData(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}: No se pudo encontrar el archivo ${fileName}`);
        }
        const data = await response.json();
        quizData = data.questions;

        if (!quizData || quizData.length === 0) {
            throw new Error("El archivo de preguntas está vacío o tiene un formato incorrecto.");
        }

        shuffleArray(quizData);
        startQuiz();
    } catch (error) {
        console.error("Error CRÍTICO al cargar las preguntas:", error);
        displayError("No se pudieron cargar las preguntas. Revisa la consola para más detalles.");
    }
}

/**
 * Muestra un mensaje de error claro en la interfaz.
 */
function displayError(message) {
    questionArea.innerHTML = `<h2 style="color: var(--color-incorrect);">${message}</h2>`;
}

/**
 * Mezcla un array usando el algoritmo Fisher-Yates.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Inicializa y muestra la primera pregunta del test.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    nextButton.style.display = 'none';
    resultMessage.textContent = '';
    displayCurrentQuestion();
}

/**
 * Renderiza la pregunta actual y sus opciones.
 */
function displayCurrentQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        questionArea.innerHTML = `
            <div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>
            <div class="answer-options">
                ${question.answerOptions.map(option =>
                    `<button>${option.text}</button>`
                ).join('')}
            </div>
        `;

        document.querySelectorAll('.answer-options button').forEach(button => {
            button.addEventListener('click', () => checkAnswer(button, question));
        });
        
        resultMessage.innerHTML = '';
        nextButton.style.display = 'none';

    } else {
        showFinalResults();
    }
}

/**
 * Comprueba la respuesta, actualiza contadores y la UI.
 */
function checkAnswer(selectedButton, question) {
    const correctOption = question.answerOptions.find(option => option.isCorrect);

    document.querySelectorAll('.answer-options button').forEach(button => {
        button.disabled = true;
        if (button.textContent === correctOption.text) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    if (selectedButton.textContent === correctOption.text) {
        resultMessage.innerHTML = '<p style="color: var(--color-correct); font-weight: 600;">¡Respuesta correcta!</p>';
        correctAnswers++;
    } else {
        resultMessage.innerHTML = `
            <p style="color: var(--color-incorrect); font-weight: 600;">Incorrecto.</p>
            <p><strong>La respuesta correcta es:</strong> ${correctOption.text}</p>
            <p><small>${correctOption.rationale || ''}</small></p>
        `;
        incorrectAnswers++;
    }

    nextButton.style.display = 'block';
}

/**
 * Muestra la pantalla de resultados finales.
 */
function showFinalResults() {
    const totalQuestions = quizData.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const isPassed = correctAnswers >= 15;

    questionArea.innerHTML = `
        <h2>Resultados Finales</h2>
        <p>Has respondido correctamente a <strong>${correctAnswers} de ${totalQuestions}</strong> preguntas.</p>
        <p>Tu puntuación: <strong>${percentage.toFixed(0)}%</strong></p>
        <h3 style="color: ${isPassed ? 'var(--color-correct)' : 'var(--color-incorrect)'};">
            ${isPassed ? '¡ENHORABUENA, HAS APROBADO!' : 'Necesitas seguir practicando.'}
        </h3>
        <button class="button-link" onclick="startQuiz()">Repetir Test</button>
    `;
    nextButton.style.display = 'none';
    resultMessage.innerHTML = '';
}

// --- EVENT LISTENERS ---
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayCurrentQuestion();
});