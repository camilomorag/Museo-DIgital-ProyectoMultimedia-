// Datos de la línea de tiempo
const timelineData = [
    {
        year: 1991,
        title: "Primer sitio web",
        description: "Tim Berners-Lee crea el primer sitio web en el CERN.",
        image: "assets/images/first-website.jpg",
        category: "web-design"
    },
    {
        year: 1993,
        title: "NCSA Mosaic",
        description: "Primer navegador web popular con soporte para imágenes.",
        image: "assets/images/mosaic.jpg",
        category: "web-design"
    },
    {
        year: 1994,
        title: "GeoCities",
        description: "Servicio de hosting que permitía a cualquiera crear su sitio web.",
        image: "assets/images/geocities.jpg",
        category: "web-design"
    },
    {
        year: 1995,
        title: "JavaScript",
        description: "Nace el lenguaje que permitiría interactividad en la web.",
        image: "assets/images/javascript.jpg",
        category: "web-design"
    },
    {
        year: 1996,
        title: "Flash",
        description: "Macromedia Flash revoluciona la animación web.",
        image: "assets/images/flash.jpg",
        category: "multimedia"
    },
    {
        year: 1997,
        title: "GIF Animados",
        description: "Se popularizan los GIFs animados en páginas web.",
        image: "assets/images/animated-gif.gif",
        category: "multimedia"
    },
    {
        year: 1998,
        title: "Google",
        description: "Nace el buscador que cambiaría Internet.",
        image: "assets/images/google.jpg",
        category: "culture"
    },
    {
        year: 1999,
        title: "Napster",
        description: "Primer servicio popular de intercambio de archivos P2P.",
        image: "assets/images/napster.jpg",
        category: "culture"
    },
    {
        year: 2000,
        title: "Web 2.0",
        description: "Comienza la transición hacia la web interactiva.",
        image: "assets/images/web20.jpg",
        category: "transition"
    },
    {
        year: 2001,
        title: "Wikipedia",
        description: "Nace la enciclopedia colaborativa en línea.",
        image: "assets/images/wikipedia.jpg",
        category: "culture"
    },
    {
        year: 2004,
        title: "Facebook",
        description: "Comienza la era de las redes sociales.",
        image: "assets/images/facebook.jpg",
        category: "transition"
    },
    {
        year: 2005,
        title: "YouTube",
        description: "Revoluciona el compartir video en Internet.",
        image: "assets/images/youtube.jpg",
        category: "multimedia"
    },
    {
        year: 2007,
        title: "iPhone",
        description: "Comienza la era móvil de Internet.",
        image: "assets/images/iphone.jpg",
        category: "transition"
    },
    {
        year: 2010,
        title: "Instagram",
        description: "Populariza el compartir fotos desde móviles.",
        image: "assets/images/instagram.jpg",
        category: "culture"
    }
];

