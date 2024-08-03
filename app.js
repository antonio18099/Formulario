const frmEmail = document.getElementById('contactForm')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_6agkihg'
const templateId = 'template_lqbu7o9'
const apikey = 'IfiAKkEoawMOm1Iw5'

emailjs.init(apikey);

function sendEmail(event) {
    event.preventDefault()

    emailjs.sendForm(serviceId, templateId, event.target, apikey)
    .then( result => Swal.fire('Su mensaje se ha enviado con éxito.') )
    .catch( error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ha sido posible enviar el mensaje!',
        })
    } )
}


/* document.getElementById('contactForm').addEventListener('submit', function(event) {
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
}); */