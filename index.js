// Button references and display area in the HTML
const characterBtn = document.getElementById('load-character');
const planetBtn = document.getElementById('load-planet');
const displayArea = document.getElementById('display-area');

// Even listeners to buttons that trigger the fetch
characterBtn.addEventListener('click', fetchCharacter);
planetBtn.addEventListener('click', fetchPlanet);

// Function to fetch and display a random Star Wars Character
async function fetchCharacter() {
    
  try {
    // Display area is visible
    displayArea.classList.remove('hidden');
    // Generate a random character ID between 1 and 83
    const id = Math.floor(Math.random() * 83) + 1;
    // Fetch character data from the Star Wars API
    const response = await fetch(`https://swapi.tech/api/people/${id}`);
    const data = await response.json();
    // Extract character properties
    const char = data.result.properties;
    // Display character info in the display area
    displayArea.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Birth Year:</strong> ${char.birth_year}</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
    `;
  } catch (err) {
    // Show error message if something goes wrong
    displayArea.classList.remove('hidden');
    displayArea.innerHTML = `<p>Error loading character. Please try again.</p>`;
    console.error(err);
  }
}

// Function to fetch and display a random Star Wars planet
async function fetchPlanet() {
    
  try {
    // Display area is visible
    displayArea.classList.remove('hidden');
    // Generate a random planet ID between 1 and 60
    const id = Math.floor(Math.random() * 60) + 1;
    // Fetch planet data from the Star Wars API
    const response = await fetch(`https://swapi.tech/api/planets/${id}`);
    const data = await response.json();
    // Extract planet properties
    const planet = data.result.properties;
    // Display planet info in the display area
    displayArea.innerHTML = `
      <h2>${planet.name}</h2>
      <p><strong>Climate:</strong> ${planet.climate}</p>
      <p><strong>Population:</strong> ${planet.population}</p>
    `;
  } catch (err) {
    // Show error message if something goes wrong
    displayArea.classList.remove('hidden');
    displayArea.innerHTML = `<p>Error loading planet. Please try again.</p>`;
    console.error(err);
  }
}