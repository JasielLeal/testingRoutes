

const list = {
    home: document.querySelector('#home'),
    ouniverso: document.querySelector('#ouniverso'),
    exploracao: document.querySelector('#exploracao'),
    btnExplore: document.querySelector('#btnExplore'),
}

console.log(list.btnExplore)
list.home.addEventListener('click', homeFunction)
list.ouniverso.addEventListener('click', ouniversoFunction)
list.exploracao.addEventListener('click', exploracaoFunction)

function homeFunction(){
    list.home.classList.add('active')
    list.ouniverso.classList.remove('active')
    list.exploracao.classList.remove('active')
}

function ouniversoFunction(){
    list.home.classList.remove('active')
    list.ouniverso.classList.add('active')
    list.exploracao.classList.remove('active')
}

function exploracaoFunction(){
    list.home.classList.remove('active')
    list.ouniverso.classList.remove('active')
    list.exploracao.classList.add('active')
}


const routes = {
     "/": "./routes/home.html",
     "/ouniverso": "./routes/ouniverso.html",
    "/exploracao": "routes/exploracao.html",
     404: "routes/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle();
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]

    fetch(route).then(data => data.text()).then(html => { document.querySelector('#app').innerHTML = html })
}

handle()

window.route = () => route()