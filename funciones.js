// variables
const navPorcentaje = document.getElementById('nav-porcentaje');
const navTareas = document.getElementById('nav-tareas');

const seccionPorcentaje = document.getElementById('main-porcentaje');
const seccionTareas = document.getElementById('main-tareas');

const inputMonto = document.getElementById('input-monto');
const inputPorcentaje = document.getElementById('input-porcentaje');
const botonCalcular = document.getElementById('boton-calcular');
const parrafoResultado = document.getElementById('monto-resultado');

const errorMonto = document.getElementById('error-monto');
const errorPorcentaje = document.getElementById('error-porcentaje');

const tareaAñadir = document.getElementById('input-tarea');
const botonAñadir = document.getElementById('boton-agregar-tarea');
const contenedorTareas = document.getElementById('contenedor-tareas');

// ------------------------- HEADER ---------------------------

//EVENTO para cuando carga la pagina (por defecto)
document.addEventListener('DOMContentLoaded', () =>{
    //muestra la seccion
    seccionPorcentaje.style.display = 'flex';

    //ocultar seccion tareas
    seccionTareas.style.display = 'none';

    //pintar nav
    navPorcentaje.style.backgroundColor = 'var(--color-fondo-secundario)';
    navTareas.style.backgroundColor = 'transparent'
})

//EVENTO en porcentaje
navPorcentaje.addEventListener('click', function(){
    //muestra la seccion
    seccionPorcentaje.style.display = 'flex';

    //ocultar seccion tareas
    seccionTareas.style.display = 'none';

    //pintar nav
    navPorcentaje.style.backgroundColor = 'var(--color-fondo-secundario)';
    navTareas.style.backgroundColor = 'transparent'
});

//EVENTO en tareas
navTareas.addEventListener('click', function(){
    //muestra la seccion
    seccionTareas.style.display = 'flex';

    //ocultar seccion porcentaje
    seccionPorcentaje.style.display = 'none';

    //pintar nav
    navTareas.style.backgroundColor = 'var(--color-fondo-secundario)'
    navPorcentaje.style.backgroundColor = 'transparent';
})


// ----------------------- PORCENTAJE ----------------------------

botonCalcular.addEventListener('click', function(){
    //reiniciar posibles errores
    errorMonto.style.display = 'none';
    errorPorcentaje.style.display = 'none';

    //traer valores de monto y porcentaje
    const monto = parseFloat(inputMonto.value);
    const porcentaje = parseFloat(inputPorcentaje.value);

    //validación
    let huboError = false;

    if(isNaN(monto)){
        errorMonto.style.display = 'flex';
        huboError = true;
    }
    if(isNaN(porcentaje)){
        errorPorcentaje.style.display = 'flex';
        huboError = true;
    }

    if(huboError === true){
        parrafoResultado.textContent = `$`;
        return;
    }

    //hacer cálculo
    const resultado = (monto * porcentaje) / 100;

    //mostrar en monto-resultado
    parrafoResultado.textContent = `$${resultado}`;
});


// ----------------------- TAREAS ----------------------------
botonAñadir.addEventListener('click', function(){
    //traer lo que el usuario escribio
    const texto = tareaAñadir.value;

    if(texto ===  ""){
        return;
    }

    //armar tarea con checkbox
    const nuevaTarea = `
        <li>
            <label>
                <input type="checkbox" class="check-tarea">
                <span class="checkmark"></span>
                <span class="texto-tarea">${texto}</span>
            </label>
            <button class="boton-eliminar">🗑️</button>
        </li>    
    `

    //agregamos a la lista la tarea a lo ultimo que se agrego
    contenedorTareas.insertAdjacentHTML('beforeend', nuevaTarea);

    //limpiamos input
    tareaAñadir.value = "";
})

tareaAñadir.addEventListener('keydown', function(evento){
    //para que al añadir una tarea tambien se pueda usar el ENTER (UX)
    if(evento.key === 'Enter'){
        botonAñadir.click();
    }
})

contenedorTareas.addEventListener('click', function(evento){
    //guardo donde se hizo el click
    const elementoSeleccionado = evento.target;

    //preguntamos si lo que se selecciono contiene la clase boton-elimninar
    if(elementoSeleccionado.classList.contains('boton-eliminar')){
        //guardamos la etiqueta entera (.closest sube agarrando todo hasta la etiqueta que le digamos)
        const tareaEntera = elementoSeleccionado.closest('li');

        tareaEntera.remove();
    }
})