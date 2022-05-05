const API = "https://penpal-api-4uj6v.ondigitalocean.app"
const mainContainer = document.querySelector("#container")

const applicationState = {
    members: [],
    topics: [],
    letters: [],
    letterWriter: {}
}

// MEMBERS

export const fetchMembers = () => {
    return fetch(`${API}/members`)
        .then(res => res.json())
        .then((memberList) => {
            applicationState.members = memberList
        }
    )
}

export const getMembers = () => {
    const memberArr = applicationState.members.map(member => ({...member}))
    return memberArr.sort((a,b) => a.nameLast - b.nameLast)
}


// TOPICS

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(res => res.json())
        .then((topicList) => {
            applicationState.topics = topicList
        }
    )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}


// LETTERS

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(res => res.json())
        .then((letterList) => {
            applicationState.letters = letterList
        }
    )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetter = (letterWriterChoices) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(letterWriterChoices)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getDisplayLetters = () => {
     // create new variable lettersArr which will be a copy of the letters array
    // and map that array to find each individual letter object within the letters array

    const lettersArr = applicationState.letters.map(letter => {

         // create new copy of letters array on which each object will be modified to include a new property

         const modifiedCopyOfArray = {...letter}

        // create new variable that shows each "found author" where letter.authorId is equal to member.id

        const foundAuthor = applicationState.members.find((member) => member.id === letter.authorId )

        // create if statment to add new propety "letterAuthor" modified copy of array

        if (foundAuthor) {
            modifiedCopyOfArray.letterAuthor = `${foundAuthor.nameFirst} ${foundAuthor.nameLast}`
            modifiedCopyOfArray.letterAuthorEmail = foundAuthor.emailAddress
        }

        const foundRecipient = applicationState.members.find((member) => member.id === letter.recipientId )

        if (foundRecipient) {
            modifiedCopyOfArray.letterRecipient = `${foundRecipient.nameFirst} ${foundRecipient.nameLast}`
            modifiedCopyOfArray.letterRecipientEmail = foundRecipient.emailAddress
        }

        const foundTopic = applicationState.topics.find((topic) => topic.id === letter.topicId )

        if (foundTopic) {
            modifiedCopyOfArray.letterTopic = foundTopic.genre
        }

        return modifiedCopyOfArray

    })

    return lettersArr

}

// AUTHORS

export const setAuthor = (id) => {
    applicationState.letterWriter.authorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// TOPICS

export const setTopic = (id) => {
    applicationState.letterWriter.topicId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// RECIPIENTS

export const setRecipient = (id) => {
    applicationState.letterWriter.recipientId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// Letter Writer

export const getLetterWriter = () => {
    return applicationState.letterWriter
}

