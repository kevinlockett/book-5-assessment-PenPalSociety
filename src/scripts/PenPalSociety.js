import { Header } from "./Header.js"
import { WriteLetter } from "./WriteLetter.js"
import { Footer } from "./Footer.js"

export const PenPalSociety = () => {

    return `
        <header class='header'>
           ${Header()}
        </header>
        <main class='main-content'>
            ${WriteLetter()}
        </main>
        <footer class='footer'>
            ${Footer()}
        </footer>
    `
}