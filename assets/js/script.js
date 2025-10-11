// --- VARIABLES GLOBALES ---
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let quizData = []; // Guardará las preguntas cargadas desde el JSON

// --- ELEMENTOS DEL DOM ---
const nextButton = document.getElementById('next-button');
const questionArea = document.getElementById('question-area');
const resultMessage = document.getElementById('result-message');

/**
 * 💡 FUNCIÓN PRINCIPAL DE INICIO
 * Se ejecuta tan pronto como la página ha cargado.
 * Determina qué cuestionario cargar a partir de la URL.
 */
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const quizType = params.get('quiz'); // Obtiene 'es', 'uk', o 'additional'

    if (!quizType) {
        displayError("Error: No se ha seleccionado ningún test. Vuelve al menú principal.");
        return;
    }

    const dataFile = `data/${quizType}.json`;
    loadQuizData(dataFile);
};

/**
 * Carga las preguntas de forma asíncrona desde un archivo JSON.
 * @param {string} fileName - La ruta al archivo JSON (ej: 'data/es.json').
 */
async function loadQuizData(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            // Error oculto común: No manejar un 404 si el archivo no existe.
            throw new Error(`No se pudo encontrar el archivo: ${fileName}`);
        }
        const data = await response.json();
        quizData = data.questions;

        // ¡Mejora! Mezclamos las preguntas para que cada test sea diferente.
        shuffleArray(quizData);

        // Iniciamos el cuestionario solo después de que los datos se hayan cargado.
        startQuiz();
    } catch (error) {
        console.error("Error CRÍTICO al cargar las preguntas:", error);
        displayError("Error: No se pudieron cargar las preguntas. Inténtalo más tarde.");
    }
}

/**
 * Muestra un mensaje de error en la interfaz de usuario.
 */
function displayError(message) {
    questionArea.innerHTML = `<h2>${message}</h2>`;
}

/**
 * Mezcla los elementos de un array usando el algoritmo Fisher-Yates.
 * @param {Array} array - El array a mezclar.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Inicia el cuestionario mostrando la primera pregunta.
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
 * Muestra la pregunta actual y sus opciones de respuesta.
 */
function displayCurrentQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        questionArea.innerHTML = `
            <div class="question-text">${question.questionNumber}. ${question.question}</div>
            <div class="answer-options">
                ${question.answerOptions.map(option =>
                    `<button>${option.text}</button>`
                ).join('')}
            </div>
        `;

        // Añadimos los event listeners a los nuevos botones.
        document.querySelectorAll('.answer-options button').forEach(button => {
            button.addEventListener('click', () => checkAnswer(button, question));
        });
        
        resultMessage.textContent = '';
        nextButton.style.display = 'none';

    } else {
        showFinalResults();
    }
}

/**
 * Comprueba la respuesta seleccionada, actualiza el estado y la UI.
 */
function checkAnswer(selectedButton, question) {
    const correctOption = question.answerOptions.find(option => option.isCorrect);

    // Deshabilitar todos los botones y mostrar colores de acierto/error
    document.querySelectorAll('.answer-options button').forEach(button => {
        button.disabled = true;
        if (button.textContent === correctOption.text) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    if (selectedButton.textContent === correctOption.text) {
        resultMessage.innerHTML = '✅ ¡Respuesta correcta!';
        resultMessage.style.color = 'var(--color-correct)';
        correctAnswers++;
    } else {
        resultMessage.innerHTML = `❌ Incorrecto. La respuesta correcta es: <strong>${correctOption.text}</strong><br><small>${correctOption.rationale || ''}</small>`;
        resultMessage.style.color = 'var(--color-incorrect)';
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
    const isPassed = correctAnswers >= 15; // Asumiendo que 15 es el mínimo para aprobar

    questionArea.innerHTML = `
        <h2>Resultados Finales</h2>
        <p>Has respondido correctamente a <strong>${correctAnswers} de ${totalQuestions}</strong> preguntas.</p>
        <p>Tu puntuación: <strong>${percentage.toFixed(0)}%</strong></p>
        <h3 style="color: ${isPassed ? 'var(--color-correct)' : 'var(--color-incorrect)'};">
            ${isPassed ? '¡ENHORABUENA, HAS APROBADO!' : 'Necesitas seguir practicando.'}
        </h3>
        <button onclick="startQuiz()">Repetir Test</button>
    `;
    nextButton.style.display = 'none';
    resultMessage.textContent = '';
}

// --- EVENT LISTENERS ---
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayCurrentQuestion();
});