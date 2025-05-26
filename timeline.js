document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        // ========== 1991-2011 ==========
        // Web Design (1991-2011)
        {
            year: 1991,
            title: "Primer sitio web",
            description: "Tim Berners-Lee crea el primer sitio web en el CERN.",
            image: "assets/images/1.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 1993,
            title: "NCSA Mosaic",
            description: "Primer navegador web popular con soporte para imágenes.",
            image: "assets/covers/NCSA_Mosaic.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 1994,
            title: "GeoCities",
            description: "Servicio de hosting que permitía a cualquiera crear su sitio web.",
            image: "assets/images/geocities.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 1995,
            title: "JavaScript",
            description: "Nace el lenguaje que permitiría interactividad en la web.",
            image: "assets/covers/javascript.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 1996,
            title: "CSS",
            description: "Primera especificación de Hojas de Estilo en Cascada.",
            image: "assets/images/css.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 1998,
            title: "Diseño con tablas",
            description: "Popularización del diseño web basado en tablas HTML.",
            image: "assets/images/tables.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 2000,
            title: "XHTML",
            description: "Estándar que combinaba HTML con XML.",
            image: "assets/images/xhtml.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 2004,
            title: "Web Standards Project",
            description: "Movimiento para estandarizar el diseño web.",
            image: "assets/images/webstandards.jpg",
            category: "web-design",
            period: "1991-2011"
        },
        {
            year: 2009,
            title: "HTML5",
            description: "Nueva versión de HTML con soporte multimedia nativo.",
            image: "assets/images/html5.jpg",
            category: "web-design",
            period: "1991-2011"
        },

        // Multimedia (1991-2011)
        {
            year: 1996,
            title: "Flash",
            description: "Macromedia Flash revoluciona la animación web.",
            image: "assets/covers/flash.jpg",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 1997,
            title: "GIF Animados",
            description: "Se popularizan los GIFs animados en páginas web.",
            image: "assets/images/animated-gif.gif",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 1998,
            title: "Winamp",
            description: "Reproductor de audio que popularizó los MP3.",
            image: "assets/images/winamp.jpg",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 1999,
            title: "Napster",
            description: "Revoluciona el intercambio de música digital.",
            image: "assets/covers/napster.jpg",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 2005,
            title: "YouTube",
            description: "Revoluciona el compartir video en Internet.",
            image: "assets/images/youtube.jpg",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 2007,
            title: "HTML5 Video",
            description: "Primeras implementaciones de video nativo en navegadores.",
            image: "assets/images/html5-video.jpg",
            category: "multimedia",
            period: "1991-2011"
        },
        {
            year: 2010,
            title: "WebM",
            description: "Formato de video abierto para la web.",
            image: "assets/images/webm.jpg",
            category: "multimedia",
            period: "1991-2011"
        },

        // Cultura Digital (1991-2011)
        {
            year: 1998,
            title: "Google",
            description: "Nace el buscador que cambiaría Internet.",
            image: "assets/covers/google.jpg",
            category: "culture",
            period: "1991-2011"
        },
        {
            year: 1999,
            title: "Blogger",
            description: "Plataforma que popularizó los blogs.",
            image: "assets/images/blogger.jpg",
            category: "culture",
            period: "1991-2011"
        },
        {
            year: 2003,
            title: "MySpace",
            description: "Primera red social masivamente popular.",
            image: "assets/images/myspace.jpg",
            category: "culture",
            period: "1991-2011"
        },
        {
            year: 2004,
            title: "Facebook",
            description: "Comienza la era de las redes sociales modernas.",
            image: "assets/images/facebook.jpg",
            category: "culture",
            period: "1991-2011"
        },
        {
            year: 2006,
            title: "Twitter",
            description: "Nace la plataforma de microblogging.",
            image: "assets/images/twitter.jpg",
            category: "culture",
            period: "1991-2011"
        },
        {
            year: 2010,
            title: "Instagram",
            description: "Populariza el compartir fotos desde móviles.",
            image: "assets/images/instagram.jpg",
            category: "culture",
            period: "1991-2011"
        },

        // Web 1.0 → 2.0 (1991-2011)
        {
            year: 2000,
            title: "Web 2.0",
            description: "Comienza la transición hacia la web interactiva.",
            image: "assets/images/web20.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2001,
            title: "Wikipedia",
            description: "Nace la enciclopedia colaborativa en línea.",
            image: "assets/images/wikipedia.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2004,
            title: "AJAX",
            description: "Técnica que permitió aplicaciones web más dinámicas.",
            image: "assets/images/ajax.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2005,
            title: "Google Maps",
            description: "Primer servicio web de mapas interactivos.",
            image: "assets/images/google-maps.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2007,
            title: "iPhone",
            description: "Comienza la era móvil de Internet.",
            image: "assets/images/iphone.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2008,
            title: "Chrome",
            description: "Google lanza su navegador con motor JavaScript V8.",
            image: "assets/images/chrome.jpg",
            category: "transition",
            period: "1991-2011"
        },
        {
            year: 2009,
            title: "Node.js",
            description: "JavaScript llega al servidor.",
            image: "assets/images/nodejs.jpg",
            category: "transition",
            period: "1991-2011"
        },

        // ========== 2011-2020 ==========
        // Web Design (2011-2020)
        {
            year: 2012,
            title: "Responsive Design",
            description: "Ethan Marcotte populariza el diseño adaptable.",
            image: "assets/images/responsive.jpg",
            category: "web-design",
            period: "2011-2020"
        },
        {
            year: 2013,
            title: "Flat Design",
            description: "Minimalismo y diseño plano dominan la web.",
            image: "assets/images/flat-design.jpg",
            category: "web-design",
            period: "2011-2020"
        },
        {
            year: 2015,
            title: "Material Design",
            description: "Sistema de diseño de Google basado en capas.",
            image: "assets/images/material-design.jpg",
            category: "web-design",
            period: "2011-2020"
        },
        {
            year: 2017,
            title: "CSS Grid",
            description: "Nuevo sistema de maquetación web.",
            image: "assets/images/css-grid.jpg",
            category: "web-design",
            period: "2011-2020"
        },

        // Multimedia (2011-2020)
        {
            year: 2012,
            title: "Web Audio API",
            description: "API para procesamiento de audio en navegadores.",
            image: "assets/images/webaudio.jpg",
            category: "multimedia",
            period: "2011-2020"
        },
        {
            year: 2015,
            title: "WebVR",
            description: "Primeras APIs para realidad virtual en navegadores.",
            image: "assets/images/webvr.jpg",
            category: "multimedia",
            period: "2011-2020"
        },
        {
            year: 2017,
            title: "WebRTC",
            description: "Comunicación en tiempo real en navegadores.",
            image: "assets/images/webrtc.jpg",
            category: "multimedia",
            period: "2011-2020"
        },

        // Cultura Digital (2011-2020)
        {
            year: 2011,
            title: "Snapchat",
            description: "Introduce los mensajes efímeros.",
            image: "assets/images/snapchat.jpg",
            category: "culture",
            period: "2011-2020"
        },
        {
            year: 2016,
            title: "TikTok",
            description: "Revoluciona el contenido de video corto.",
            image: "assets/images/tiktok.jpg",
            category: "culture",
            period: "2011-2020"
        },

        // Web 1.0 → 2.0 (2011-2020)
        {
            year: 2014,
            title: "Progressive Web Apps",
            description: "Concepto que une lo mejor de web y apps nativas.",
            image: "assets/images/pwa.jpg",
            category: "transition",
            period: "2011-2020"
        },

        // ========== 2020-2025 ==========
        // Web Design (2020-2025)
        {
            year: 2020,
            title: "Web Components",
            description: "Popularización de componentes web reutilizables.",
            image: "assets/images/web-components.jpg",
            category: "web-design",
            period: "2020-2025"
        },
        {
            year: 2022,
            title: "CSS Container Queries",
            description: "Diseño responsivo basado en contenedores.",
            image: "assets/images/container-queries.jpg",
            category: "web-design",
            period: "2020-2025"
        },

        // Multimedia (2020-2025)
        {
            year: 2020,
            title: "WebXR",
            description: "Estándar para realidad extendida en la web.",
            image: "assets/images/webxr.jpg",
            category: "multimedia",
            period: "2020-2025"
        },
        {
            year: 2022,
            title: "WebGPU",
            description: "Nueva API para gráficos 3D de alto rendimiento.",
            image: "assets/images/webgpu.jpg",
            category: "multimedia",
            period: "2020-2025"
        },

        // Cultura Digital (2020-2025)
        {
            year: 2020,
            title: "Clubhouse",
            description: "Populariza el audio social.",
            image: "assets/images/clubhouse.jpg",
            category: "culture",
            period: "2020-2025"
        },
        {
            year: 2023,
            title: "Threads",
            description: "Nueva plataforma de Meta para texto corto.",
            image: "assets/images/threads.jpg",
            category: "culture",
            period: "2020-2025"
        },

        // Web 1.0 → 2.0 (2020-2025)
        {
            year: 2020,
            title: "WebAssembly",
            description: "Permite ejecutar código de alto rendimiento en navegadores.",
            image: "assets/images/wasm.jpg",
            category: "transition",
            period: "2020-2025"
        },
        {
            year: 2024,
            title: "Web3",
            description: "Nuevos enfoques descentralizados para la web.",
            image: "assets/images/web3.jpg",
            category: "transition",
            period: "2020-2025"
        }
    ];

    let selectedCategory = "all";
    let selectedDecade = "1990";
    let selectedPeriod = "all";

    function loadTimeline(decade, category, period) {
        const container = document.getElementById('timeline-items');
        container.innerHTML = '';

        const startYear = parseInt(decade);
        const endYear = startYear + 9;

        const filteredEvents = timelineData.filter(event => {
            const yearMatch = event.year >= startYear && event.year <= endYear;
            const categoryMatch = category === "all" || event.category === category;
            const periodMatch = period === "all" || event.period === period;
            
            return yearMatch && categoryMatch && periodMatch;
        });

        if (filteredEvents.length === 0) {
            container.innerHTML = '<p class="no-events">No hay eventos para esta década, categoría y período.</p>';
            return;
        }

        filteredEvents.forEach((event, index) => {
            const eventElement = document.createElement('div');
            eventElement.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
            eventElement.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-year">${event.year}</div>
                    <h3 class="timeline-title">${event.title}</h3>
                    <img src="${event.image}" alt="${event.title}" class="timeline-image" onerror="this.style.display='none'">
                    <p class="timeline-description">${event.description}</p>
                    <span class="timeline-period">${event.period}</span>
                </div>
            `;
            container.appendChild(eventElement);
            setTimeout(() => eventElement.classList.add('visible'), 100 * index);
        });
    }

    // Botones de década
    document.querySelectorAll('.decade-selector button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.decade-selector button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedDecade = this.getAttribute('data-decade');
            loadTimeline(selectedDecade, selectedCategory, selectedPeriod);
        });
    });

    // Botones de categoría
    document.querySelectorAll('.category-selector button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-selector button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedCategory = this.getAttribute('data-category');
            loadTimeline(selectedDecade, selectedCategory, selectedPeriod);
        });
    });

    // Botones de período
    document.querySelectorAll('.period-selector button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.period-selector button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedPeriod = this.getAttribute('data-period');
            loadTimeline(selectedDecade, selectedCategory, selectedPeriod);
        });
    });

    // Cargar por defecto
    document.querySelector('.decade-selector button[data-decade="1990"]')?.classList.add('active');
    document.querySelector('.category-selector button[data-category="all"]')?.classList.add('active');
    document.querySelector('.period-selector button[data-period="all"]')?.classList.add('active');
    loadTimeline(selectedDecade, selectedCategory, selectedPeriod);
});