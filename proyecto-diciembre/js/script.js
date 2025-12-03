// ====================================
// DATOS DE LAS PELÍCULAS
// ====================================
const movies = [
  {
    id: 0,
    title: "Dogman",
    year: "2023",
    rating: "7.2",
    image: "../imagenes 1/dog2.jpg",
    synopsis: "Un hombre que rescata perros callejeros mientras intenta sobrevivir en una sociedad brutal. Una historia de redención, violencia y lealtad entre un hombre y sus perros en las calles oscuras de la ciudad."
  },
  {
    id: 1,
    title: "Constantine",
    year: "2005",
    rating: "7.0",
    image: "../imagenes 1/constantine.jpg",
    synopsis: "John Constantine es un detective de lo oculto que literalmente ha estado en el infierno y ha regresado. Cuando una desesperada detective de policía pide su ayuda, debe enfrentar demonios y ángeles en una batalla por la humanidad."
  },
  {
    id: 2,
    title: "Sweeney Todd: El Barbero Diabólico",
    year: "2007",
    rating: "7.3",
    image: "../imagenes 1/el barbero.jpg",
    synopsis: "La historia sangrienta de Benjamin Barker, un barbero de Londres injustamente exiliado que regresa buscando venganza. Junto a la Sra. Lovett, convierte su barbería en un lugar de terror musical."
  },
  {
    id: 3,
    title: "El Laberinto del Fauno",
    year: "2006",
    rating: "8.2",
    image: "../imagenes 1/fauno.jpg",
    synopsis: "En la España de 1944, una niña fascinada con los cuentos de hadas es enviada junto a su madre enferma a vivir con su nuevo padrastro, un sádico oficial del ejército franquista. Durante la noche, conoce a un fauno que le revela su destino real."
  },
  {
    id: 4,
    title: "Drácula de Bram Stoker",
    year: "1992",
    rating: "7.4",
    image: "../imagenes 1/drac.jpg",
    synopsis: "El conde Drácula viaja desde Transilvania a Londres en busca de su amor perdido y para sembrar el terror. Una adaptación atmosférica y romántica del clásico de Bram Stoker que explora el origen del vampiro más famoso."
  },
  {
    id: 5,
    title: "From Hell",
    year: "2001",
    rating: "6.8",
    image: "../imagenes 1/jack.jpg",
    synopsis: "En el sórdido distrito de Whitechapel en 1888, el inspector Fred Abberline investiga una serie de asesinatos brutales cometidos por Jack el Destripador. Una conspiración oscura se revela mientras se adentra en el inframundo victoriano."
  },
  {
    id: 6,
    title: "Joker",
    year: "2019",
    rating: "8.4",
    image: "../imagenes 1/joker.jpg",
    synopsis: "Arthur Fleck es un comediante fracasado que lucha contra la enfermedad mental y la marginación social. En la decadente ciudad de Gotham, su descenso a la locura lo transforma en el criminal conocido como Joker."
  },
  {
    id: 7,
    title: "It",
    year: "2017",
    rating: "7.3",
    image: "../imagenes 1/it.jpg",
    synopsis: "Un grupo de niños marginados debe enfrentarse a sus peores miedos cuando se encuentran cara a cara con Pennywise, un payaso malvado cuya historia de asesinatos y violencia se remonta a siglos atrás."
  }
];
const SERIES = [
  {
    id: 0,
    title: "The Walking Dead",
    year: "2010",
    rating: "8.2",
    image: "../imagenes 1/SERIES I/THE WALKIN.JPG",
    synopsis:
      "Un grupo de sobrevivientes lucha por mantenerse con vida en un mundo devastado por zombis."
  },
  {
    id: 1,
    title: "Arcane",
    year: "2021",
    rating: "9.0",
    image: "../imagenes 1/SERIES I/ARCANE.jpg",
    synopsis:
      "Dos hermanas se enfrentan en una guerra entre Zaun y Piltover en una historia llena de magia y tragedia."
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    year: "2020",
    rating: "8.5",
    image: "../imagenes 1/SERIES I/JUJUTSU.jpg",
    synopsis:
      "Yuji Itadori se une a los hechiceros jujutsu para luchar contra maldiciones oscuras."
  },
  {
    id: 3,
    title: "Loki",
    year: "2021",
    rating: "8.3",
    image: "../imagenes 1/SERIES I/LOKI.jpg",
    synopsis:
      "El dios del engaño altera líneas temporales y enfrenta amenazas multiversales tras los eventos de Endgame."
  },
  {
    id: 4,
    title: "Taboo",
    year: "2017",
    rating: "8.4",
    image: "../imagenes 1/SERIES I/TABOO.jpg",
    synopsis:
      "James Keziah Delaney regresa a Londres para reclamar su herencia en una trama llena de conspiraciones."
  },
  {
    id: 5,
    title: "The Last of Us",
    year: "2023",
    rating: "8.9",
    image: "../imagenes 1/SERIES I/TLOU.jpg",
    synopsis:
      "Joel y Ellie emprenden un viaje a través de un mundo devastado por un hongo que transforma a los humanos."
  },
  {
    id: 6,
    title: "Peaky Blinders",
    year: "2013",
    rating: "8.8",
    image: "../imagenes 1/SERIES I/PEAKY.jpg",
    synopsis:
      "La familia Shelby asciende en el mundo criminal de Birmingham después de la Primera Guerra Mundial."
  },
  {
    id: 7,
    title: "Vikingos",
    year: "2013",
    rating: "8.5",
    image: "../imagenes 1/SERIES I/VIKINGOS.jpg",
    synopsis:
      "La leyenda de Ragnar Lothbrok y sus conquistas a lo largo del mundo vikingo."
  }
];


