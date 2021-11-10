import { getMembers, setAuthor, getLetterWriter } from "./dataAccess.js"

// Make event listener and selector for authors

document.addEventListener("change", event => {
        if (event.target.id === "authors") {
            setAuthor(parseInt(event.target.value))
        }
    }
)

export const selectAuthor = () => {

    const members = getMembers()

    const preselector = getLetterWriter().authorId

    let authorHTML = `
        
        <div class="field field--authors">
            <label class="label" for="author">Author</label>
            <select class="authors" id="authors">
            <option class="btn selector--title" value="">Choose author</option>    
    `
    const authorList = members.map((member) => {

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

    authorHTML += authorList.join('')
    authorHTML += `
            </select>
        </div>
    `
    return authorHTML
}