const motivos = [
{
    id: 0,
    name: "Información general",
    submotivo: [{
            id: 0,
            name: "Información sobre tallas",
        },
        {
            id: 2,
            name: "Características del producto",
        },
        {
            id: 3,
            name: "Información del producto",
        },
        {
            id: 4,
            name: "Disponibilidad en tienda",
        },
        {
            id: 5,
            name: "Ubicación de tienda",
        },
        {
            id: 6,
            name: "Medios de pago",
        },
        {
            id: 7,
            name: "Descuentos y campañas",
        },
        {
            id: 7,
            name: "Tiempos de entrega",
        },
        {
            id: 8,
            name: "Ventas al por mayor",
        },
        {
            id: 9,
            name: "Cómo realizar una compra",
        },
        {
            id: 10,
            name: "Proveedores",
        },
        {
            id: 11,
            name: "Patrocinio",
        },
        {
            id: 12,
            name: "Droopshiping",
        },
        {
            id: 13,
            name: "Sin mensaje de confirmación",
        },
        {
            id: 14,
            name: "Cuando llega mi pedido",
        },
        {
            id: 15,
            name: "Quiero saber el número de guía",
        },
    ]
},
{
    id: 1,
    name: "Soporte",
    submotivo: [{
            id: 0,
            name: "Cambio de talla pre-compra",
        },
        {
            id: 1,
            name: "Cambio de dirección",
        },
        {
            id: 2,
            name: "Cliente cancela pedido",
        },
        {
            id: 3,
            name: "Referencia de pago",
        },
        {
            id: 4,
            name: "Retracto compra duplicada",
        },
        {
            id: 5,
            name: "Problemas con la pagina",
        },
    ]
},
{
    id: 2,
    name: "PQR",
    submotivo: [{
            id: 0,
            name: "Pedido no llega (transportadora)",
        },
        {
            id: 1,
            name: "Retraso en la entrega",
        },
        {
            id: 2,
            name: "Pago no procesado (Me debitaron, pero no hay compra)",
        },
        {
            id: 3,
            name: "Retracto (inconformidad)",
        },
        {
            id: 4,
            name: "Quejas por atención en tienda",
        },
        {
            id: 5,
            name: "Cambio de talla posventa guía de talla",
        },
        {
            id: 6,
            name: "Garantías",
        },
        {
            id: 7,
            name: "Tiempo de atención",
        },
        {
            id: 8,
            name: "Pedido incompleto o en mal estado",
        },
        {
            id: 9,
            name: "Horarios para cambios en tienda",
        },
        {
            id:10,
            name: "Cambio por talla-saldo a favor web",
        }
    ]
},
{
    id: 3,
    name: "Tienda",
    submotivo: [{
            id: 0,
            name: "Cambio de tallas",
        },
        {
            id: 1,
            name: "Anticipo pos",
        },
        {
            id: 2,
            name: "Saldo a favor web",
        },
        {
            id: 3,
            name: "Retracto",
        },
        {
            id: 4,
            name: "Garantía",
        },
    ]
},
];

let selectMotivos = document.getElementById("motivo");
let selectSubmotivos = document.getElementById("submotivo");

const loadMotivos = () => {
motivos.map(item => {
    selectMotivos.innerHTML += `<option value="${item.name}">${item.name}</option>`;
})
}

loadMotivos();

const loadSubmotivos = (nameMotivo) => {
let options = `<option value="">--Elige un motivo--</option>`;

motivos.find(motivo => motivo.name === nameMotivo).submotivo.map(item => {
    options += `<option value="${item.name}">${item.name}</option>`;
})

selectSubmotivos.innerHTML = options;
}

selectMotivos.addEventListener("change", function(e) {
if (!e.target.value) {
    selectSubmotivos.innerHTML = `<option value="">--Elige un submotivo--</option>`;
} else {
    loadSubmotivos(e.target.value);
}
})


//bloque de la opcion cedula y orden del formulario con la opcion prospecto
document.getElementById('tipodecliente').addEventListener('change', function() {
    var selectedValue = this.value;
    var cedulaInput = document.getElementById('cedula');
    var ordenInput = document.getElementById('orden');
    
    if(selectedValue === 'Prospecto') {
        cedulaInput.disabled = true;
        ordenInput.disabled = true;
    } else {
        cedulaInput.disabled = false;
        ordenInput.disabled = false;
    }
});

//CODIGO MODAL
