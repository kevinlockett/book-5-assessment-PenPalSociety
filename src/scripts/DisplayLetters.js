import { getDisplayLetters } from "./dataAccess.js"

export const DisplayLetters = () => {

    const letters = getDisplayLetters()

    const createDisplayLetters = (letter) => {

        return `
            <div class='ltr letter--recipient'>
                Dear ${letter.letterRecipient} <span class='letter--email'>(${letter.letterRecipientEmail})</span>
            </div>
            <div class='ltr letter--content'>
               ${letter.content}
            </div>
            <div class='ltr letter--author'>
                Sincerely,</br>
                ${letter.letterAuthor} <span class='letter--email'>(${letter.letterAuthorEmail})</span>
            </div>
            <div class='ltr letter--date'>
                Sent on ${letter.date}
            </div>
            <div class='ltr letter--topic'>
                ${letter.letterTopic}
            </div>
        `
    }

    let LetterHTML = `
        <h2>Letters</h2>
        <div class="letter">
            ${
                letters.map(createDisplayLetters).join("")
            }
        </div>
    `

    return LetterHTML
}