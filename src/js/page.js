export default (function() {

    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('header')
    header.innerText = 'Hello there'
    const main = document.createElement('main')
    main.innerText = 'Hello there'
    main.innerHTML += `<button id='add_todo'>Click me!</button>`
    const aside = document.createElement('aside')
    aside.innerText = 'Hello there'
    aside.innerHTML += `<button id='add_project'>Click me!</button>`
    const footer = document.createElement('footer')
    footer.innerText = 'Hello there'
    container.append(header, aside, main, footer)
    document.body.appendChild(container)

})();