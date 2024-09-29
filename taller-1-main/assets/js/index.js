fetch('data/taller.json')
.then(response => response.json())
.then(data => {
    document.getElementById('titulo_pagina').innerHTML = data.titulo_pagina;
    const datos = document.getElementById('datos');
    datos.innerHTML = `<p><strong>${data.datos_tienda.nombre}</strong></p>
                       <p>📍 ${data.datos_tienda.direccion}</p>
                       <p>📞 ${data.datos_tienda.telefono}</p>
                       <p>✉️ ${data.datos_tienda.correo}</p>`;

                       
    const computadoresHTML = data.computadores.map(laptop => `
        <div class="col-md-4">
            <div class="card h-100">
                <img src="${laptop.imagen}" class="card-img-top" alt="${laptop.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${laptop.nombre}</h5>
                    <p class="card-text">${laptop.descripcion}</p>
                    <p class="text-success"><strong>$${laptop.precio.toFixed(2)}</strong></p>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('computadores').innerHTML = computadoresHTML;
});
