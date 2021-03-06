import { fetchLetters, fetchMembers, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    fetchMembers()
        .then (() => fetchTopics())
        .then (() => fetchLetters())
        .then (() => {
            mainContainer.innerHTML = PenPalSociety()
        })
}

renderAllHTML()

mainContainer.addEventListener(
    "stateChanged", customEvent => {
        renderAllHTML()
})