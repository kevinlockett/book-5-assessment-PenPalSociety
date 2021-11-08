import { getMembers, getTopics } from "./dataAccess.js"

// Make radio buttons for topics

const makeTopicButtons = () => {

    const topics = getTopics()
    
    let topicHTML = `
        <div class="field field--Topics">
            <label class="label" for="topics">Topics</label>
                <div class="radio-buttons">
        `
    
        const topicList = topics.map(topic => {

            return `<div class='radio-button'><input type='radio' name='topic' value='${topic.id}' /> ${topic.genre}</div>`

        })

    topicHTML += topicList.join('')

    return topicHTML

}

// Export Letter HTML to PenPalSociety

export const WriteLetter = () => {

    const members = getMembers()

    let writeLetterHTML = ``

    // AUTHOR

    writeLetterHTML += `    

        <div class="field field--authors">
            <label class="label" for="author">Author</label>
            <select class="authors" id="authors">
            <option class="btn selector--title" value="">Choose author</option>
                ${members.map(member => {
                    return `<option value="authorId--${member.id}">${member.nameFirst} ${member.nameLast}
                    </option>`}).join("")
                }
            </select>
        </div>
    `

    // LETTER

    writeLetterHTML += `
    
        <div class="field field--letter">
            <label class="label" for="letter">Letter</label>
            <textarea rows="5" id="letter" name="letter">
            </textarea>
        </div>
    `

    // TOPICS

    writeLetterHTML += `
    
                ${makeTopicButtons()}
            </div>
        </div>    
    `
    // RECIPIENT

    writeLetterHTML += `
    
        <div class="field field--members">
            <label class="label" for="recipient">Recipient</label>
            <select class="recipients" id="recipients">
            <option class="btn selector--title" value="">Choose recipient</option>
                ${members.map(member => {
                    return `<option value="recipientId--${member.id}">${member.nameFirst} ${member.nameLast}
                    </option>`}).join("")
                }
            </select>
        </div>

    `

    // BUTTON

    writeLetterHTML += `
    
        <button class="btn button button--send shadow" id="sendLetter">Send Letter</button>

    `

    return writeLetterHTML

}