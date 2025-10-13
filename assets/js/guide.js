// =======================================================
// SCRIPT INTELIGENTE PARA CARGAR GUÍAS EN FORMATO DE TARJETAS
// =======================================================

window.onload = function() {
    const guideContent = document.getElementById('guide-content');
    const guideTitle = document.getElementById('guide-title');

    if (!guideContent) {
        return; // No estamos en la página de la guía
    }

    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    const lang = params.get('lang');

    if (!topic || !lang) {
        guideContent.innerHTML = '<h2>Error: Faltan parámetros en la URL.</h2>';
        return;
    }

    // Pone el título principal en la página (ej: "Empadronamiento")
    guideTitle.textContent = topic.charAt(0).toUpperCase() + topic.slice(1).replace('-', ' ');

    const markdownFile = `guides/${lang}/${topic}.md`;

    fetch(markdownFile)
        .then(response => {
            if (!response.ok) throw new Error(`Archivo no encontrado: ${markdownFile}`);
            return response.text();
        })
        .then(markdownText => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(markdownText);
            
            // 🔑 LÓGICA INTELIGENTE PARA CREAR LAS TARJETAS
            guideContent.innerHTML = ''; // Limpiamos el "Cargando..."
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            let currentCard = null;

            Array.from(tempDiv.children).forEach(element => {
                // Si encontramos un H2, empezamos una nueva tarjeta
                if (element.tagName === 'H2') {
                    // Si ya había una tarjeta, la añadimos al contenido antes de empezar la nueva
                    if (currentCard) {
                        guideContent.appendChild(currentCard);
                    }
                    currentCard = document.createElement('div');
                    currentCard.className = 'guide-card';
                }
                
                // Si estamos dentro de una tarjeta, añadimos el elemento actual a ella
                if (currentCard) {
                    currentCard.appendChild(element);
                } else {
                    // Si hay contenido antes del primer H2 (como una introducción), lo mostramos
                    guideContent.appendChild(element);
                }
            });

            // Añadimos la última tarjeta que quedó abierta
            if (currentCard) {
                guideContent.appendChild(currentCard);
            }
        })
        .catch(error => {
            console.error('Error al cargar la guía:', error);
            guideContent.innerHTML = '<h2>Lo sentimos, este contenido no está disponible.</h2>';
        });
};