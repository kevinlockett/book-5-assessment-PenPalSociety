import { getTopics, getLetterWriter } from "./dataAccess.js"

export const topicCheckboxes = () => {

    const topics = getTopics()
    const preselector = getLetterWriter().topicId

    let topicHTML = `
    <div class="field field--Topics">
        <label class="label" for="topics">Topics</label>
            <div class="checkboxes">
    `

    const topicList = topics.map(topic => {

        if (topic.id === preselector) {

            return `
                <div class='checkbox'>
                    <input type='checkbox' class='topicCheckbox id='${topic.genre}' name='topic' value='${topic.id}' checked='checked' /> ${topic.genre}
                </div>`

        } else {

            return `
                <div class='checkbox'>
                    <input type='checkbox' class='topicCheckbox id='${topic.genre}' name='topic' value='${topic.id}' /> ${topic.genre}
                </div>`

        }

    })

    topicHTML += topicList.join('')
    topicHTML += `
            </div>
        </div> 
    `

    return topicHTML
}