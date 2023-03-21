const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

//añadir
var plantilla = document.querySelector("template")
var tabla = document.querySelector("tbody")

function getRecurso(){
  return {
    nombre : document.querySelector("input#nombre").value,
    direccion : document.querySelector("input#direccion").value,
    horario : document.querySelector("input#horario").value,
    telefono : document.querySelector("input#telefono").value,
    coordX : document.querySelector("input#coordX").value,  
    coordY: document.querySelector("input#coordY").value
  }
}

function addRow(recurso){
  let nuevaFila = plantilla.content.cloneNode(true)
  nuevaFila.querySelector(".nombre").textContent = recurso.nombre
  nuevaFila.querySelector(".direccion").textContent = recurso.direccion
  nuevaFila.querySelector(".horario").textContent = recurso.horario
  nuevaFila.querySelector(".telefono").textContent = recurso.telefono
  nuevaFila.querySelector(".coordX").textContent = recurso.coordX
  nuevaFila.querySelector(".coordY").textContent = recurso.coordY

  tabla.appendChild(nuevaFila)

  document.querySelector("form").reset()


}



document.querySelector("#formu").addEventListener("submit",
  (ev)=>{
    console.log("aqui")
    ev.preventDefault()
    addRow( getRecurso() )

        modal.classList.remove('modal--show');

    return true
  
  }
)
