
export default (function() {

    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('header')
    header.innerText = 'Hello there'
    const main = document.createElement('main')
    main.innerText = 'Hello there'
    const nav = document.createElement('nav')
    nav.innerText = 'Hello there'
    const footer = document.createElement('footer')
    footer.innerText = 'Hello there'
    container.append(header, nav, main, footer)
    document.body.appendChild(container)

})();