// variables
const navPorcentaje = document.getElementById('nav-porcentaje');
const navTareas = document.getElementById('nav-tareas');

const seccionPorcentaje = document.getElementById('main-porcentaje');
const seccionTareas = document.getElementById('main-tareas');

const inputMonto = document.getElementById('input-monto');
const inputPorcentaje = document.getElementById('input-porcentaje');
const botonCalcular = document.getElementById('boton-calcular');
const parrafoResultado = document.getElementById('monto-resultado');

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
    seccionTareas.style.display = 'block';

    //ocultar seccion porcentaje
    seccionPorcentaje.style.display = 'none';

    //pintar nav
    navTareas.style.backgroundColor = 'var(--color-fondo-secundario)'
    navPorcentaje.style.backgroundColor = 'transparent';
})


// ----------------------- PORCENTAJE ----------------------------

botonCalcular.addEventListener('click', function(){
    //traer valores de monto y porcentaje
    const monto = parseFloat(inputMonto.value);
    const porcentaje = parseFloat(inputPorcentaje.value);

    //validación
    if(isNaN(monto) || isNaN(porcentaje)){
        alert("Por favor ingresa números válidos");
        parrafoResultado.textContent = `$`
        return;
    }

    //hacer cálculo
    const resultado = (monto * porcentaje) / 100;

    //mostrar en monto-resultado
    parrafoResultado.textContent = `$${resultado}`;
})