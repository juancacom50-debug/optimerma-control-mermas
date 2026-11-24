// Variable global para guardar los lotes
let listaLotes = [];

// Cuando carga la página, leemos el archivo JSON
window.onload = function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            listaLotes = data.lotes;
            mostrarTabla();
        });

    // Escuchamos cuando se envíe el formulario
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarLote();
    });
};

// Función para mostrar los datos en la tabla HTML
function mostrarTabla() {
    const tbody = document.querySelector('#tabla tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaLotes.length; i++) {
        let lote = listaLotes[i];
        
        let claseEstado = lote.estado === "Alerta" ? "alerta" : "normal";

        let fila = `<tr>
            <td>${lote.linea}</td>
            <td>${lote.material}</td>
            <td>${lote.producido} kg</td>
            <td>${lote.merma} kg</td>
            <td>${lote.porcentaje}%</td>
            <td><span class="${claseEstado}">${lote.estado}</span></td>
        </tr>`;

        tbody.innerHTML += fila;
    }
}

// Función para registrar un nuevo lote desde el formulario
function agregarLote() {
    let linea = document.getElementById('linea').value;
    let material = document.getElementById('material').value;
    let producido = parseFloat(document.getElementById('producido').value);
    let merma = parseFloat(document.getElementById('merma').value);

    // Regla de negocio: Calcular el porcentaje de merma
    let porcentaje = (merma / producido) * 100;

    // Regla de negocio: Si el porcentaje pasa de 5%, es Alerta, si no, Normal
    let estado = porcentaje > 5 ? "Alerta" : "Normal";

    // Creamos el nuevo objeto
    let nuevoLote = {
        linea: linea,
        material: material,
        producido: producido,
        merma: merma,
        porcentaje: porcentaje.toFixed(1),
        estado: estado
    };

    // Lo agregamos a la lista y actualizamos la tabla
    listaLotes.push(nuevoLote);
    mostrarTabla();

    // Limpiamos el formulario
    document.getElementById('formulario').reset();
    alert("¡Lote registrado con éxito!");
}