let tablaTbody = document.getElementById("lista-empleados");
let empleados = [
    {
        "id":1,
        "name": "Joel",
        "surname": "Suarez",
        "telefono": "648-898-745",
        "especialidad": "Css",
        "departamentos": "Desenvolupamiento"
    },
    {
        "id":2,
        "name": "Jesus",
        "surname": "Ramirez",
        "telefono": "623-128-809",
        "especialidad": "Java",
        "departamentos": "Desenvolupamiento"
    },
    {
        "id":3,
        "name": "Jose",
        "surname": "Gorreta",
        "telefono": "722-208-155",
        "especialidad": "Seguridad Informática",
        "departamentos": "Sistemas"
    }, 
    {
        "id":4,
        "name": "Marcos",
        "surname": "Alvarado",
        "telefono": "667-377-626",
        "especialidad": "Sistemas operativos",
        "departamentos": "Sistemas"
    }
];

for (let empleado of empleados){
    let fila = ` <tr>
                    <th>${empleado.id}</th>
                    <td>${empleado.name} ${empleado.surname}</td>
                    <td>${empleado.telefono}</td>
                    <td>${empleado.especialidad.toString()}</td>
                    <td>${empleado.departamentos}</td>    
    `
    tablaTbody.innerHTML += fila;
}

