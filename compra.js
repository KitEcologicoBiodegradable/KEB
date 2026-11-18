
const precio = 142.25;

const semilla = document.getElementById("semilla");
const cantidad = document.getElementById("cantidad");

const resumenSemilla = document.getElementById("resumenSemilla");
const resumenCantidad = document.getElementById("resumenCantidad");
const total = document.getElementById("total");

function actualizarCompra() {

    let numero = parseInt(cantidad.value);

    if (isNaN(numero) || numero < 1) {
        numero = 1;
        cantidad.value = 1;
    }

    resumenSemilla.textContent =
        semilla.value || "No seleccionada";

    resumenCantidad.textContent = numero;

    let resultado = precio * numero;

    total.textContent = resultado.toFixed(2);
}

semilla.addEventListener("change", actualizarCompra);
cantidad.addEventListener("input", actualizarCompra);

const formulario = document.getElementById("formCompra");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (semilla.value === "") {
        alert("Selecciona una semilla antes de continuar.");
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const pago = document.getElementById("pago").value;

    const numero = parseInt(cantidad.value);
    const importe = (precio * numero).toFixed(2);

    document.getElementById("mensaje").textContent =
        "¡Gracias, " + nombre +
        "! Tu pedido de " + numero +
        " kit(s) de " + semilla.value +
        " se ha registrado. Total: $" + importe +
        " MXN. Método de pago: " + pago + ".";

    formulario.reset();
    semilla.value = "";
    cantidad.value = 1;

    actualizarCompra();
});

actualizarCompra();
