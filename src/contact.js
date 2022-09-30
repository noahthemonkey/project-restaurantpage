export function contact(){
    const content = document.getElementById('content')
    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('class', 'contactContainer')
    

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
    
    const mrmonkeyh1 = document.createElement('h1')

    mrmonkey.appendChild(mrmonkeyh1)
    const elpenguinoh1 = document.createElement('h1')

    elpenguino.appendChild(elpenguinoh1)
    const mskittyh1 = document.createElement('h1')

    mskitty.appendChild(mskittyh1)
    

    
    mrmonkeyh1.textContent = 'Mr Monkey'
    elpenguinoh1.textContent = 'El Penguino'
    mskittyh1.textContent = 'Ms Kitty'


    

    const mrmonkeyImg = document.createElement('img')
    mrmonkeyImg.setAttribute('src', '/src/imgs/contactPeople/mrmonkey.png')
    mrmonkey.appendChild(mrmonkeyImg)

    const elpenguinoImg = document.createElement('img')
    elpenguinoImg.setAttribute('src', '/src/imgs/contactPeople/elpenguino.png')
    elpenguino.appendChild(elpenguinoImg)

    const mskittyImg = document.createElement('img')
    mskittyImg.setAttribute('src', '/src/imgs/contactPeople/mskitty.png')
    mskitty.appendChild(mskittyImg)

    const mrmonkeyText = document.createElement('p')
    const mrmonkeyPhone = document.createElement('p')
    const mrmonkeyMail = document.createElement('p')
    mrmonkeyText.textContent = ('Waiter')
    mrmonkeyPhone.textContent = ('111-222-333')
    mrmonkeyMail.textContent = ('mrmonkeymail@real.com')
    mrmonkey.append(mrmonkeyText, mrmonkeyPhone, mrmonkeyMail)
    const elpenguinoText = document.createElement('p')
    const elpenguinoPhone = document.createElement('p')
    const elpenguinoMail = document.createElement('p')
    elpenguinoText.textContent = ('Chef')
    elpenguinoPhone.textContent = ('323-323-323')
    elpenguinoMail.textContent = ('elpenguino@yes.com')
    elpenguino.append(elpenguinoText, elpenguinoPhone, elpenguinoMail)
    const mskittyText = document.createElement('p')
    const mskittyPhone = document.createElement('p')
    const mskittyMail = document.createElement('p')
    mskittyText.textContent = ('Manager')
    mskittyPhone.textContent = '999-999-999'
    mskittyMail.textContent = 'mskittymail@kitten.com'
    mskitty.append(mskittyText, mskittyPhone, mskittyMail)

    
    
    content.appendChild(cafeH1)
    content.appendChild(contactContainer)
    contactContainer.append(mrmonkey, elpenguino, mskitty)

    
    
    
    }