// Cargar línea de tiempo
function loadTimeline(decade) {
    const container = document.getElementById('timeline-items');
    container.innerHTML = '';
    
    const startYear = parseInt(decade);
    const endYear = startYear + 9;
    
    const decadeEvents = timelineData.filter(event => 
        event.year >= startYear && event.year <= endYear
    );
    
    if (decadeEvents.length === 0) {
        container.innerHTML = '<p class="no-events">No hay eventos para esta década.</p>';
        return;
    }
    
    decadeEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        eventElement.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${event.year}</div>
                <h3 class="timeline-title">${event.title}</h3>
                <img src="${event.image}" alt="${event.title}" class="timeline-image">
                <p class="timeline-description">${event.description}</p>
            </div>
        `;
        container.appendChild(eventElement);
    });
}

// Cargar década inicial
loadTimeline('1990');

// Configurar botones de década
document.querySelectorAll('.decade-selector button').forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        document.querySelectorAll('.decade-selector button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        // Cargar la década correspondiente
        const decade = this.getAttribute('data-decade');
        loadTimeline(decade);
    });
});

// Activar el primer botón por defecto
document.querySelector('.decade-selector button').classList.add('active');



// simulations.js
function showSimulation(type) {
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-simulation';
    closeBtn.textContent = 'X';
    closeBtn.onclick = () => overlay.remove();
    
    const iframe = document.createElement('iframe');
    iframe.style.width = '800px';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    
    // Configurar URLs de Wayback Machine para cada tipo
    const simulations = {
        'geocities': 'https://web.archive.org/web/19981202230410/http://truckinweb.com/',
        'netscape': 'https://web.archive.org/web/19981202230410/http://www.netscape.com/',
        'tables': 'https://web.archive.org/web/19991013052027/http://www.htmlhelp.com/',
        'flash': 'https://web.archive.org/web/20061230041832/http://www.shockwave.com/',
        'midi': 'https://web.archive.org/web/19990220055034/http://www.midifarm.com/',
        'web10': 'https://web.archive.org/web/19970101000000*/http://www.yahoo.com',
        'cern':' http://info.cern.ch/hypertext/WWW/TheProject.html'
    };
    
    iframe.src = simulations[type] || simulations['geocities'];
    
    modal.appendChild(closeBtn);
    modal.appendChild(iframe);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Añadir tecla Escape para cerrar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.remove();
    });
}

// Para la galería de GIFs

function showGifGallery() {
    const gifs = [
        { url: "assets/gifs/underconstruction.gif", name: "Under Construction" },
        { url: "assets/gifs/dancingbaby.gif", name: "Dancing Baby (1996)" },
        { url: "assets/gifs/hamsterdance.gif", name: "Hamster Dance (1998)" },
        { url: "assets/gifs/email.gif", name: "E-mail GIF" }
    ];

    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay';

    const modal = document.createElement('div');
    modal.className = 'simulation-modal';
    modal.innerHTML = `
        <button class="close-simulation">X</button>
        <h3 class="rainbow-text">✦ Galería GIF Retro ✦</h3>
        <div class="gif-display-container">
            <img src="${gifs[0].url}" class="active-gif">
            <p class="gif-name">${gifs[0].name}</p>
        </div>
        <div class="gif-controls">
            <button class="retro-btn" onclick="prevGif()">◀ Anterior</button>
            <button class="retro-btn" onclick="nextGif()">Siguiente ▶</button>
        </div>
    `;

    modal.querySelector('.close-simulation').onclick = () => overlay.remove();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Variables globales para controlar la galería
    window.currentGifIndex = 0;
    window.gifList = gifs;

    window.prevGif = function() {
        currentGifIndex = (currentGifIndex - 1 + gifList.length) % gifList.length;
        updateGifDisplay();
    };

    window.nextGif = function() {
        currentGifIndex = (currentGifIndex + 1) % gifList.length;
        updateGifDisplay();
    };

    function updateGifDisplay() {
        const gifDisplay = modal.querySelector('.active-gif');
        const gifName = modal.querySelector('.gif-name');
        gifDisplay.src = gifList[currentGifIndex].url;
        gifName.textContent = gifList[currentGifIndex].name;
    }
}

// simulations.js - Actualización para el reproductor MIDI avanzado
// simulations.js - Reproductor MP3 mejorado
// simulations.js - Reproductor MP3 mejorado
// simulations.js - Reproductor MP3 con tiempo dinámico
// simulations.js - Reproductor de playlist completo
// simulations.js - Reproductor avanzado con carátulas individuales
const audioLibrary = [
    {
        id: "win98",
        title: "Windows 98 Soundtrack",
        year: "1998",
        source: "Microsoft Corporation",
        songs: [
            {
                title: "Windows 98 Startup",
                file: "assets/audio/Windows 98 Sound_ Notify [PMSRkHPttek].mp3",
                cover: "assets/images/covers/win98_startup.jpg",
                description: "El icónico sonido de inicio de Windows 98",
                duration: "0:45"
            },
            {
                title: "Error Sound",
                file: "assets/audio/Microsoft Windows 98 Error - Sound Effect (HD) [9sycZ4GnUA4].mp3",
                cover: "assets/images/covers/win98_error.jpg",
                description: "Sonido de error clásico",
                duration: "0:03"
            },
            {
                title: "System Exit",
                file: "assets/audio/Windows 98 Exit Windows Sound Effect [iXffx7tq7qU].mp3",
                cover: "assets/images/covers/win98_exit.jpg",
                description: "Melodía de cierre del sistema",
                duration: "0:30"
            },
            {
                title: "Notify",
                file: "assets/audio/Windows 98 Sound_ Notify [PMSRkHPttek].mp3",
                cover: "assets/images/covers/win98_exit.jpg",
                description: "Un pling suave que aparecía en muchas acciones.",
                duration: "0:30"
            },
            {
                title: "Welcome Windows 98",
                file: "assets/audio/Windows 98 Welcome Music [mTf806u38Ng].mp3",
                cover: "assets/images/covers/win98_exit.jpg",
                description: "Una melodía relajante de fondo en la pantalla de bienvenida.",
                duration: "0:30"
            },
            
        ]
    },
    {
        id: "geocities",
        title: "GeoCities MIDI Collection",
        year: "1996-1999",
        source: "Various Geocities Pages",
        songs: [
            {
                title: "Welcome MIDI",
                file: "assets/audio/geocities_welcome.mid",
                cover: "assets/images/covers/geocities_welcome.jpg",
                description: "Melodía típica de bienvenida",
                duration: "2:15"
            },
            {
                title: "Under Construction",
                file: "assets/audio/geocities_construction.mid",
                cover: "assets/images/covers/geocities_construction.jpg",
                description: "Tema musical para páginas en construcción",
                duration: "1:45"
            }
        ]
    }
];

function showAudioPlayer() {
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal audio-library';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <h3 class="rainbow-text">♫ Biblioteca de Audio Retro ♫</h3>
        <div class="collections-grid">
            ${audioLibrary.map(collection => `
                <div class="collection-card" onclick="openCollection('${collection.id}')">
                    <img src="${collection.songs[0].cover}" class="collection-thumbnail">
                    <div class="collection-info">
                        <h4>${collection.title}</h4>
                        <p>${collection.songs.length} canciones • ${collection.year}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.querySelector('.close-simulation').onclick = () => overlay.remove();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function openCollection(collectionId) {
    const collection = audioLibrary.find(c => c.id === collectionId);
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal song-library';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <div class="collection-header">
            <h3 class="rainbow-text">${collection.title}</h3>
            <p class="collection-meta">${collection.year} • ${collection.source}</p>
        </div>
        
        <div class="songs-list">
            ${collection.songs.map((song, index) => `
                <div class="song-card" data-index="${index}">
                    <img src="${song.cover}" class="song-cover">
                    <div class="song-details">
                        <h4>${song.title}</h4>
                        <p>${song.description}</p>
                        <div class="song-meta">
                            <span class="song-duration">${song.duration}</span>
                            <button class="retro-btn play-btn" onclick="playSong('${collectionId}', ${index})">▶ Reproducir</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.querySelector('.close-simulation').onclick = () => overlay.remove();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function playSong(collectionId, songIndex) {
    const collection = audioLibrary.find(c => c.id === collectionId);
    const song = collection.songs[songIndex];
    
    // Cerrar cualquier reproductor existente
    const existingPlayer = document.querySelector('.song-player-overlay');
    if (existingPlayer) existingPlayer.remove();
    
    // Crear el reproductor
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay song-player-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal song-player';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <div class="player-content">
            <div class="song-cover-art">
                <img src="${song.cover}" alt="${song.title}">
                <div class="vinyl-record"></div>
            </div>
            
            <div class="song-info">
                <h3 class="rainbow-text">${song.title}</h3>
                <p class="song-description">${song.description}</p>
                <p class="song-collection">De: ${collection.title} (${collection.year})</p>
                
                <div class="player-controls">
                    <audio id="audio-player" src="${song.file}"></audio>
                    
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-fill"></div>
                        </div>
                        <div class="time-display">
                            <span id="current-time">0:00</span>
                            <span id="remaining-time">-${song.duration}</span>
                        </div>
                    </div>
                    
                    <div class="control-buttons">
                        <button class="control-btn" onclick="skipBackward()">⏪ 10s</button>
                        <button class="control-btn play-pause-btn" onclick="togglePlayPause()">▶</button>
                        <button class="control-btn" onclick="skipForward()">⏩ 10s</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const audio = modal.querySelector('#audio-player');
    const progressFill = modal.querySelector('#progress-fill');
    const currentTimeEl = modal.querySelector('#current-time');
    const remainingTimeEl = modal.querySelector('#remaining-time');
    const playPauseBtn = modal.querySelector('.play-pause-btn');
    
    // Configurar eventos de audio
    audio.onloadedmetadata = function() {
        // Actualizar duración total (por si es diferente al metadata)
        const duration = formatTime(audio.duration);
        remainingTimeEl.textContent = `-${duration}`;
    };
    
    audio.ontimeupdate = function() {
        // Actualizar barra de progreso
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${percent}%`;
        
        // Actualizar tiempos
        currentTimeEl.textContent = formatTime(audio.currentTime);
        remainingTimeEl.textContent = `-${formatTime(audio.duration - audio.currentTime)}`;
    };
    
    audio.onended = function() {
        playPauseBtn.textContent = "▶";
        document.querySelector('.vinyl-record').style.animationPlayState = 'paused';
    };
    
    // Configurar botón de cierre
    modal.querySelector('.close-simulation').onclick = function() {
        audio.pause();
        overlay.remove();
    };
    
    // Funciones globales de control
    window.togglePlayPause = function() {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    playPauseBtn.textContent = "⏸";
                    document.querySelector('.vinyl-record').style.animationPlayState = 'running';
                })
                .catch(e => console.error("Error al reproducir:", e));
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
            document.querySelector('.vinyl-record').style.animationPlayState = 'paused';
        }
    };
    
    window.skipBackward = function() {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    };
    
    window.skipForward = function() {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    };
    
    // Reproducir automáticamente al abrir
    audio.play().then(() => {
        playPauseBtn.textContent = "⏸";
    }).catch(e => {
        console.log("Autoplay bloqueado:", e);
    });
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
// Para MIDI
function playMidi() {
    const player = document.getElementById('midi-player');
    player.play();
    alert('♫ Reproduciendo muestra MIDI de los 90s...');
}
