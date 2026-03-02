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
        return;
    }

    //hacer cálculo
    const resultado = (monto * porcentaje) / 100;

    //mostrar en monto-resultado
    parrafoResultado.textContent = `$${resultado}`;
});