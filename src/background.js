export function background(){

const body = document.querySelector('body')
const cafeImgContainer = document.createElement('div')
const cafeImg = document.createElement('div')
cafeImgContainer.setAttribute('class', 'imgContainer')
cafeImg.style.background = "url('/src/imgs/pixelcafe.png') repeat"
cafeImg.setAttribute('alt', "pixelart of pasteries and drinks")
cafeImg.setAttribute('class', "pixelCafe")

body.appendChild(cafeImgContainer)
cafeImgContainer.appendChild(cafeImg)
}
