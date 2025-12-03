// ====================================
// SISTEMA DE FAVORITOS CON LOCALSTORAGE
// ====================================

// Clase para manejar favoritos
class FavoritesManager {
    constructor() {
        this.storageKey = 'movieFavorites';
        this.init();
    }

    // Inicializar
    init() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]));
        }
    }

    // Obtener todos los favoritos
    getAll() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey)) || [];
        } catch (error) {
            console.error('Error al obtener favoritos:', error);
            return [];
        }
    }

    // Verificar si una película es favorita
    isFavorite(movieId) {
        const favorites = this.getAll();
        return favorites.some(fav => fav.id === movieId);
    }

    // Agregar a favoritos
    add(movie) {
        const favorites = this.getAll();

        // Verificar si ya existe
        if (this.isFavorite(movie.id)) {
            return false;
        }

        favorites.push(movie);
        localStorage.setItem(this.storageKey, JSON.stringify(favorites));
        this.updateCounter();
        return true;
    }

    // Eliminar de favoritos
    remove(movieId) {
        let favorites = this.getAll();
        favorites = favorites.filter(fav => fav.id !== movieId);
        localStorage.setItem(this.storageKey, JSON.stringify(favorites));
        this.updateCounter();
        return true;
    }

    // Toggle favorito (agregar si no está, eliminar si está)
    toggle(movie) {
        if (this.isFavorite(movie.id)) {
            this.remove(movie.id);
            return false; // Removido
        } else {
            this.add(movie);
            return true; // Agregado
        }
    }

    // Obtener cantidad de favoritos
    count() {
        return this.getAll().length;
    }

    // Actualizar contador en el UI
    updateCounter() {
        const counter = document.getElementById('favoritesCounter');
        if (counter) {
            const count = this.count();
            counter.textContent = count;
            counter.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    // Limpiar todos los favoritos
    clear() {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
        this.updateCounter();
    }
}

// Instancia global
const favoritesManager = new FavoritesManager();

// Exportar para uso global
window.FavoritesManager = FavoritesManager;
window.favoritesManager = favoritesManager;
