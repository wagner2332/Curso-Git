function addCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h2');
    cardTitle.innerText = title;
    card.appendChild(cardTitle);

    const cardContent = document.createElement('p');
    cardContent.innerText = content;
    card.appendChild(cardContent);

    document.body.appendChild(card);
}

export { addCard };