const form = document.getElementById('profile-form');
const cardsContainer = document.getElementById('cards-container');
const counterSpan = document.getElementById('card-counter');

function updateCounter() {
    // Contamos cuántos elementos hijos (tarjetas) tiene el contenedor
    const totalCards = cardsContainer.children.length;
    // Actualizamos el contador usando textContent (como lo pide la evidencia)
    counterSpan.textContent = totalCards;
}

// Escuchamos el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
    // Evitamos que la página se recargue al enviar el formulario
    event.preventDefault();

    // 1. Leer los valores de los inputs
    const nameValue = document.getElementById('input-name').value;
    const roleValue = document.getElementById('input-role').value;
    const deptValue = document.getElementById('input-dept').value;
    const photoValue = document.getElementById('input-photo').value;

    // 2. Crear los elementos de la tarjeta con createElement
    const card = document.createElement('div');
    card.className = 'card'; // Asignamos la clase CSS base

    const img = document.createElement('img');
    // Usamos setAttribute para la imagen como pide la evidencia
    img.setAttribute('src', photoValue); 
    img.setAttribute('alt', `Foto de ${nameValue}`);

    const nameTitle = document.createElement('h3');
    nameTitle.textContent = nameValue; // Usamos textContent (NO innerHTML)

    const rolePara = document.createElement('p');
    rolePara.textContent = `Cargo: ${roleValue}`;

    const deptPara = document.createElement('p');
    deptPara.textContent = `Departamento: ${deptValue}`;

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.textContent = 'Eliminar';

    // 3. Funcionalidad: Marcar como destacada (Toggle)
    card.addEventListener('click', function() {
        card.classList.toggle('destacada');
    });

    // 4. Funcionalidad: Eliminar la tarjeta
    btnDelete.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que al hacer clic en eliminar, se marque como "destacada"
        card.remove();           // Remueve la tarjeta del DOM
        updateCounter();         // Actualiza el contador restando
    });

    // 5. Ensamblar la tarjeta (appendChild)
    // El orden en el que hacemos appendChild determina cómo se verán en pantalla
    card.appendChild(img);
    card.appendChild(nameTitle);
    card.appendChild(rolePara);
    card.appendChild(deptPara);
    card.appendChild(btnDelete);

    // 6. Añadir la tarjeta completa al contenedor principal del DOM
    cardsContainer.appendChild(card);

    // 7. Actualizar el contador de tarjetas
    updateCounter();

    // 8. Limpiar el formulario para la siguiente tarjeta
    form.reset();
});