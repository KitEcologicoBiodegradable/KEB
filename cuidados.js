
const semillas = [

{
    nombre: "Tomate",
    imagen: "imagenes/tomate.jpg",
    descripcion: "Planta que produce frutos y necesita buena iluminación.",
    plantacion: "Coloca las semillas a 0.5 cm de profundidad en sustrato húmedo.",
    sol: "Entre 6 y 8 horas de sol directo.",
    riego: "Riega regularmente sin encharcar la tierra.",
    germinacion: "Entre 5 y 10 días.",
    cuidados: "Proporciona espacio para crecer y coloca un soporte cuando la planta lo necesite."
},

{
    nombre: "Chayote",
    imagen: "imagenes/chayote.jpg",
    descripcion: "Planta trepadora que produce frutos.",
    plantacion: "Se recomienda germinar utilizando el fruto completo, parcialmente cubierto con tierra.",
    sol: "Buena iluminación y varias horas de sol.",
    riego: "Mantén la tierra húmeda.",
    germinacion: "Puede tardar varias semanas.",
    cuidados: "Necesita espacio para extender sus guías y una estructura donde trepar."
},

{
    nombre: "Pepino",
    imagen: "imagenes/pepino.jpg",
    descripcion: "Planta de rápido crecimiento que produce frutos alargados.",
    plantacion: "Coloca las semillas a 2 cm de profundidad.",
    sol: "Entre 6 y 8 horas de sol.",
    riego: "Necesita riego frecuente y humedad constante.",
    germinacion: "Entre 3 y 10 días.",
    cuidados: "Proporciona espacio para sus guías y evita que la tierra se seque."
},

{
    nombre: "Lechuga",
    imagen: "imagenes/lechuga.jpg",
    descripcion: "Hortaliza de hojas verdes ideal para cultivar en casa.",
    plantacion: "Distribuye las semillas sobre la tierra y cúbrelas ligeramente.",
    sol: "Buena iluminación y sombra parcial en climas calurosos.",
    riego: "Mantén la tierra húmeda sin encharcar.",
    germinacion: "Entre 4 y 10 días.",
    cuidados: "Evita las temperaturas demasiado altas y retira hojas dañadas."
},

{
    nombre: "Chile verde",
    imagen: "imagenes/chile-verde.jpg",
    descripcion: "Planta que produce chiles y necesita temperaturas cálidas.",
    plantacion: "Coloca las semillas a una profundidad de 0.5 a 1 cm.",
    sol: "Entre 6 y 8 horas de sol directo.",
    riego: "Riega moderadamente y evita los encharcamientos.",
    germinacion: "Entre 7 y 21 días.",
    cuidados: "Protégela del frío y evita dañar sus raíces."
},

{
    nombre: "Chile habanero",
    imagen: "imagenes/habanero.jpg",
    descripcion: "Planta de frutos picantes que requiere calor para crecer.",
    plantacion: "Siembra las semillas a aproximadamente 0.5 cm de profundidad.",
    sol: "Entre 6 y 8 horas de sol.",
    riego: "Mantén la tierra ligeramente húmeda.",
    germinacion: "Entre 10 y 30 días.",
    cuidados: "Necesita temperaturas cálidas y protección contra el frío."
},

{
    nombre: "Lavanda",
    imagen: "imagenes/lavanda.jpg",
    descripcion: "Planta aromática conocida por sus flores.",
    plantacion: "Coloca las semillas sobre el sustrato y cúbrelas ligeramente.",
    sol: "Necesita abundante sol directo.",
    riego: "Riego moderado, evitando el exceso de humedad.",
    germinacion: "Entre 14 y 28 días o más.",
    cuidados: "Utiliza sustrato con buen drenaje."
},

{
    nombre: "Albahaca",
    imagen: "imagenes/albahaca.jpg",
    descripcion: "Hierba aromática utilizada en diferentes alimentos.",
    plantacion: "Coloca las semillas a 0.5 cm de profundidad.",
    sol: "Entre 4 y 6 horas de sol.",
    riego: "Riega regularmente sin saturar la tierra.",
    germinacion: "Entre 5 y 10 días.",
    cuidados: "Retira las puntas cuando esté desarrollada para favorecer nuevas ramas."
},

{
    nombre: "Zanahoria",
    imagen: "imagenes/zanahoria.jpg",
    descripcion: "Hortaliza de raíz que necesita tierra suelta.",
    plantacion: "Siembra directamente a 0.5 o 1 cm de profundidad. Evita trasplantarla.",
    sol: "Entre 6 y 8 horas de luz solar.",
    riego: "Mantén humedad constante.",
    germinacion: "Entre 7 y 21 días.",
    cuidados: "Necesita sustrato profundo, ligero y sin piedras."
},

{
    nombre: "Rábano",
    imagen: "imagenes/rabano.jpg",
    descripcion: "Hortaliza de raíz que crece rápidamente.",
    plantacion: "Coloca las semillas a una profundidad de 1 a 2 cm.",
    sol: "Entre 4 y 6 horas de sol.",
    riego: "Riega regularmente para evitar que la tierra se seque.",
    germinacion: "Entre 3 y 7 días.",
    cuidados: "Deja espacio entre plantas para que las raíces puedan desarrollarse."
}

];


