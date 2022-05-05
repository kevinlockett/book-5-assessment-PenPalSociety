import { getTopics, setTopic, getLetterWriter } from "./dataAccess.js"

// Add event listener and radio buttons for topics

document.addEventListener("change",event => {
    if (event.target.name === "topic") {
        setTopic(parseInt(event.target.value))
    }
})

export const selectTopic = () => {

    const topics = getTopics()
    
    const preselector = getLetterWriter().topicId

    let topicHTML = `
    <div class="field field--Topics">
        <label class="label" for="topics">Topics</label>
            <div class="radio-buttons">
    `

    const topicList = topics.map(topic => {

        if (topic.id === preselector) {

        return `<div class='radio-button'><input type='radio' name='topic' value='${topic.id}' checked='checked' /> ${topic.genre}</div>`

        } else {

            return `<div class='radio-button'><input type='radio' name='topic' value='${topic.id}' /> ${topic.genre}</div>`

        }

    })

    topicHTML += topicList.join('')
    topicHTML += `
            </div>
        </div> 
    `

    return topicHTML

}
