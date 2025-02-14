// Fördefinierad array av namn
const people = ["Anna", "Johan", "Lisa", "Erik"];

// Hämta HTML-element
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultDisplay = document.getElementById("resultDisplay");

// Lägg till en klickhändelse på "Sök"-knappen
searchBtn.addEventListener("click", function() {
  const searchValue = searchInput.value;
  let found = false;

  // Loopar igenom varje namn i people-arrayen
  for (let name of people) {
    if (name === searchValue) {
      found = true;
      resultDisplay.textContent = "Namn hittades: " + name;
      break; // Avbryt loopen när vi hittat en match
    }
  }

  // Om vi inte hittade namnet i loopen
  if (!found) {
    resultDisplay.textContent = "Namn hittades inte.";
  }
});