// GENERAR TARJETAS

const contenedor = document.getElementById("contenedorTarjetas");

semillas.forEach((semilla, indice) => {

    const tarjeta = document.createElement("div");

    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `
        <img src="${semilla.imagen}" alt="${semilla.nombre}">

        <div class="tarjeta-info">
            <h3>${semilla.nombre}</h3>
            <p>${semilla.descripcion}</p>

            <button onclick="mostrarCuidados(${indice})">
                Ver cuidados
            </button>
        </div>
    `;

    contenedor.appendChild(tarjeta);

});


// MOSTRAR INFORMACIÓN

function mostrarCuidados(indice) {

    const semilla = semillas[indice];

    document.getElementById("imagenModal").src = semilla.imagen;
    document.getElementById("imagenModal").alt = semilla.nombre;

    document.getElementById("nombreModal").textContent = semilla.nombre;

    document.getElementById("informacionModal").innerHTML = `

        <div class="detalle">
            <h3>Descripción</h3>
            <p>${semilla.descripcion}</p>
        </div>

        <div class="detalle">
            <h3>Método de plantación</h3>
            <p>${semilla.plantacion}</p>
        </div>

        <div class="detalle">
            <h3>Exposición al sol</h3>
            <p>${semilla.sol}</p>
        </div>

        <div class="detalle">
            <h3>Riego</h3>
            <p>${semilla.riego}</p>
        </div>

        <div class="detalle">
            <h3>Tiempo de germinación</h3>
            <p>${semilla.germinacion}</p>
        </div>

        <div class="detalle">
            <h3>Cuidados adicionales</h3>
            <p>${semilla.cuidados}</p>
        </div>

        <div class="domo">

            <h3>Construye tu domo con una botella</h3>

            <p>
                Puedes utilizar una botella de plástico transparente
                para crear un pequeño invernadero que ayude a conservar
                la humedad durante la germinación.
                <br><br>
                <strong>1.</strong> Lava una botella de plástico y retira su etiqueta.
                <br><br>
                <strong>2.</strong> Corta la parte inferior de la botella.
                <br><br>
                <strong>3.</strong> Colócala sobre la maceta sin aplastar la planta.
                <br><br>
                <strong>4.</strong> Retira la tapa para permitir la ventilación.
                <br><br>
                <strong>5.</strong> Revisa diariamente la humedad y retira el domo
                cuando la planta haya germinado y necesite mayor ventilación.
                <br><br>
                <strong>Importante:</strong> No dejes el domo bajo el sol intenso,
                porque puede acumular demasiado calor.
            </p>

        </div>
    `;

    document.getElementById("modal").style.display = "block";
}


// CERRAR VENTANA

function cerrarCuidados() {
    document.getElementById("modal").style.display = "none";
}


// CERRAR AL PULSAR FUERA

window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        cerrarCuidados();
    }

};
