export default (function() {

    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('header')
    header.innerText = 'Hello there'

    const mainTitle = document.createElement('div')
    mainTitle.classList.add('title')
    const mainTitleText =  document.createElement('h2')
    mainTitleText.innerText = 'Hello there'
    
    const addTodoButton = document.createElement('button')
    addTodoButton.id = 'add-todo-button'
    addTodoButton.setAttribute('type', 'button')
    addTodoButton.innerText = 'Click me!'
        
    const main = document.createElement('main')
    mainTitle.append(mainTitleText, addTodoButton)
    main.appendChild(mainTitle)

    const aside = document.createElement('aside')
    aside.innerText = 'Hello there'
    aside.innerHTML += `<button id='add-project-button'>Click me!</button>`

    const footer = document.createElement('footer')
    footer.innerText = 'Hello there'

    container.append(header, aside, main, footer)
    document.body.appendChild(container)

})();