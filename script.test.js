/**
 * @jest-environment jsdom
 */

// In most Jest setups, you do *not* need to import { expect } from "@jest/globals";
// Jest provides a global `expect` automatically.

describe("Search functionality", () => {
  beforeEach(() => {
    // Sätt upp en "falsk" HTML-struktur
    document.body.innerHTML = `
      <input type="text" id="searchInput" />
      <button id="searchBtn">Sök</button>
      <div id="resultDisplay"></div>
    `;

    // Importera ditt script EFTER att elementen finns
    // så att de event listeners kan kopplas korrekt
    require("./src/script.js");
  });

  it("Name found", () => {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const resultDisplay = document.getElementById("resultDisplay");

    // Simulera att användaren skriver in "Anna"
    searchInput.value = "Anna";
    // Klick
    searchBtn.click();

    // Kontrollera resultatet
    expect(resultDisplay.textContent).toBe("Namn hittades: Anna");
  });
});
