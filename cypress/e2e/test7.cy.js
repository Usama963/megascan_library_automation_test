/// <reference types="cypress" />

describe("Task 7", () => {
  it("megascan library", () => {
    //visiting megascan library
    cy.visit("https://quixel.com/megascans/home/");

    //getting color gray
    cy.get(":nth-child(5) > .css-16nux0r > .button > .label-inner").click({
      force: true,
    });
    //gray color
    cy.get(":nth-child(5) > .single-option > .option-name").click({
      force: true,
    });

    //siEoZ
    cy.get("input").click({ force: true }).type("siEoZ").type("{enter}");
    // cy.type("{enter}");

    //huge icelandic lava cliff
    cy.get(
      ".boxWithAspectRatioInner___2gUvu > .css-1k8lzl2 > .showOnHover"
    ).click({ force: true });

    //closing side modal
    cy.get('[class="css-81zi79"][type="button"]', { timeout: 5000 }).click({
      force: true,
    });
    cy.get('[class="css-81zi79"][type="button"]', { timeout: 5000 }).click({
      force: true,
    });
    //sign in to download
    cy.get(".Button___1mkoh").click({ force: true });

    //Sign in with Epic Games
    cy.get("._3PNMHbJE22xaFXrB596K3i").click({ force: true });
    cy.get("#login-with-epic > .MuiTypography-root", { timeout: 5000 }).click({
      force: true,
    });

    //credentials for Epic Games
    cy.get("#email").click({ force: true }).type("osama.azhar963@gmail.com");
    cy.get("#password").click({ force: true }).type("Idwtlitwam123");
    cy.get(".sc-eCstlR > .sc-bdfBQB", { timeout: 2000 }).click({ force: true });
    cy.contains("Log in now").click({ force: true });
    cy.wait(5000);
  });
});
