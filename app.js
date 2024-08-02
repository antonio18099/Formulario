document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    
    console.log('Formulario enviado:');
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
    
    // Aquí puedes agregar código para enviar los datos a un servidor
    
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});