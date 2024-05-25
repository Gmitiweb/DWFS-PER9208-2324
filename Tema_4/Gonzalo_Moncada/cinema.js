// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

document.getElementById('num_asientos').addEventListener('change', function (event) {
    event.preventDefault();
    suggest(parseInt(this.value))
});

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    for (let i = 0; i < N; i++) {
        const row = document.createElement("tr");
        const cell = document.createElement("th");
        const cellText = document.createTextNode(`Fila ${i + 1}`);
        cell.appendChild(cellText);
        row.appendChild(cell);

        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: `butaca_${i}${j}`,
                estado: false // Estado inicial libre
            });
            const cell = document.createElement("td");
            cell.id = `butaca_${i}${j}`
            row.appendChild(cell);
        }
        butacas.push(fila);
        tbodyRef.appendChild(row);
    }
    return butacas;
}

function suggest(numeroAsientos) {

    if (numeroAsientos > N) {
        return [];
    }

    const rows = Array.from(document.querySelectorAll('td.td_active'));
    rows.forEach(row => {
      row.classList.remove('td_active');
    });

    let libresFila = [];
    let bucleActivo = true;
    for (let x = N - 1; x >= 0 && bucleActivo; x--) {
        libresFila = [];
        for (let y = N - 1; y >= 0 && bucleActivo; y--) {
            if (butacas[x][y].estado === false) {
                libresFila.push(butacas[x][y].id);
                if (libresFila.length === numeroAsientos) {
                    bucleActivo = false;
                }
            } else {
                libresFila = [];
            }
        }
    }

    for (let item of libresFila) {
        let butaca = document.getElementById(item);
        butaca.classList.add('td_active');
    }
    console.log('Asientos Sugeridos', libresFila.toString());
    return libresFila;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log('Butacas Inicializadas', butacas);

let test1 = document.getElementById("butaca_99");
test1.className += " active";
butacas[9][9].estado = true;


