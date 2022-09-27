export function home(){



const content = document.getElementById('content')

function resetContent(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
      
}
resetContent()

const cafeH1 = document.createElement('h1')
const cafeImg = document.createElement('img')
const cafeP = document.createElement('p')



cafeH1.textContent = 'Welcome to PixCafe!'

cafeImg.setAttribute('src', '/src/imgs/pixelcafe.png')
cafeImg.setAttribute('alt', "pixelart of pasteries and drinks")

cafeP.textContent = 'I went to PixCafe and I had the best time of my life! I will never forget the time I spent there! 10/10 recommend it!'



content.appendChild(cafeH1)
content.appendChild(cafeImg)
content.appendChild(cafeP)




}