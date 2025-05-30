const characterBtn = document.getElementById('load-character');
const planetBtn = document.getElementById('load-planet');
const displayArea = document.getElementById('display-area');

characterBtn.addEventListener('click', fetchCharacter);
planetBtn.addEventListener('click', fetchPlanet);


async function fetchCharacter() {
    
  try {
    displayArea.classList.remove('hidden');
    const id = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(`https://swapi.tech/api/people/${id}`);
    const data = await response.json();
    const char = data.result.properties;

    displayArea.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Birth Year:</strong> ${char.birth_year}</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
    `;
  } catch (err) {
    displayArea.classList.remove('hidden');
    displayArea.innerHTML = `<p>Error loading character. Please try again.</p>`;
    console.error(err);
  }
}


async function fetchPlanet() {
    
  try {
    displayArea.classList.remove('hidden');
    const id = Math.floor(Math.random() * 60) + 1;
    const response = await fetch(`https://swapi.tech/api/planets/${id}`);
    const data = await response.json();
    const planet = data.result.properties;

    displayArea.innerHTML = `
      <h2>${planet.name}</h2>
      <p><strong>Climate:</strong> ${planet.climate}</p>
      <p><strong>Population:</strong> ${planet.population}</p>
    `;
  } catch (err) {
    displayArea.classList.remove('hidden');
    displayArea.innerHTML = `<p>Error loading planet. Please try again.</p>`;
    console.error(err);
  }
}
