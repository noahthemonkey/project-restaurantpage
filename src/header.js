import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'

export function header() {
    const body = document.querySelector('body')
    
    const header = document.createElement('header')
    body.appendChild(header)
    

    const navBar = document.createElement('nav')
    header.appendChild(navBar)

    const home = document.createElement('div')

    const menu = document.createElement('div')
    const contact = document.createElement('div')

    home.setAttribute('class', 'homeNav')
    menu.setAttribute('class', 'menuNav')
    contact.setAttribute('class', 'contactNav')


    home.addEventListener('click', loadContent);
    menu.addEventListener('click', loadContent);
    contact.addEventListener('click', loadContent);
    
    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(contact)
    
    home.textContent = "Home"
    menu.textContent = "Menu"
    contact.textContent = "Contact"


    



    body.insertBefore(header, content)
  

}



export function loadContent(){
    console.log(this.textContent)
    if(this.textContent == 'Home'){
        home()
    }
    else if(this.textContent == 'Menu'){
        menu()
    }
    else if(this.textContent == 'Contact'){
        contact()
    }
}