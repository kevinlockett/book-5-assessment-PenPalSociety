import { getMembers, setRecipient, getLetterWriter } from './dataAccess.js'

// Make event listener and selector for recipients

document.addEventListener("change", event => {
    if (event.target.id === "recipients") {
        setRecipient(parseInt(event.target.value))
    }
}
)

export const selectRecipient = () => {

const members = getMembers()

const preselector = getLetterWriter().recipientId

let recipientHTML = `
    
    <div class="field field--recipients">
        <label class="label" for="recipient">Recipient</label>
        <select class="recipients" id="recipients">
        <option class="btn selector--title" value="">Choose Recipients</option>    
`
const recipientList = members.map((member) => {

    if (member.id === preselector) {

        return `<option value="${member.id}" selected="selected" >
            ${member.nameFirst} ${member.nameLast}
        </option>`
        
    } else {

        return `<option value="${member.id}" >
            ${member.nameFirst} ${member.nameLast}
        </option>`

    }
})

recipientHTML += recipientList.join('')
recipientHTML += `
        </select>
    </div>
`
return recipientHTML
}
