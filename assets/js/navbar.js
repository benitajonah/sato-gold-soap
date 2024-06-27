/* ===================== MOBILE MENU ==================*/
const navToggle = document.querySelector('#navbar-toggle')
const navMenu = document.querySelector('#navbar-menu')

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('show-menu')
  navMenu.classList.toggle('show-menu')
})

document.querySelectorAll('#navbar-links').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('show-menu')
    navMenu.classList.remove('show-menu')
  })
})

/* ===================== ACTIVE LINK ==================*/
const activeLink = document.querySelectorAll('.link')

activeLink.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active')
    link.classList.add('active')
  })
})

/* ===================== NAVBAR ON SCROLL ==================*/
// const navbarEl = document.querySelector('#navbar')
// const mainEl = document.querySelector('#main')

// window.addEventListener('scroll', () => {
//   if (window.scrollY > mainEl.offsetTop - navbarEl.offsetHeight - 50) {
//     navbarEl.classList.add('active')
//   } else {
//     navbarEl.classList.remove('active')
//   }
// })

/* =============== LIGHT/DARK THEME ================ */
const icon = document.querySelector('#containerChange')

icon.addEventListener('click', () => {
  document.getElementById('changeMode').classList.add('animation')
  document.getElementById('changeMode').classList.toggle('nightMode')
  document.getElementById('containerChange').classList.toggle('containerNight')
  document.body.classList.toggle('dark-theme')
})

/* =============== SEARCH BAR ================ */
const searchContainer = document.querySelector('#search-container')
const searchBar = document.querySelector('#search-bar')
const searchButton = document.querySelector('#search-button')
const navbarLeft = document.querySelector('#navbar-left')
const navbarRight = document.querySelector('#navbar-right')
const navbarMiddle = document.querySelector('#navbar-middle')
const navbar = document.querySelector('#navbar')

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('show-search')
  searchContainer.classList.toggle('show-search')
  navbarLeft.classList.toggle('show-search')
  navbarRight.classList.toggle('show-search')
  navbarMiddle.classList.toggle('show-search')
  navbar.classList.toggle('show-search')
})
