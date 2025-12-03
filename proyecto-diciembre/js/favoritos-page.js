// ====================================
// PÁGINA DE FAVORITOS
// ====================================

let currentMovieId = null;

// Cargar y mostrar favoritos
function loadFavorites() {
    const favorites = favoritesManager.getAll();
    const grid = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('emptyState');
    const favCount = document.getElementById('favCount');

    // Actualizar contador
    favCount.textContent = favorites.length;

    if (favorites.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';

    // Generar cards de películas favoritas
    grid.innerHTML = favorites.map((movie, index) => `
        <div class="favorite-card" data-id="${movie.id}" style="animation-delay: ${index * 0.1}s">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="favorite-card-overlay">
                <div class="favorite-card-title">${movie.title}</div>
                <div class="favorite-card-rating">⭐ ${movie.rating}/10</div>
                <div class="favorite-card-actions">
                    <button class="btn-view" onclick="viewMovie(${movie.id})">
                        <i class="fa-solid fa-eye"></i> Ver
                    </button>
                    <button class="btn-remove" onclick="removeFavorite(${movie.id})">
                        <i class="fa-solid fa-trash"></i> Quitar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Ver detalles de película
function viewMovie(movieId) {
    const favorites = favoritesManager.getAll();
    const movie = favorites.find(m => m.id === movieId);

    if (!movie) return;

    currentMovieId = movieId;

    // Llenar el modal
    document.getElementById("modalImage").src = movie.image;
    document.getElementById("modalTitle").textContent = movie.title;
    document.getElementById("modalRating").textContent = `⭐ ${movie.rating}/10`;
    document.getElementById("modalYear").textContent = `Año: ${movie.year}`;
    document.getElementById("modalSynopsis").textContent = movie.synopsis;

    // Actualizar botón de favoritos
    const btnFavorite = document.querySelector('.btn-favorite');
    btnFavorite.innerHTML = '<i class="fa-solid fa-heart"></i> Quitar de favoritos';
    btnFavorite.classList.add('active');

    // Mostrar el modal
    const modal = document.getElementById("movieModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Quitar de favoritos
function removeFavorite(movieId) {
    const favorites = favoritesManager.getAll();
    const movie = favorites.find(m => m.id === movieId);

    if (!movie) return;

    favoritesManager.remove(movieId);
    Toast.success(`"${movie.title}" eliminado de favoritos`, 'Eliminado');
    loadFavorites();
}

// Configurar modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("movieModal");
    const closeBtn = document.querySelector(".close");
    const btnPlay = document.querySelector(".btn-play");
    const btnFavorite = document.querySelector(".btn-favorite");

    // Cerrar modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Cerrar con clic fuera
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Botón de reproducir
    btnPlay.addEventListener("click", function() {
        const movieTitle = document.getElementById("modalTitle").textContent;
        Toast.info(`Esta función se implementará con un reproductor de video`, `Reproduciendo: ${movieTitle}`);
    });

    // Botón de quitar favorito
    btnFavorite.addEventListener("click", function() {
        if (currentMovieId !== null) {
            removeFavorite(currentMovieId);
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Actualizar contador del navbar
    favoritesManager.updateCounter();

    // Cargar favoritos
    loadFavorites();

    // Menu hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (hamburger) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    });
});
