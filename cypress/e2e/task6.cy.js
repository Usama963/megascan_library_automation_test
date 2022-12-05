/// <reference types="cypress" />

describe("Task 6", () => {
  it("Navigate to megascan library", () => {
    cy.visit("https://quixel.com/megascans/home");

    //click "i agree to the CLA
    cy.contains("ACCEPT", { timeout: 10000 }).click({ force: true });

    //get Decals Assets
    cy.get(
      '[href="/megascans/home?category=decal"] > .clickableBox___1HFCs > .boxWithAspectRatioContainer___2hILe > .boxWithAspectRatioInner___2gUvu > .bgWithContent___3iuey > .content___UN5F9 > .contentLayoutContainer___tuTHX > .contentLayoutFooter___2DXkx > :nth-child(1) > .content___3DKsi > h1'
    ).click({ force: true });

    //Get Street Assets
    cy.get(
      '[href="/megascans/home?category=decal&category=street"] > .clickableBox___1HFCs > .boxWithAspectRatioContainer___2hILe > .boxWithAspectRatioInner___2gUvu > .bgWithContent___3iuey > .content___UN5F9 > .contentLayoutContainer___tuTHX > .contentLayoutFooter___2DXkx > :nth-child(1) > .content___3DKsi > h1'
    ).click({ force: true });

    //Searching asset
    cy.get(".searchInputField___3Z8kw > input")
      .click({ force: true })
      .type("round drain cover");

    //Getting Round Drain Cover with assetID sdus0qk
    cy.contains("Round Drain Cover", { timeout: 5000 }).click({ force: true });
    cy.get(
      '[style="width: 280.667px; height: 280.667px; transform: translate(577.333px, 288.667px);"] > a > .clickableBox___1HFCs > .css-1k8lzl2 > .showOnHover',
      { timeout: 5000 }
    ).click({ force: true });
    cy.get('[class="css-81zi79"][type="button"]', { timeout: 5000 }).click({
      force: true,
    });

    //Closing side modal
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
