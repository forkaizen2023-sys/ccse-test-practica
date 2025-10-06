// Variables del cuestionario
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Elementos de la página
const nextButton = document.getElementById('next-button');
const quizContent = document.getElementById('quiz-content');
const questionArea = document.getElementById('question-area');
const resultMessage = document.getElementById('result-message');


/**
 * Muestra la pregunta actual en la pantalla.
 */
function loadQuestion() {
    // ⚠️ Solución al fallo: Asumimos que la variable quizData existe globalmente
    // ya que fue cargada por el script anterior en el HTML.
    
    // Si la variable no existe (error de sintaxis en el archivo de preguntas)
    if (typeof quizData === 'undefined' || !quizData.questions || quizData.questions.length === 0) {
        console.error("Error CRÍTICO: La variable quizData o su lista de preguntas no está definida. Revisa el archivo de datos (questions-es.js).");
        questionArea.innerHTML = '<h2>Error: No se pudieron cargar las preguntas. Verifica la sintaxis de tu archivo de datos.</h2>';
        return;
    }

    if (currentQuestionIndex < quizData.questions.length) {
        const currentQuestion = quizData.questions[currentQuestionIndex];
        questionArea.innerHTML = `
            <div class="question-text">${currentQuestion.question}</div>
            <div class="answer-options">
                ${currentQuestion.answerOptions.map(option => `<button>${option.text}</button>`).join('')}
            </div>
        `;

        document.querySelectorAll('.answer-options button').forEach(button => {
            button.addEventListener('click', () => checkAnswer(button, currentQuestion));
        });

        nextButton.style.display = 'none';
        resultMessage.textContent = '';
    } else {
        const totalQuestions = correctAnswers + incorrectAnswers;
        const percentage = (correctAnswers / totalQuestions) * 100;
        questionArea.innerHTML = '<h2>¡Has completado el cuestionario!</h2>';
        resultMessage.innerHTML = `
            <p>Aciertos: ${correctAnswers}</p>
            <p>Fallos: ${incorrectAnswers}</p>
            <p>Porcentaje de acierto: ${percentage.toFixed(0)}%</p>
        `;
        nextButton.style.display = 'none';
    }
}

/**
 * Verifica si la respuesta seleccionada es correcta y actualiza la interfaz.
 */
function checkAnswer(selectedButton, question) {
    const selectedText = selectedButton.textContent;
    const correctOption = question.answerOptions.find(option => option.isCorrect);

    document.querySelectorAll('.answer-options button').forEach(button => {
        const option = question.answerOptions.find(opt => opt.text === button.textContent);
        if (option.isCorrect) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (selectedText === correctOption.text) {
        resultMessage.textContent = '¡Respuesta correcta!';
        resultMessage.style.color = 'green';
        correctAnswers++;
    } else {
        resultMessage.textContent = `Respuesta incorrecta. La respuesta correcta es: ${correctOption.text}. Razón: ${correctOption.rationale}`;
        resultMessage.style.color = 'red';
        incorrectAnswers++;
    }

    nextButton.style.display = 'block';
}

/**
 * Avanza a la siguiente pregunta.
 */
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// 🚀 INICIADOR FINAL: Asegura que el test comienza solo cuando la página está lista.
window.onload = function() {
    loadQuestion();
};