// ====================================
// INICIALIZACIÓN DE SWIPER
// ====================================
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ====================================
// FUNCIONALIDAD DEL MODAL
// ====================================
const modal = document.getElementById("movieModal");
const closeBtn = document.querySelector(".close");

// Variable global para la película actual en el modal
let currentMovieId = null;

// Abrir modal al hacer clic en una película
document.querySelectorAll(".swiper-slide").forEach(slide => {
  slide.addEventListener("click", function () {
    const movieId = parseInt(this.getAttribute("data-movie"));
    const movie = movies[movieId];
    currentMovieId = movieId;

    // Llenar el modal con los datos de la película
    document.getElementById("modalImage").src = movie.image;
    document.getElementById("modalTitle").textContent = movie.title;
    document.getElementById("modalRating").textContent = `⭐ ${movie.rating}/10`;
    document.getElementById("modalYear").textContent = `Año: ${movie.year}`;
    document.getElementById("modalSynopsis").textContent = movie.synopsis;

    // Actualizar estado del botón de favoritos
    updateFavoriteButton(movieId);

    // Mostrar el modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Evitar scroll del body
  });
});

// Seleccionar solo los slides que tienen data-SERIES
const slidesSeries = document.querySelectorAll('.swiper-slide[data-SERIES]');

// Mapa de enlaces YouTube para cada serie
const seriesLinks = {
  0: "https://www.youtube.com/watch?v=sfAc2U20uyg",
  1: "https://www.youtube.com/watch?v=3MB3OK3Xnvs",
  2: "https://www.youtube.com/watch?v=1jvK2e6YwDk",
  3: "https://www.youtube.com/watch?v=nW948Va-l10",
  4: "https://www.youtube.com/watch?v=W1fiijqrKuc",
  5: "https://www.youtube.com/watch?v=uLtkt8BonwM",
  6: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
  7: "https://www.youtube.com/watch?v=9GgxinPwAGc"
};

// CLICK EN SERIES → REDIRECCIÓN DIRECTA
slidesSeries.forEach(slide => {
  slide.addEventListener("click", (event) => {

    event.stopPropagation(); // 🔥 Evita que se abra el modal de películas

    const id = slide.getAttribute("data-SERIES");
    const link = seriesLinks[id];

    if (link) {
      window.location.href = link;   // 🔥 Redirige a YouTube
    }
  });
});

