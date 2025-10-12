// =======================================================
// SCRIPT PRINCIPAL DEL CUESTIONARIO CCSE (VERSIÓN ROBUSTA)
// =======================================================

// --- VARIABLES GLOBALES ---
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let quizData = [];

// --- ELEMENTOS DEL DOM ---
const nextButton = document.getElementById('next-button');
const questionArea = document.getElementById('question-area');
const resultMessage = document.getElementById('result-message');

/**
 * 💡 FUNCIÓN DE INICIO
 */
window.onload = function() {
    if (!document.body.contains(questionArea)) {
        return; // No estamos en la página del quiz
    }

    const params = new URLSearchParams(window.location.search);
    const quizType = params.get('quiz');

    if (!quizType) {
        displayError("Error: No se ha seleccionado ningún test. Vuelve al menú principal.");
        return;
    }

    // 🔑 CAMBIO CRÍTICO: Construimos una URL absoluta y directa al archivo en el repositorio.
    // Esto evita los problemas de despliegue de GitHub Pages.
    const repoURL = 'https://raw.githubusercontent.com/forkaizen2023-sys/ccse-test-practica/master';
    const dataFile = `${repoURL}/data/${quizType}.json`;
    
    loadQuizData(dataFile);
};

/**
 * Carga las preguntas de forma asíncrona desde una URL de JSON.
 * @param {string} fileURL - La URL completa al archivo JSON.
 */
async function loadQuizData(fileURL) {
    try {
        const response = await fetch(fileURL);
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}: No se pudo encontrar el archivo en ${fileURL}`);
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
        displayError("No se pudieron cargar las preguntas. Revisa la consola (F12) para más detalles.");
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
    if (nextButton) nextButton.style.display = 'none';
    if (resultMessage) resultMessage.textContent = '';
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
        
        if (resultMessage) resultMessage.innerHTML = '';
        if (nextButton) nextButton.style.display = 'none';

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

    if (nextButton) nextButton.style.display = 'block';
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
    if (nextButton) nextButton.style.display = 'none';
    if (resultMessage) resultMessage.innerHTML = '';
}

// --- EVENT LISTENERS ---
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayCurrentQuestion();
    });
}