const menu = [
  {
    id: 1,
    title: 'Panqueca Buttermilk',
    category: 'café da manhã',
    price: 15.99,
    img: 'https://i.ibb.co/5YgvFPC/item-1.jpg',
    desc: `Deliciosa panqueca preparada com farinha de trigo, ovos, leite ou leitelho, manteiga, açúcar, sal e fermento químico.  `
  },
  {
    id: 2,
    title: 'lanche duplo',
    category: 'almoço',
    price: 13.99,
    img: 'https://i.ibb.co/xLW1yc4/item-2.jpg',
    desc: `Duas vezes mais sabor na dupla de hambúrgueres acompanhada de deliciosas batatas fritas, queijo, cebola bem picadinha, picles, mostarda e ketchup. `
  },
  {
    id: 3,
    title: 'milkshake godzilla',
    category: 'bebidas',
    price: 6.99,
    img: 'https://i.ibb.co/BcS63rt/item-3.jpg',
    desc: `O maravilhoso Milkshake com irresistível crocante de Ovomaltine, coberto por uma deliciosa calda de chocolate e dois deliciosos tubetes. Para nenhum fã de Ovomaltine colocar defeito.`
  },
  {
    id: 4,
    title: 'country delight',
    category: 'café da manhã',
    price: 20.99,
    img: 'https://i.ibb.co/k3MLyMN/item-4.jpg',
    desc: `Delicioso café da manhã americano, contendo ovos e bacon e chocolate quente, completo e nutritivo `
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'almoço',
    price: 22.99,
    img: 'https://i.ibb.co/JQvFZZY/item-5.jpg',
    desc: `Dois hambúrgueres, uma explosão de sabor. Dois deliciosos hambúrgueres de carne 100% bovina, ovos, queijo cheddar derretido, picles, cebola picada, ketchup, mostarda e pão com gergelim.`
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'bebidas',
    price: 18.99,
    img: 'https://i.ibb.co/sjYtY8r/item-6.jpg',
    desc: `A medida certa entre cobertura sabor chocolate e massa gelada de baunilha que pode fazer você viver uma experiência explosiva, além de amendoins crocantes. Desfrute dessa combinação perfeita!`
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'café da manhã',
    price: 8.99,
    img: 'https://i.ibb.co/mJytnds/item-7.jpg',
    desc: `Um Hambúrguer (100% carne bovina), bacon em fatias, bacon crispy, queijo sabor emental, tomate, alface americana, cebola, molho Tasty e pão com gergelim. `
  },
  {
    id: 8,
    title: 'american classic',
    category: 'almoço',
    price: 12.99,
    img: 'https://i.ibb.co/18Qynyv/item-8.jpg',
    desc: `Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese, cebola, picles e pão com gergelim. `
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'bebidas',
    price: 16.99,
    img: 'https://i.ibb.co/HzkGy99/item-9.jpg',
    desc: `Massa gelada de baunilha com uma supercamada de cobertura de morango e ainda por cima com farofa de paçoca. O canudo completa a tentação. A medida certa para compartilhar com aquele amor.`
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'janta',
    price: 39.99,
    img: 'https://i.ibb.co/gDdtTCR/item-10.jpg',
    desc: `Bife com purê de Batatas, pão de alho Assado, cogumelos Bordelaise e macarrão com queijo e bacon`
  }
]

//parent: section-center
const sectionCenter = document.querySelector('.section-center')

const container = document.querySelector('.btn-container')

//load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu)
  displayMenuButtons()
})

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item)
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt="${item.title}" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">R$ ${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['tudo']
  )
  //console.log(categories)
  const categoryButtons = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}"> ${category}</button>`
    })
    .join('')
  container.innerHTML = categoryButtons
  const filterButtons = document.querySelectorAll('.filter-btn')
  //filter buttons

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      //console.log(e.currentTarget.dataset.id)
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category)
        if (menuItem.category == category) {
          return menuItem
        }
      })
      //console.log(menuCategory)
      if (category === 'tudo') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory)
      }
    })
  })
}
