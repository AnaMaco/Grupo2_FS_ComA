<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Películas</title>

  <!-- Toast -->
  <link rel="stylesheet" href="../css/toast.css">

  <!-- Estilos principales -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

<!-- Mostrar TOAST si existe -->
<?php if (isset($_SESSION['mensaje'])): ?>
<script>
document.addEventListener("DOMContentLoaded", function() {
    showToast("<?= $_SESSION['mensaje'] ?>", "success");
});
</script>
<?php unset($_SESSION['mensaje']); endif; ?>


<!-- Modal para detalles -->
<div id="movieModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-body">
      <img id="modalImage" src="" alt="">
      <div class="modal-info">
        <h2 id="modalTitle"></h2>
        <div class="modal-rating">
          <span id="modalRating"></span>
        </div>
        <p class="modal-year" id="modalYear"></p>
        <p class="modal-synopsis" id="modalSynopsis"></p>
        <div class="modal-buttons">
          <button class="btn-play"><i class="fa-solid fa-play"></i> Reproducir</button>
          <button class="btn-favorite"><i class="fa-regular fa-heart"></i> Favorito</button>
        </div>
      </div>
    </div>
  </div>
</div>


<header>
  <nav class="navbar">
    <div class="nav-container container">

      <a href="index.php" class="nav-logo">
        <i class="fa-solid fa-film"></i>
        <span>Cine Gratis</span>
      </a>

      <ul class="nav-menu">
        <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="../html/peliculas.html" class="nav-link">Películas</a></li>
        <li class="nav-item"><a href="../html/series2.html" class="nav-link">Series</a></li>
        <li class="nav-item">
            <a href="favoritos.php" class="nav-link">
                Favoritos
                <span id="favoritesCounter" class="favorites-badge">0</span>
            </a>
        </li>
        <li class="nav-item"><a href="contactos.php" class="nav-link">Contacto</a></li>

        <!-- Botones cuenta -->
        <li class="nav-item nav-btn"><a href="login.php" class="nav-link btn-login">Iniciar Sesión</a></li>
        <li class="nav-item nav-btn"><a href="registro.php" class="nav-link btn-register">Registrarse</a></li>
      </ul>

      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

    </div>
  </nav>
</header>


<!-- Sección búsqueda -->
<section class="search container">
  <div class="search-txt">
    <i class="fa-brands fa-youtube"></i>
    <h2>Películas</h2>
  </div>

  <div class="search-box">
    <input type="text" id="searchInput" placeholder="Buscar películas...">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</section>

<!-- Carrusel de películas -->
  <section class="movies container">
    <h2>PELICULAS</h2>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper">

        <!-- Cada slide -->
        <div class="swiper-slide" data-movie="0">
          <img src="../imagenes 1/dog2.jpg" alt="Dogman">
          <div class="movie-overlay">
            <h3>Dogman</h3>
            <div class="rating">⭐ 7.2</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="1">
          <img src="../imagenes 1/constantine.jpg" alt="Constantine">
          <div class="movie-overlay">
            <h3>Constantine</h3>
            <div class="rating">⭐ 7.0</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="2">
          <img src="../imagenes 1/el barbero.jpg" alt="Sweeney Todd">
          <div class="movie-overlay">
            <h3>Sweeney Todd</h3>
            <div class="rating">⭐ 7.3</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="3">
          <img src="../imagenes 1/fauno.jpg" alt="El Laberinto del Fauno">
          <div class="movie-overlay">
            <h3>El Laberinto del Fauno</h3>
            <div class="rating">⭐ 8.2</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="4">
          <img src="../imagenes 1/drac.jpg" alt="Dracula">
          <div class="movie-overlay">
            <h3>Drácula de Bram Stoker</h3>
            <div class="rating">⭐ 7.4</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="5">
          <img src="../imagenes 1/jack.jpg" alt="Jack el Destripador">
          <div class="movie-overlay">
            <h3>From Hell</h3>
            <div class="rating">⭐ 6.8</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="6">
          <img src="../imagenes 1/joker.jpg" alt="Joker">
          <div class="movie-overlay">
            <h3>Joker</h3>
            <div class="rating">⭐ 8.4</div>
          </div>
        </div>
        <div class="swiper-slide" data-movie="7">
          <img src="../imagenes 1/it.jpg" alt="It">
          <div class="movie-overlay">
            <h3>It</h3>
            <div class="rating">⭐ 7.3</div>
          </div>
        </div>

      </div>
      <!-- Opcional: controles del carrusel -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>

   <section class="SERIES container">
    <h2>SERIES</h2>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper">

        <!-- Cada slide -->
        <div class="swiper-slide" data-SERIES="0">
          <img src="../imagenes 1/SERIES I/THE WALKIN.jpg" alt="THE_WALKING_DEAD">
          <div class="movie-overlay">
            <h3>THE WALKING DEAD</h3>
            <div class="rating">⭐ 7.2</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="1">
          <img src="../imagenes 1/SERIES I/ARCANE.jpg" alt="ARCANE">
          <div class="movie-overlay">
            <h3>ARCANE</h3>
            <div class="rating">⭐ 9.5</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="2">
          <img src="../imagenes 1/SERIES I/JUJUTSU.jpg" alt="JUJUTSU_KAISEN">
          <div class="movie-overlay">
            <h3>JUJUTSU_KAISEN</h3>
            <div class="rating">⭐ 7.3</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="3">
          <img src="../imagenes 1/SERIES I/LOKY.jpg" alt="LOKY">
          <div class="movie-overlay">
            <h3>LOKY</h3>
            <div class="rating">⭐ 8.0</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="4">
          <img src="../imagenes 1/SERIES I/TABOO.jpg" alt="TABU">
          <div class="movie-overlay">
            <h3>TABU</h3>
            <div class="rating">⭐ 7.9</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="5">
          <img src="../imagenes 1/SERIES I/THE LAST OF US.jpg" alt="THE_LAST_OF_US">
          <div class="movie-overlay">
            <h3>THE LAST OF US </h3>
            <div class="rating">⭐ 8.8</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="6">
          <img src="../imagenes 1/SERIES I/PEAKY.jpg" alt="PEAKY_BLINDER">
          <div class="movie-overlay">
            <h3>PEAKY BLINER</h3>
            <div class="rating">⭐ 8.4</div>
          </div>
        </div>
        <div class="swiper-slide" data-SERIES="7">
          <img src="../imagenes 1/SERIES I/VIKINGOS.jpg" alt="VIKINGOS">
          <div class="movie-overlay">
            <h3>VIKINGOS</h3>
            <div class="rating">⭐ 7.3</div>
          </div>
        </div>

      </div>
      <!-- Opcional: controles del carrusel -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>


<footer>
  <div class="footer-content container">
    <div class="footer-section">
      <h3>Películas Online</h3>
      <p>Tu plataforma favorita de películas</p>
    </div>
    <div class="footer-section">
      <h4>Enlaces</h4>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Películas</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Síguenos</h4>
      <div class="social-links">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Películas Online. Todos los derechos reservados.</p>
  </div>
</footer>


<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script src="../js/toast.js"></script>
<script src="../js/favorites.js"></script>
<script src="../js/script.js"></script>

</body>
</html>
