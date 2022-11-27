// Feature Section
const tabBtns = document.querySelectorAll('.tab-btn')
const tabComps = document.querySelectorAll('.tab-company')
const tabImgs = document.querySelectorAll('.tab-image')

const changeTab = (name) => {
  // for active tabBtns
  tabBtns.forEach((tapBtn) => {
    tapBtn.classList.remove('active')
  })
  tabBtns.forEach((tabBtn) => {
    if (tabBtn.classList.contains(name)) {
      tabBtn.classList.add('active')
    }
  })

  // for change tab company logo
  tabComps.forEach((tabComp) => {
    tabComp.classList.remove('active')
  })
  tabComps.forEach((tabComp) => {
    if (tabComp.classList.contains(name)) {
      tabComp.classList.add('active')
    }
  })
  // for change tab image
  tabImgs.forEach((tabImg) => {
    tabImg.classList.remove('active')
  })
  tabImgs.forEach((tabImg) => {
    if (tabImg.classList.contains(name)) {
      tabImg.classList.add('active')
    }
  })
}

// Template Section
const templateData = [
  { id: 0, name: 'Company home', img: './image/Company Home.jpg' },
  { id: 1, name: 'Roadmap', img: './image/Roadmap.png' },
  { id: 2, name: 'Meeting notes', img: './image/meeting-notes.png' },
  { id: 3, name: 'Design system', img: './image/Design system.png' },
  { id: 4, name: 'Docs', img: './image/Docs.jpg' },
  { id: 5, name: 'Content Calendar', img: './image/Content Calendar.jpg' },
]

const tempImgs = document.querySelectorAll('.template-img')
const tempCapts = document.querySelectorAll('.template-caption')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentImg = 0
let currentCapt = 0

// show initial item when loading
window.addEventListener('DOMContentLoaded', function () {
  tempImgs.forEach((tempImg) => {
    tempImg.src = templateData[currentImg].img
    currentImg++
  })
  tempCapts.forEach((tempCapt) => {
    tempCapt.textContent = templateData[currentCapt].name
    currentCapt++
  })
})

nextBtn.addEventListener('click', () => {
  tempImgs.forEach((tempImg) => {
    if (currentImg > templateData.length - 1) {
      currentImg = 0
    } else if (currentImg < 0) {
      currentImg = templateData.length - 1
    }
    tempImg.src = templateData[currentImg].img
    currentImg++
  })
  tempCapts.forEach((tempCapt) => {
    if (currentCapt > templateData.length - 1) {
      currentCapt = 0
    } else if (currentCapt < 0) {
      currentCapt = templateData.length - 1
    }
    tempCapt.textContent = templateData[currentCapt].name
    currentCapt++
  })
})

prevBtn.addEventListener('click', () => {
  tempImgs.forEach((tempImg) => {
    if (currentImg > templateData.length - 1) {
      currentImg = 0
    } else if (currentImg < 0) {
      currentImg = templateData.length - 1
    }
    tempImg.src = templateData[currentImg].img
    currentImg--
  })
  tempCapts.forEach((tempCapt) => {
    if (currentCapt > templateData.length - 1) {
      currentCapt = 0
    } else if (currentCapt < 0) {
      currentCapt = templateData.length - 1
    }
    tempCapt.textContent = templateData[currentCapt].name
    currentCapt--
  })
  console.log(currentImg)
})
