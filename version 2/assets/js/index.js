fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById('titulo_pagina').innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `
            <p><strong>${data.datos_tienda.nombre}</strong></p>
            <p>📍 ${data.datos_tienda.direccion}</p>
            <p>📞 ${data.datos_tienda.telefono}</p>
            <p>✉️ ${data.datos_tienda.correo}</p>`;

        const computadoresHTML = data.computadores.map(laptop => `
            <tr>
                <td><img src="${laptop.imagen}" alt="${laptop.nombre}"></td>
                <td>${laptop.nombre}</td>
                <td>${laptop.descripcion}</td>
                <td class="text-success"><strong>$${laptop.precio.toFixed(2)}</strong></td>
            </tr>
        `).join('');

        document.getElementById('tabla_computadores').innerHTML = computadoresHTML;
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });

