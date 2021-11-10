import { Header } from "./Header.js"
import { WriteLetter } from "./WriteLetter.js"
import { DisplayLetters } from "./DisplayLetters.js"
import { Footer } from "./Footer.js"

export const PenPalSociety = () => {

    return `
        <header class='header'>
           ${Header()}
        </header>
        <main class='main-content'>
            <section class="write-letter">
                ${WriteLetter()}            
            </section>
            <section class="display-letters">
                ${DisplayLetters()}
            </section>
        </main>
        <footer class='footer'>
            ${Footer()}
        </footer>
    `
}