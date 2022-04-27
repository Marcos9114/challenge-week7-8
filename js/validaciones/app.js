import { valida } from "./validaciones.js";
console.log()
const inputs = document.querySelectorAll("input");
console.log(inputs)
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

//valida que un text area no se encuentre vacio
document.querySelector(".enviar-mensaje-form").addEventListener("click", (e)=> {
  let str = document.getElementById("textarea");

  if (str.value.trim() === ""){
    str.parentElement.classList.add("input-container--invalid");
    str.parentElement.querySelector(".input-message-error").innerHTML =
    "El campo no puede estar vacio"
  }
  else{
     str.parentElement.classList.remove("input-container--invalid");
     str.parentElement.querySelector(".input-message-error").innerHTML = "";
  }

})

//valida el ingreso de producto en el html 


