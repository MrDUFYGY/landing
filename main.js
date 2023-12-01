document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  // Inicia el slider mostrando el primer slide
  showSlide(currentSlide);

  // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  setInterval(nextSlide, 3000);
});
