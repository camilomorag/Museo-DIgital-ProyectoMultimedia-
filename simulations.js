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
// simulations.js - Versión actualizada con soporte para videos

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
                cover: "assets/covers/Windows 98 Startup.jpg",
                description: "El icónico sonido de inicio de Windows 98",
                duration: "0:45"
            },
            {
                title: "Error Sound",
                file: "assets/audio/Microsoft Windows 98 Error - Sound Effect (HD) [9sycZ4GnUA4].mp3",
                cover: "assets/covers/error.jpg",
                description: "Sonido de error clásico",
                duration: "0:03"
            },
            {
                title: "System Exit",
                file: "assets/audio/Windows 98 Exit Windows Sound Effect [iXffx7tq7qU].mp3",
                cover: "assets/covers/system exit.jpg",
                description: "Melodía de cierre del sistema",
                duration: "0:30"
            },
            {
                title: "Notify",
                file: "assets/audio/Windows 98 Sound_ Notify [PMSRkHPttek].mp3",
                cover: "assets/covers/notify.jpg",
                description: "Un pling suave que aparecía en muchas acciones.",
                duration: "0:30"
            },
            {
                title: "Welcome Windows 98",
                file: "assets/audio/Windows 98 Welcome Music [mTf806u38Ng].mp3",
                cover: "assets/covers/inicio.jpg",
                description: "Una melodía relajante de fondo en la pantalla de bienvenida.",
                duration: "0:30"
            },
        
            // ... más canciones ...
        ],
        videos: [
            {
                title: "Windows 98 Commercial",
                file: "assets/videos/Windows 98 Commercial (240p).mp4",
                thumbnail: "assets/videos/covers videos/windows 98.jpg",
                description: "Anuncio original de lanzamiento de Windows 98",
                duration: "0:30"
            },
            {
                title: "Windows 98 Startup",
                file: "assets/videos/Windows 98 Startup (480p).mp4",
                thumbnail: "assets/videos/covers videos/windows 98 starup.jpg",
                description: "Demostracion Windows 98 startup",
                duration: "0:30"
            }
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
                file: "assets/audio/8-bit Ipanema song (from 90's Geocities Website) [_7_dmj5Woh0].mp3",
                cover: "assets/covers/genocities.jpg",
                description: "Melodía típica de bienvenida",
                duration: "2:15"
            }
        ],
        videos: [
            {
                title: "Tour por GeoCities",
                file: "assets/videos/geocities-tour.mp4",
                thumbnail: "assets/covers/geocities-tour-thumb.jpg",
                description: "Recorrido por sitios clásicos de GeoCities",
                duration: "1:45"
            }
        ]
    },
    {
        id: "netscape",
        title: "Netscape Navigator",
        year: "1994-2008",
        source: "Netscape Communications",
        songs: [
            {
                title: "Netscape Theme",
                file: "assets/audio/netscape-theme.mp3",
                cover: "assets/covers/nestcape_musciCover.jpg",
                description: "Tema musical de Netscape Navigator",
                duration: "1:30"
            }
        ],
        videos: [
            {
                title: "Netscape Comercial",
                file: "assets/videos/Netscape - Navigator - Internet Browser Commercial Search Engine (2000) (480p).mp4",
                thumbnail: "assets/videos/covers videos/nesstcapecover.jpg.png",
                description: "Netscape Navigator Internet Browser Commercial Search Engine (2000)",
                duration: "2:00"
            },
            {
                title: "Netscape Navigator",
                file: "assets/videos/Apple Macintosh - Netscape Navigator 1.0N (1994) Netscape (720p).mp4",
                thumbnail: "/assets/videos/covers videos/Apple Macintosh - Netscape Navigator 1.0N (1994) Netscape.jpg",
                description: " Netscape Navigator 1.0N (1994) Netscape",
                duration: "2:00"
            }
        ]
    }
];

