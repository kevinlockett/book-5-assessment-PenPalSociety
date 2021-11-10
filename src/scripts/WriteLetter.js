import { getLetterWriter, sendLetter } from './dataAccess.js'
import { selectAuthor } from './selectAuthor.js'
import { selectTopic } from './selectTopic.js'
import { selectRecipient } from './selectRecipient.js'

// Make event listener for Send Letter button

const mainContainer = document.querySelector('#container')

mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "sendLetter") {
    
        const writerChoices = getLetterWriter()

        const letterContent = document.querySelector("textarea[name='letter']").value

        const dataToSendToAPI = {
            authorId: parseInt(writerChoices.authorId),
            content: letterContent,
            topicId: parseInt(writerChoices.topicId),
            recipientId: parseInt(writerChoices.recipientId),
            date: new Date().toLocaleDateString('en-US')
        }

        sendLetter(dataToSendToAPI)
    }
})

// Export Letter HTML to PenPalSociety

export const WriteLetter = () => {

    // CREATE HTML

    let writeLetterHTML = `
    
        <h2>Write a letter</h2>
        
    `

    // INSERT AUTHOR HTML

    writeLetterHTML += selectAuthor()

    // INSERT LETTER HTML

    writeLetterHTML += `
    
        <div class="field field--letter">
            <label class="label" for="letter">Letter</label>
            <textarea columns= "30" rows="5" id="letter" name="letter">
            </textarea>
        </div>
    `

    // INSERT TOPIC HTML

    writeLetterHTML += selectTopic()

    // INSERT RECIPIENT HTML

    writeLetterHTML += selectRecipient()

    // CREATE SEND LETTER BUTTON

    writeLetterHTML += `
        <button class="btn button button--send shadow" id="sendLetter">Send Letter</button>
    `

    // RETURN HTML

    return writeLetterHTML

}