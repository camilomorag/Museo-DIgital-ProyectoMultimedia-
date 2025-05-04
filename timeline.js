document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        {
            year: 1991,
            title: "Primer sitio web",
            description: "Tim Berners-Lee crea el primer sitio web en el CERN .",
            image: "assets/images/1.jpg",
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

    let selectedCategory = "all";
    let selectedDecade = "1990";

    function loadTimeline(decade, category) {
        const container = document.getElementById('timeline-items');
        container.innerHTML = '';

        const startYear = parseInt(decade);
        const endYear = startYear + 9;

        const filteredEvents = timelineData.filter(event =>
            event.year >= startYear &&
            event.year <= endYear &&
            (category === "all" || event.category === category)
        );

        if (filteredEvents.length === 0) {
            container.innerHTML = '<p class="no-events">No hay eventos para esta década y categoría.</p>';
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
            loadTimeline(selectedDecade, selectedCategory);
        });
    });

    // Botones de categoría
    document.querySelectorAll('.category-selector button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-selector button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedCategory = this.getAttribute('data-category');
            loadTimeline(selectedDecade, selectedCategory);
        });
    });

    // Cargar por defecto
    document.querySelector('.decade-selector button[data-decade="1990"]')?.classList.add('active');
    document.querySelector('.category-selector button[data-category="all"]')?.classList.add('active');
    loadTimeline(selectedDecade, selectedCategory);
});