const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

const applicationState = {
    members: [],
    topics: [],
    letters: [],
    letterWriter: []
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