document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Validar campos
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos del formulario.");
    } else {
      // Enviar formulario
      alert("¡Formulario enviado! Gracias, estaremos en contacto contigo.");
      this.reset();
    }
  });
  