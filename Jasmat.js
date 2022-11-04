//-------------------------------------------------------------------------INICIO------------------------------------------------------------------------------------
//------------------------------------------------------------- EFECTO DE SECCIÓN DE CONTACTO------------------------------------------------------------------------
//
//
//
const btn = document.getElementById("btn-contacto"); //Botón de "contáctenos"
//
const PanelContacto = document.getElementById("box-contacto"); //Panel de Contacto
//
// a continuación tenemos las animaciones de movimiento de la sección de contacto
btn.addEventListener("click", () => {
  btn.animate(
    [{ opacity: 1 }, { opacity: 0, transform: "translateY(-20vw)" }],
    { duration: 400, fill: "forwards" }
  );
  //Animación botón "Contáctenos"
  //
  PanelContacto.animate(
    [
      { opacity: 0, transform: "translateX(-50vw)" },
      { opacity: 1, transform: "translateX(0)" },
    ],
    { duration: 300, fill: "forwards", delay: 500 }
  );
}); //Animación del panel del formulario de Contacto

//
//
//
//

const ev = document.getElementById("e-v");
const li = document.getElementById("l-i");
const le = document.getElementById("l-e");

let interruptor = "cerrado";
function SelecciónServicios(E1, E2, E3) {
  if (interruptor == "cerrado") {
    document.getElementById("Servicios").animate(
      [{ paddingTop: "8.02vh", height: "92vh" }, { paddingTop: 0, height: "100vh" },],
      { duration: 200, fill: "forwards" });

    E1.animate([{ height: "30%" }, { height: "100%" }],
      { duration: 200, fill: "forwards", });

    E1.children[0].animate([{}, { alignSelf: "flex-start", margin: "0 0 5vh 5vw" }],
      { duration: 0, fill: "forwards" });

    E1.children[1].animate([{ height: 0 }, { height: "62vh" }],
      { duration: 200, fill: "forwards", delay: 200, });

    E2.animate([{ height: "30%" }, { height: "0" }],
      { duration: 200, fill: "forwards", });

    E3.animate([{ height: "30%" }, { height: "0" }],
      { duration: 200, fill: "forwards", });

    return (interruptor = "abierto");
  } else {
    document.getElementById("Servicios").animate([{ paddingTop: "8vh", height: "92.1vh" }, { paddingTop: 0, height: "100vh" }],
      { duration: 200, fill: "forwards", direction: "reverse", delay: 200 });

    E1.animate([{ height: "30%", gap: "0vh" }, { height: "100%", gap: "5vh" },],
      { duration: 200, fill: "forwards", direction: "reverse", delay: 200 });

    E1.children[0].animate([{ alignSelf: "center", margin: 0 }, { margin: "0 0 5vh 5vw", alignSelf: "flex-start" },],
      { duration: 0, fill: "forwards", direction: "reverse", delay: 200 });

    E1.children[1].animate([{ height: "0" }, { height: "61.5vh" }],
      { duration: 200, fill: "forwards", direction: "reverse", });

    E2.animate([{ height: "30%" }, { height: "0" }],
      { duration: 200, fill: "forwards", direction: "reverse", delay: 200, });

    E3.animate([{ height: "30%" }, { height: "0" }],
      { duration: 200, fill: "forwards", direction: "reverse", delay: 200, });
    return (interruptor = "cerrado");
  }
}

ev.addEventListener("click", () => {
  SelecciónServicios(ev, li, le);
});
li.addEventListener("click", () => {
  SelecciónServicios(li, ev, le);
});
le.addEventListener("click", () => {
  SelecciónServicios(le, li, ev);
});

// A Continuación están todas las configuraciones para el panel de contacto(Validaciones...etc)

// cuando se cambie el valor del campo o sea incorrecto, mostrar/resetear mensaje

let inputs = document.querySelectorAll("#Formulario input, #mensaje");

document.getElementById("Formulario").onsubmit = (e) => {
  e.preventDefault;

}





function validaciónNombre() {
  //Esta función hace una validación de contenido , dando las alertas de lo que falta para completar los campos
  let mensaje = "";
  if (/^[a-zA-Z]{3,16}$/.test(this.value) === false); {
    if (this.value == "") mensaje = 'Debe escribir su nombre aquí';
    else if (/[\W0-9_]+/.test(this.value) === true)
      mensaje = 'Este campo solamente admite letras de la A-Z';
    else if (/^[a-zA-Z]{1,3}$/.test(this.value) === true)
      mensaje = 'Este campo debe tener de 3 a 16 caracteres';
  }

  this.setCustomValidity(mensaje)
}


let nombre = document.getElementById("nombre");
// cuando se cambie el valor del campo o sea incorrecto, mostrar/resetear mensaje
nombre.addEventListener("invalid", validaciónNombre);
nombre.addEventListener("input", validaciónNombre);



function validaciónEmail(e) {
  //Esta función hace una validación de contenido , dando las alertas de lo que falta para completar los campos
  let mensaje = "";
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.value) === false) {
    mensaje = "Su correo no es correcto"
  }
  this.setCustomValidity(mensaje);
}

let email = document.getElementById("email");
// cuando se cambie el valor del campo o sea incorrecto, mostrar/resetear mensaje
email.addEventListener("invalid", validaciónEmail);


function validaMensaje(e) {
  let mensaje = "";
  if (/[\w]{15,300}/.test(this.value) != true) {

    if (this.value === "")
      mensaje = "Escriba su mensaje por favor";

    else if (/[\w]{1,14}/.test(this.value) === true)
      mensaje = "Este campo debe contener de 15 a 300 caracteres";

  }
  this.setCustomValidity(mensaje)
}

let mensaje = document.getElementById("mensaje");
// cuando se cambie el valor del campo o sea incorrecto, mostrar/resetear mensaje
mensaje.addEventListener("invalid", validaMensaje);
mensaje.addEventListener("input", validaMensaje);

let formulario = document.getElementById("Formulario");

// a continuación tenemos la función para que se mueva el panel de contacto al enviarlo.
const spanForm = document.getElementById("SpanImg");
function animacionContacto() {
  let keyframe;
  // 
  if (innerWidth >= 819) keyframe = document.getElementById("SpanImg").animate([{ left: 0 }, { left: "50%" }], { duration: 300, })
  else keyframe = document.getElementById("SpanImg").animate([{ top: 0, height: "40%" }, { top: "40%", height: "60%" }], { duration: 300, });
  spanForm.classList.add("span-form2");
  spanForm.classList.remove("span-form");
  return keyframe.finished
}



formulario.onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("btn-form").setAttribute("disabled", "true")
  document.querySelector(".spinner").style.opacity = 1;
  if (formulario.querySelectorAll("[required]").length === 3) {
    fetch("https://formsubmit.co/ajax/8dda35056fec33047586e447c7dbfb24", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nombre: nombre.value,
        Email: email.value,
        Mensaje: mensaje.value,
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject)
      .then(data => {
        document.querySelector(".spinner").style.opacity = 0;
        document.getElementById("PM-p").innerHTML = `Su mensaje <br> fue enviado con éxito,<br> nos pondremos en contacto con usted <br> a la brevedad`;
        animacionContacto()
      }).catch((error) => {
        document.querySelector(".spinner").style.opacity = 0;
        document.getElementById("PM-p").textContent = "Hubo un problema a la hora de enviar su mensaje,por favor, inténtelo mas tarde";
        animacionContacto()
      });
  } else console.log("El formulario no cumple los requisitos");

}
