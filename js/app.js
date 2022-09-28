const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso); 
}
function agregarCurso(e){
    console.log(e.target.classList);

}
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    console.log('Presionaste el boton');
    }
}