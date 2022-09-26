export function menu(){
    const content = document.getElementById('content')
    
    const menuH1 = document.createElement('h1')

    function resetContent(){
        while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          
    }
    resetContent()
    


    const mainDishes = document.createElement('h1')
    const sides = document.createElement('h1')

    

    
    
    menuH1.textContent = 'Menu'
    
    
    sides.textContent = 'Sides'
    


    
    
    content.appendChild(menuH1)
        const beverages = document.createElement('h1')
                const strawberryBoba = document.createElement('div')
                strawberryBoba.textContent = 'This is yummy Strawberry Boba!'
                const machaTea = document.createElement('div')
                machaTea.textContent = 'This is yummy Macha Tea!'
                const tea = document.createElement('div')
                tea.textContent = 'This is yummy Tea!'
                const cappuccino = document.createElement('div')
                cappuccino.textContent = 'This is yummy Cappuccino!'
                const americano = document.createElement('div')
                americano.textContent = 'This is yummy Americano!'
                const orangeJuice = document.createElement('div')
                orangeJuice.textContent = 'This is yummy Orange Juice!'
                const fizzyDrink = document.createElement('div')
                fizzyDrink.textContent = 'This is yummy Fizzy drink!'
        
        beverages.textContent = 'Beverages'
        beverages.append(strawberryBoba, machaTea, tea, cappuccino, americano, orangeJuice, fizzyDrink)

        content.appendChild(beverages)
    
    
        // Berry pancake, Butter Syrup Pancakes, Ice Cream Pancake, Egg & Sandwiches, Bento Box
    content.appendChild(mainDishes)
    const berryPancake = document.createElement('div')
    berryPancake.textContent = 'MMMM! Berry Pancakes!'
    const butterPancake = document.createElement('div')
    butterPancake.textContent = 'MMMM! Butter Syrup Pancakes!'
    const icecreamPancake = document.createElement('div')
    icecreamPancake.textContent = 'MMMM! Ice Cream Pancakes!'
    const eggSandwich = document.createElement('div')
    eggSandwich.textContent = 'MMMM! Egg & Sandwich!'
    const bentoBox = document.createElement('div')
    bentoBox.textContent = 'MMMM! Bento Box!'


    mainDishes.textContent = 'Main Dishes'
    mainDishes.append(berryPancake, butterPancake, icecreamPancake, eggSandwich, bentoBox)

    content.appendChild(sides)
    
    
    
    
    }