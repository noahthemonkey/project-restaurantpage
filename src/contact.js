export function contact(){
    const content = document.getElementById('content')

    function resetContent(){
        while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          
    }
    resetContent()

    const cafeH1 = document.createElement('h1')
    
    const cafeOwner1 = document.createElement('div')
    const cafeOwner2 = document.createElement('div')
    const cafeOwner3 = document.createElement('div')
    
    
    
    cafeH1.textContent = 'Contact Information'
    

    
    cafeOwner1.textContent = 'yo yo'
    cafeOwner2.textContent = 'sup sup'
    cafeOwner3.textContent = 'bye bye'
    
    
    
    content.appendChild(cafeH1)
    content.appendChild(cafeOwner1)
    content.appendChild(cafeOwner2)
    content.appendChild(cafeOwner3)
    
    
    
    
    }