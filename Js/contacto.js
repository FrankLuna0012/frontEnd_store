const $form = document.querySelector('#form');
const $nombre = document.querySelector('#name');
const $tel = document.querySelector('#phone');
const $email = document.querySelector('#email');
const $mensaje = document.querySelector('#message');
const $parr = document.querySelector('#advertencia');
const $enviar = document.querySelector('#enviar');
const $modal = document.querySelector('#modalbtn');






//validar formulario

$form.addEventListener('keydown', e => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regextel = /^([0-9-])*$/;

    if (regexEmail.test($email.value) == true && $nombre.value.length >= 1 && regextel.test($tel.value) == true && $tel.value.length >= 1 && $mensaje.value.length >= 1) {
        $enviar.removeAttribute("disabled");

    } else {
        $enviar.setAttribute("disabled", "");
    }

})

$nombre.addEventListener('keydown', e => {
    if ($nombre.value.length < 2) {
        $nombre.classList.add("error");
        $nombre.classList.remove("right");
    } else {
        $nombre.classList.remove("error");
        $nombre.classList.add("right");
    }
})


$email.addEventListener('keydown', e => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test($email.value)) {
        $email.classList.add("error");
        $email.classList.remove("right");
    } else {
        $email.classList.remove("error");
        $email.classList.add("right");
    }
})

$mensaje.addEventListener('keydown', e => {
    if ($mensaje.value.length < 2) {
        $mensaje.classList.add("error");
        $mensaje.classList.remove("right");
    } else {
        $mensaje.classList.remove("error");
        $mensaje.classList.add("right");
    }
})

$tel.addEventListener('keydown', e => {
    let regextel = /^([0-9-])*$/;
    if ($tel.value.length < 1) {
        $tel.classList.add("error");
        $tel.classList.remove("right");
    } else if (regextel.test($tel.value)) {
        $tel.classList.remove("error");
        $tel.classList.add("right");
    }
})


//enviar formulario

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset();
        //location.reload();
        //alert('Gracias por contactarme, te escribiré pronto');
    }

}

