export function contact(){
    const content = document.getElementById('content')

    function resetContent(){
        while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          
    }
    resetContent()

    const cafeH1 = document.createElement('h1')
    cafeH1.textContent = 'Contact Information'
    
    const mrmonkey = document.createElement('div')
    const elpenguino = document.createElement('div')
    const mskitty = document.createElement('div')
    
    mrmonkey.setAttribute('class', 'mrmonkey')
    elpenguino.setAttribute('class', 'elpenguino')
    mskitty.setAttribute('class', 'mskitty')
    
  
    

    
    mrmonkey.textContent = 'Mr Monkey'
    elpenguino.textContent = 'El Penguino'
    mskitty.textContent = 'Ms Kitty'
    

    const mrmonkeyImg = document.createElement('img')
    mrmonkeyImg.setAttribute('src', '/src/imgs/contactPeople/mrmonkey.png')
    mrmonkey.appendChild(mrmonkeyImg)

    const elpenguinoImg = document.createElement('img')
    elpenguinoImg.setAttribute('src', '/src/imgs/contactPeople/elpenguino.png')
    elpenguino.appendChild(elpenguinoImg)

    const mskittyImg = document.createElement('img')
    mskittyImg.setAttribute('src', '/src/imgs/contactPeople/mskitty.png')
    mskitty.appendChild(mskittyImg)

    
    
    content.appendChild(cafeH1)
    content.appendChild(mrmonkey)
    content.appendChild(elpenguino)
    content.appendChild(mskitty)
    
    
    
    
    }