// Agregar evento a cada slide
slidesSeries.forEach(slide => {
  slide.addEventListener("click", () => {
    const id = slide.getAttribute("data-SERIES");
    const link = seriesLinks[id];
  });
});

// Cerrar modal al hacer clic en la X
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Cerrar modal al presionar la tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ====================================
// FUNCIONALIDAD DE BÚSQUEDA
// ====================================
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  const slides = document.querySelectorAll(".swiper-slide");
  let foundCount = 0;

  slides.forEach(slide => {
    const movieId = parseInt(slide.getAttribute("data-movie"));
    const movie = movies[movieId];
    const title = movie.title.toLowerCase();

    if (title.includes(searchTerm) || searchTerm === "") {
      // Mostrar el slide
      slide.style.opacity = "1";
      slide.style.pointerEvents = "auto";
      slide.style.visibility = "visible";
      foundCount++;
    } else {
      // Ocultar el slide sin romper Swiper
      slide.style.opacity = "0.3";
      slide.style.pointerEvents = "none";
      slide.style.visibility = "visible";
    }
  });

  // Actualizar el swiper después del filtrado
  swiper.update();

  // Feedback visual si no se encuentran resultados
  if (searchTerm !== "" && foundCount === 0) {
    console.log("No se encontraron películas con ese título");
  } else if (searchTerm !== "") {
    console.log(`Se encontraron ${foundCount} película(s)`);
  }
});

// ====================================
// MENÚ HAMBURGUESA RESPONSIVE
// ====================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menú al hacer clic en hamburguesa
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", function (event) {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ====================================
// FUNCIONALIDAD BOTONES DEL MODAL
// ====================================
const btnPlay = document.querySelector(".btn-play");
const btnFavorite = document.querySelector(".btn-favorite");

// Función para actualizar el estado visual del botón de favoritos
function updateFavoriteButton(movieId) {
  const icon = btnFavorite.querySelector("i");
  const isFav = favoritesManager.isFavorite(movieId);

  if (isFav) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    btnFavorite.classList.add("active");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    btnFavorite.classList.remove("active");
  }
}

//BOTON REPRODUCIR 
btnPlay.addEventListener("click", function () {
  const movieTitle = document.getElementById("modalTitle").textContent;

  // Links de cada película
  const trailers = {
    "Joker": "https://www.youtube.com/watch?v=hulEHlKDv1c&list=RDhulEHlKDv1c&start_radio=1",
    "Constantine": "https://www.youtube.com/watch?v=DEa508Xmmio",
    "Drácula de Bram Stoker": "https://www.youtube.com/watch?v=V7Oss4OZFiE",
    "It": "https://www.youtube.com/watch?v=hAUTdjf9rko",
    "El Laberinto del Fauno": "https://www.youtube.com/watch?v=F2M0WnbbZww",
    "From Hell": "https://www.youtube.com/watch?v=YDGw1MTEe9k",
    "Sweeney Todd: El Barbero Diabólico": "https://www.youtube.com/watch?v=L_hgrfZVlJA" 
  };

  // Si existe trailer, redirige
  if (trailers[movieTitle]) {
    window.location.href = trailers[movieTitle];
  } else {
    alert("No hay trailer disponible para esta película.");
  }
});

// Botón de favoritos (ahora funcional con localStorage)
btnFavorite.addEventListener("click", function () {
  if (currentMovieId === null) return;

  const movie = movies[currentMovieId];
  const wasAdded = favoritesManager.toggle(movie);

  if (wasAdded) {
    Toast.success(`"${movie.title}" se agregó a tus favoritos`, "¡Agregado!");
    updateFavoriteButton(currentMovieId);
  } else {
    Toast.info(`"${movie.title}" se eliminó de tus favoritos`, "Eliminado");
    updateFavoriteButton(currentMovieId);
  }
});

// Actualizar contador de favoritos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  favoritesManager.updateCounter();
});
