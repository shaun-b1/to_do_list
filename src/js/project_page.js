export default (function() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.id = 'project-modal'

    const form = document.createElement('form')

    const title = document.createElement('input')
    title.setAttribute("type", "text")
    title.setAttribute("name", "Title")
    title.setAttribute("placeholder", "New Project Title")

    const colour = document.createElement('select')
    colour.setAttribute("name", "colour")
    colour.setAttribute("placeholder", "Select A Colour")

    const submit = document.createElement('button')
    submit.setAttribute("type", "submit")
    
})