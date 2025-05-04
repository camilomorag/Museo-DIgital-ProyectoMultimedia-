// Efectos iniciales
document.addEventListener('DOMContentLoaded', function() {
    // Configurar cursor personalizado
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.retro-cursor');
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Efecto de terminal al cargar
    const terminalLines = document.querySelectorAll('.terminal-body p');
    let delay = 0;
    
    terminalLines.forEach(line => {
        setTimeout(() => {
            line.style.opacity = '1';
        }, delay);
        delay += 800;
    });
    
    // Contador de visitas aleatorio
    setInterval(() => {
        const counter = document.getElementById('visitor-counter');
        const count = Math.floor(Math.random() * 1000000);
        counter.textContent = count.toString().padStart(7, '0');
    }, 3000);
    
    // Configurar pestañas de exhibición
    const tabs = document.querySelectorAll('.exhibit-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover clase active de todas las pestañas y paneles
            document.querySelectorAll('.exhibit-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.exhibit-pane').forEach(p => p.classList.remove('active'));
            
            // Agregar clase active a la pestaña clickeada
            this.classList.add('active');
            
            // Mostrar el panel correspondiente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Simular "Presiona cualquier tecla para continuar"
    document.addEventListener('keydown', hideWelcomeMessage);
    document.addEventListener('click', hideWelcomeMessage);
    
    // Cargar libro de visitas
    loadGuestbook();
});

function hideWelcomeMessage() {
    const lastLine = document.querySelector('.terminal-body p:last-child');
    if (lastLine.textContent.includes('Presiona')) {
        lastLine.textContent = '> ¡Listo! Explora el museo usando el menú superior.';
        lastLine.style.animation = 'none';
    }
}

// Libro de visitas
function loadGuestbook() {
    const entries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
    const container = document.getElementById('guestbook-entries');
    
    container.innerHTML = '';
    
    if (entries.length === 0) {
        container.innerHTML = '<p class="no-entries">No hay firmas aún. ¡Sé el primero!</p>';
        return;
    }
    
    entries.slice().reverse().forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'guestbook-entry';
        entryElement.innerHTML = `
            <div class="entry-header">
                <span class="entry-name">${entry.name}</span>
                <span class="entry-date">${new Date(entry.date).toLocaleDateString()}</span>
            </div>
            <div class="entry-message">${entry.message}</div>
        `;
        container.appendChild(entryElement);
    });
}

function submitGuestbook() {
    const name = document.getElementById('gb-name').value.trim();
    const email = document.getElementById('gb-email').value.trim();
    const message = document.getElementById('gb-message').value.trim();
    
    if (!name || !message) {
        alert('Por favor completa al menos tu nombre y mensaje.');
        return;
    }
    
    const entries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
    entries.push({
        name,
        email,
        message,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('guestbookEntries', JSON.stringify(entries));
    
    // Limpiar formulario
    document.getElementById('gb-name').value = '';
    document.getElementById('gb-email').value = '';
    document.getElementById('gb-message').value = '';
    
    // Recargar entradas
    loadGuestbook();
    
    // Mostrar mensaje de agradecimiento
    const thankYou = document.createElement('div');
    thankYou.className = 'thank-you';
    thankYou.textContent = '¡Gracias por firmar mi libro de visitas!';
    document.querySelector('.guestbook-form').appendChild(thankYou);
    setTimeout(() => thankYou.remove(), 3000);
}

window.addEventListener('click', () => {
    const audio = document.getElementById('intro-audio');
    if (audio && audio.paused) {
        audio.play();
    }
}, { once: true });

function toggleMute() {
    const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('mute-btn');

    audio.muted = !audio.muted;
    btn.textContent = audio.muted ? '🔇' : '🔊';
}

// Permitir autoplay en algunos navegadores
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    audio.play().catch(e => {
        console.log('Autoplay bloqueado:', e);
    });
});

function startExperience() {
    const audio = document.getElementById('bg-audio');
    audio.play().catch(err => console.log("Error al reproducir:", err));
    document.getElementById('intro-screen').style.display = 'none';
}

const audio = document.getElementById('bg-audio');
const enterButton = document.getElementById('enter-button');
const introScreen = document.getElementById('intro-screen');

enterButton.addEventListener('click', () => {
  audio.play().catch(err => console.log("Error al reproducir audio:", err));
  introScreen.style.display = 'none';
});