function mostrarApartado(id, enlace) {
    // Oculta todos los apartados con clase visible
    const apartados = document.querySelectorAll('.apartado');
    apartados.forEach(ap => {
      ap.classList.remove('visible');
    });

    // Muestra el apartado seleccionado
    const activo = document.getElementById(id);
    activo.classList.add('visible');

    
  }


   const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const container = header.parentElement;
      container.classList.toggle('active');
    });
  });