const frmEmail = document.getElementById('frm-email')
fmrEmail.addEventListener('submit',senEmail)

const serviceId = 'service_6agkihg'
const templateId = 'template_lqbu7o9'
const apikey = 'IfiAKkEoawMOm1Iw5'

function senEmail(event) {
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
    .then( result => Swal.fire('Su mensaje se ha enviado con exito.') )
    .catch( error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ha sido posible enviar el mansaje!',
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