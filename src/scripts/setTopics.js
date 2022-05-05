import { topicCheckboxes } from "./checkBoxes";

export const getSelectedTopics = () => {
    const checkboxes = document.getElementsByName("topicCheckbox")
    let checkedArray = []

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
        checkedArray.push(parseInt(checkbox.value))
        }
    }
    if (checkedArray.length > 0) {
        return checkedArray
    }
}