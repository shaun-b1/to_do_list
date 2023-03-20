export default (function() {
    // let createProjectModal = function () {  
        const modal = document.createElement('section')
        modal.classList.add('modal')
        modal.id = 'project-modal'

        const form = document.createElement('form')

        const title = document.createElement('input')
        title.setAttribute("type", "text")
        title.setAttribute("name", "Title")
        title.setAttribute("placeholder", "New Project Title")
        const titleDiv = document.createElement('div')
        titleDiv.appendChild(title)     

        const colour = document.createElement('select')
        colour.setAttribute("name", "colour")
        colour.setAttribute("placeholder", "Select A Colour")
        const colourDiv = document.createElement('div')
        colourDiv.appendChild(colour)

        const submit = document.createElement('button')
        submit.setAttribute("type", "submit")
        submit.innerText = "Click me!"
        const submitDiv = document.createElement('div')
        submitDiv.appendChild(submit)

        form.append(titleDiv, colourDiv, submitDiv)
        modal.appendChild(form)
        document.body.appendChild(modal)
    // }

    // // let openProjectModal = function () {
    // //     const button = document.getElementById('add-project-button')
    // //     button.onclick() = {}
    // // }
    
})()