/* ================= SEARCH BAR AND DATA ======================= */

const itemTemplate = document.querySelector('[data-item-template]')
const itemCardContainer = document.querySelector('[data-item-cards-container]')
const searchInput = document.querySelector('[data-search]')

let items = []

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase()
  items.forEach((item) => {
    const isVisible =
      item.name.toLowerCase().includes(value) ||
      item.complexion.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value)

    item.element.classList.toggle('hide', !isVisible)
  })
})

fetch('assets/json/items.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    items = data.map((item) => {
      const card = itemTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector('[item-header]')
      const body = card.querySelector('[item-body]')
      const age = card.querySelector('[item-age]')
      const complexion = card.querySelector('[complexion]')
      const height = card.querySelector('[height]')

      header.textContent = item.name
      body.textContent = item.email
      age.textContent = item.age
      complexion.textContent = item.features.complexion
      height.textContent = item.features.height

      itemCardContainer.append(card)

      return {
        name: item.name,
        email: item.email,
        age: item.age,
        complexion: item.features.complexion,
        element: card,
      }
    })
  })
  .catch((error) => console.log(error))

/*const itemTemplate = document.querySelector('[data-item-template]')
const itemCardContainer = document.querySelector('[data-item-cards-container]')
const searchInput = document.querySelector('[data-search]')

let items = []

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase()
  items.forEach((item) => {
    const isVisible =
      item.name.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value)
    item.element.classList.toggle('hide', !isVisible)
  })
})

fetch('assets/json/items.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    items = data.map((item) => {
      const card = itemTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector('[item-header]')
      const body = card.querySelector('[item-body]')
      const age = card.querySelector('[item-age]')

      header.textContent = item.name
      body.textContent = item.email
      age.textContent = item.age

      itemCardContainer.append(card)

      return { name: item.name, email: item.email, element: card }
    })
  })
  .catch((error) => console.log(error))*/