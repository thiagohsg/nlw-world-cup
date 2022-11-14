function createGame(player1, time, player2) {
    return `
    <li>
        <img src="./assets/flags/icon-${player1}.svg" alt="${player1} flag">
        <strong>${time}</strong>
        <img src="./assets/flags/icon-${player2}.svg" alt="${player2} flag">
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
    </div>

    `
}

document.querySelector("#cards").innerHTML =   
    createCard("20/11", "Domingo", 
        createGame("Qatar", "13:00", "Ecuador")
    ) +
    createCard("21/11", "Segunda", 
        createGame("England", "10:00", "Iran") +
        createGame("Senegal", "13:00", "Netherlands") +
        createGame("United States", "16:00", "Wales")
    ) +
    createCard("22/11", "Terça",
        createGame("Argentina", "7:00", "Saudi Arabia") +
        createGame("Denmark", "10:00", "Tunisia") +
        createGame("Mexico", "13:00", "Poland") +
        createGame("France", "16:00", "Australia")
    ) +
    createCard("23/11", "Quarta",
        createGame("Morocco", "7:00", "Croatia") +
        createGame("Germany", "10:00", "Japan") +
        createGame("Spain", "13:00", "Costa Rica") +
        createGame("Belgium", "16:00", "Canada")
    )
    