// Función para mostrar el reproductor multimedia
function showMediaPlayer(collectionId, mediaType, mediaIndex = 0) {
    const collection = audioLibrary.find(c => c.id === collectionId);
    if (!collection) return;

    // Determinar qué tipo de media mostrar
    const mediaItems = mediaType === 'video' ? (collection.videos || []) : (collection.songs || []);
    if (mediaItems.length === 0) {
        alert(`No hay ${mediaType === 'video' ? 'videos' : 'canciones'} disponibles para esta colección.`);
        return;
    }

    const mediaItem = mediaItems[mediaIndex];
    
    // Cerrar cualquier reproductor existente
    const existingPlayer = document.querySelector('.media-player-overlay');
    if (existingPlayer) existingPlayer.remove();
    
    // Crear el reproductor
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay media-player-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal media-player';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <div class="player-content">
            <div class="media-cover-art">
                ${mediaType === 'audio' ? `
                <img src="${mediaItem.cover}" alt="${mediaItem.title}">
                <div class="vinyl-record"></div>
                ` : `
                <video id="media-element" src="${mediaItem.file}" poster="${mediaItem.thumbnail}" controls></video>
                `}
            </div>
            
            <div class="media-info">
                <h3 class="rainbow-text">${mediaItem.title}</h3>
                <p class="media-description">${mediaItem.description}</p>
                <p class="media-collection">De: ${collection.title} (${collection.year})</p>
                
                ${mediaType === 'audio' ? `
                <div class="player-controls">
                    <audio id="media-element" src="${mediaItem.file}"></audio>
                    
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-fill"></div>
                        </div>
                        <div class="time-display">
                            <span id="current-time">0:00</span>
                            <span id="remaining-time">-${mediaItem.duration}</span>
                        </div>
                    </div>
                    
                    <div class="control-buttons">
                        <button class="control-btn" onclick="skipBackward()">⏪ 10s</button>
                        <button class="control-btn play-pause-btn" onclick="togglePlayPause()">▶</button>
                        <button class="control-btn" onclick="skipForward()">⏩ 10s</button>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
        
        <!-- Navegación entre elementos multimedia -->
        <div class="media-navigation">
            ${mediaType === 'audio' ? `
            <button class="retro-btn" onclick="showMediaList('${collectionId}', 'audio')">🎵 Ver todas las canciones</button>
            ${collection.videos?.length > 0 ? `<button class="retro-btn" onclick="showMediaList('${collectionId}', 'video')">🎥 Ver videos</button>` : ''}
            ` : `
            <button class="retro-btn" onclick="showMediaList('${collectionId}', 'video')">🎥 Ver todos los videos</button>
            ${collection.songs?.length > 0 ? `<button class="retro-btn" onclick="showMediaList('${collectionId}', 'audio')">🎵 Ver canciones</button>` : ''}
            `}
        </div>
    `;
    
    const mediaElement = modal.querySelector('#media-element');
    const progressFill = modal.querySelector('#progress-fill');
    const currentTimeEl = modal.querySelector('#current-time');
    const remainingTimeEl = modal.querySelector('#remaining-time');
    const playPauseBtn = modal.querySelector('.play-pause-btn');
    
    if (mediaType === 'audio') {
        // Configurar eventos de audio
        mediaElement.onloadedmetadata = function() {
            const duration = formatTime(mediaElement.duration);
            remainingTimeEl.textContent = `-${duration}`;
        };
        
        mediaElement.ontimeupdate = function() {
            const percent = (mediaElement.currentTime / mediaElement.duration) * 100;
            progressFill.style.width = `${percent}%`;
            
            currentTimeEl.textContent = formatTime(mediaElement.currentTime);
            remainingTimeEl.textContent = `-${formatTime(mediaElement.duration - mediaElement.currentTime)}`;
        };
        
        mediaElement.onended = function() {
            if (playPauseBtn) playPauseBtn.textContent = "▶";
            const vinyl = modal.querySelector('.vinyl-record');
            if (vinyl) vinyl.style.animationPlayState = 'paused';
        };
    }
    
    // Configurar botón de cierre
    modal.querySelector('.close-simulation').onclick = function() {
        if (mediaElement) mediaElement.pause();
        overlay.remove();
    };
    
    // Funciones globales de control para audio
    if (mediaType === 'audio') {
        window.togglePlayPause = function() {
            if (mediaElement.paused) {
                mediaElement.play()
                    .then(() => {
                        playPauseBtn.textContent = "⏸";
                        const vinyl = document.querySelector('.vinyl-record');
                        if (vinyl) vinyl.style.animationPlayState = 'running';
                    })
                    .catch(e => console.error("Error al reproducir:", e));
            } else {
                mediaElement.pause();
                playPauseBtn.textContent = "▶";
                const vinyl = document.querySelector('.vinyl-record');
                if (vinyl) vinyl.style.animationPlayState = 'paused';
            }
        };
        
        window.skipBackward = function() {
            mediaElement.currentTime = Math.max(0, mediaElement.currentTime - 10);
        };
        
        window.skipForward = function() {
            mediaElement.currentTime = Math.min(mediaElement.duration, mediaElement.currentTime + 10);
        };
        
        // Reproducir automáticamente al abrir (solo audio)
        mediaElement.play().then(() => {
            if (playPauseBtn) playPauseBtn.textContent = "⏸";
        }).catch(e => {
            console.log("Autoplay bloqueado:", e);
        });
    }
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// Función para mostrar la lista de medios (audio/video)
function showMediaList(collectionId, mediaType) {
    const collection = audioLibrary.find(c => c.id === collectionId);
    if (!collection) return;

    const mediaItems = mediaType === 'video' ? (collection.videos || []) : (collection.songs || []);
    if (mediaItems.length === 0) {
        alert(`No hay ${mediaType === 'video' ? 'videos' : 'canciones'} disponibles para esta colección.`);
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay media-list-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal media-library';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <div class="collection-header">
            <h3 class="rainbow-text">${collection.title}</h3>
            <p class="collection-meta">${collection.year} • ${collection.source}</p>
            <h4>${mediaType === 'video' ? '🎥 Videos disponibles' : '🎵 Canciones disponibles'}</h4>
            
            <!-- Selector de tipo de medio -->
            <div class="media-type-selector">
                <button class="retro-btn ${mediaType === 'audio' ? 'active' : ''}" onclick="showMediaList('${collectionId}', 'audio')">🎵 Canciones (${collection.songs?.length || 0})</button>
                <button class="retro-btn ${mediaType === 'video' ? 'active' : ''}" onclick="showMediaList('${collectionId}', 'video')">🎥 Videos (${collection.videos?.length || 0})</button>
            </div>
        </div>
        
        <div class="media-items-list">
            ${mediaItems.map((item, index) => `
                <div class="media-item" data-index="${index}">
                    ${mediaType === 'audio' ? `
                    <img src="${item.cover}" class="media-thumbnail">
                    ` : `
                    <video class="media-thumbnail" poster="${item.thumbnail}" muted loop>
                        <source src="${item.file}" type="video/mp4">
                    </video>
                    `}
                    <div class="media-details">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <div class="media-meta">
                            <span class="media-duration">${item.duration}</span>
                            <button class="retro-btn play-btn" onclick="showMediaPlayer('${collectionId}', '${mediaType}', ${index})">
                                ${mediaType === 'audio' ? '▶ Reproducir' : '🎥 Ver video'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.querySelector('.close-simulation').onclick = () => overlay.remove();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Configurar hover para videos (reproducir en miniatura)
    if (mediaType === 'video') {
        const videoThumbnails = modal.querySelectorAll('.media-thumbnail');
        videoThumbnails.forEach(video => {
            video.addEventListener('mouseenter', () => video.play());
            video.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        });
    }
}

// Función para mostrar el selector de colecciones (actualizada)
function showAudioPlayer() {
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal audio-library';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <h3 class="rainbow-text">📻 Biblioteca Multimedia Retro 📻</h3>
        <div class="collections-grid">
            ${audioLibrary.map(collection => `
                <div class="collection-card" onclick="openCollection('${collection.id}')">
                    <img src="${collection.songs?.[0]?.cover || collection.videos?.[0]?.thumbnail || 'assets/covers/default.jpg'}" class="collection-thumbnail">
                    <div class="collection-info">
                        <h4>${collection.title}</h4>
                        <p>${collection.year}</p>
                        <div class="collection-stats">
                            ${collection.songs?.length > 0 ? `<span>🎵 ${collection.songs.length}</span>` : ''}
                            ${collection.videos?.length > 0 ? `<span>🎥 ${collection.videos.length}</span>` : ''}
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

// Función para abrir una colección (actualizada)
function openCollection(collectionId) {
    const collection = audioLibrary.find(c => c.id === collectionId);
    const overlay = document.createElement('div');
    overlay.className = 'simulation-overlay collection-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'simulation-modal song-library';
    modal.innerHTML = `
        <button class="close-simulation">✕</button>
        <div class="collection-header">
            <img src="${collection.songs?.[0]?.cover || collection.videos?.[0]?.thumbnail || 'assets/covers/default.jpg'}" class="collection-large-cover">
            <div class="collection-details">
                <h3 class="rainbow-text">${collection.title}</h3>
                <p class="collection-description">${collection.source} (${collection.year})</p>
                
                <div class="collection-buttons">
                    ${collection.songs?.length > 0 ? `
                    <button class="retro-btn" onclick="showMediaList('${collection.id}', 'audio')">
                        🎵 Ver canciones (${collection.songs.length})
                    </button>
                    ` : ''}
                    
                    ${collection.videos?.length > 0 ? `
                    <button class="retro-btn" onclick="showMediaList('${collection.id}', 'video')">
                        🎥 Ver videos (${collection.videos.length})
                    </button>
                    ` : ''}
                </div>
            </div>
        </div>
        
        <div class="collection-content">
            <h4>✦ Descripción ✦</h4>
            <p class="collection-full-description">
                ${getCollectionDescription(collectionId)}
            </p>
        </div>
    `;
    
    modal.querySelector('.close-simulation').onclick = () => overlay.remove();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// Función auxiliar para obtener descripción de la colección
function getCollectionDescription(collectionId) {
    const descriptions = {
        "win98": "Colección de sonidos y música del sistema operativo Windows 98, incluyendo sonidos de sistema, melodías de inicio y cierre, y más.",
        "geocities": "Música MIDI típica que se encontraba en las páginas de GeoCities, el famoso servicio de hosting de los 90s.",
        "netscape": "Sonidos y música relacionados con Netscape Navigator, el navegador web dominante en los primeros años de Internet."
    };
    return descriptions[collectionId] || "Colección multimedia histórica de Internet.";
}

// Función para formatear el tiempo
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
