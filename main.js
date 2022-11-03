function createGame(country1, hour, country2) {
  return `
    <li>
      <img
        src="./assets/flags/${country1}-flag.svg"
        alt="Bandeira ${country1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/flags/${country2}-flag.svg"
        alt="Bandeira ${country2}"
      />
    </li>
  `;
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="NLW Copa Calendario" />
  </header>

  <main class="cards">
    ${createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("brazil", "16:00", "serbia")
    )}
    ${createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "07:00", "serbia") +
        createGame("brazil", "13:00", "switzerland")
    )}
    ${createCard(
      "02/12",
      "sexta",
      createGame("cameroon", "16:00", "brazil") +
        createGame("serbia", "16:00", "switzerland")
    )}
  </main>
`;
