<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
/* paste this line in verbatim */
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/mblvlgeo",
  title: "Contacto",
  fields: [
    {
      type: "email",
      label: "contacto-nombre:",
      name: "email",
      required: true,
      placeholder: "correo@email.com"
    },
    {
      type: "textarea",
      label: "contacto-mensaje:",
      name: "message",
      placeholder: "Escriba el mensaje",
    },
    { type: "submit" }
  ],
  
  styles: {
    title: {
      backgroundColor: "green"
    },
    button: {
      backgroundColor: "green"
    }
  }

});



