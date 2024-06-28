/* ================= SEARCH BAR AND DATA ======================= */

const itemTemplate = document.querySelector('[data-item-template]')
const itemCardContainer = document.querySelector('[data-item-cards-container]')
const searchInput = document.querySelector('[data-search]')

let items = []

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase()
  items.forEach((item) => {
    const isVisible = item.name.toLowerCase().includes(value)

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
      const image = card.querySelector('[item-image]')
      const button = card.querySelector('[item-button]')
      const name = card.querySelector('[item-name]')
      const price = card.querySelector('[item-price]')

      image.src = item.image
      name.textContent = item.name
      price.textContent += `₦${item.price}`
      button.textContent = item.button
      itemCardContainer.append(card)

      return {
        image: item.image,
        name: item.name,
        button: item.button,
        price: item.price,
        element: card,
      }
    })
  })
  .catch((error) => console.log(error))

/* ================= ADD TO CART ======================= */
