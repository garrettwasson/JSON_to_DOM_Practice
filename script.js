$(document).ready(function () {
  const people = [
    {
      first_name: "Garrett",
      last_name: "Wasson",
      birth_year: 1988,
      favorite_games: ["FF7", "DS3", "NieR"],
      favorite_animes: ["Akira", "Neon Genesis"],
      favorite_bands: ["BTBAM", "Veil of Maya"]
    },
    {
      first_name: "Barrett",
      last_name: "Basson",
      birth_year: 1996,
      favorite_games: ["Xenogears", "DS3", "Overwatch"],
      favorite_animes: ["DevilMan", "Neon Genesis"],
      favorite_bands: ["Counterparts", "Veil of Maya"]
    },
    {
      first_name: "Darrett",
      last_name: "Dasson",
      birth_year: 2018
    },
    {
      first_name: "Warrett",
      last_name: "Gasson",
      birth_year: 2017
    }
  ];

  function age(birth_year) {
    let calc_age = new Date().getFullYear() - birth_year;
    if (calc_age == 0) {
      return `Baby`
    } else if (calc_age == 1) {
      return `1 year old`
    } else {
      return `${calc_age} years old`
    }
  }

  function games(games) {
    return `
          <h2>Favorite Games:</h2>
          <ul class = "game_list">
              ${games.map(game => `<li>${game}</li>`).join("")}
          </ul>
      `
  }

  function animes(animes) {
    return `
          <h2>Favorite Animes:</h2>
          <ul class = "anime_list">
              ${animes.map(anime => `<li>${anime}</li>`).join("")}
          </ul>
      `
  }

  function bands(bands) {
    return `
          <h2>Favorite Bands:</h2>
          <ul class = "band_list">
              ${bands.map(band => `<li>${band}</li>`).join("")}
          </ul>
      `
  }

  function personTemplate(person) {
    return `
      <div class = "person">
          <h2>${person.first_name} ${person.last_name}</h2>
          <p>Age: ${age(person.birth_year)}</p>
          ${person.favorite_games ? games(person.favorite_games) : ""}
          ${person.favorite_animes ? animes(person.favorite_animes) : ""}
          ${person.favorite_bands ? bands(person.favorite_bands) : ""}
      </div>
      `
  }

  document.getElementById("info").innerHTML = `
      <h1>People: (${people.length}) results</h1>
      ${people.map(personTemplate).join(' ')}
      <p class = "footer">These ${people.length} people were added!</p>
  `
});