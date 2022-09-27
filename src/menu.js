export function menu(){
    const content = document.getElementById('content')
    
    const menuH1 = document.createElement('h1')

    function resetContent(){
        while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          
    }
    resetContent()
    


    const mainDishes = document.createElement('div')
    const sides = document.createElement('div')

    

    
    
    menuH1.textContent = 'Menu'
    content.appendChild(menuH1)
    
    
    


    
    

        const beverages = document.createElement('div')
                const strawberryBoba = document.createElement('div')
                strawberryBoba.textContent = 'This is yummy Strawberry Boba!'
                    const strawberryBobaImg = document.createElement('img')
                    strawberryBobaImg.setAttribute('src', '/src/imgs/menu/straweberryboba.png')
                    strawberryBoba.appendChild(strawberryBobaImg)
                    
                const machaTea = document.createElement('div')
                machaTea.textContent = 'This is yummy Macha Tea!'
                    const machaImg = document.createElement('img')
                    machaImg.setAttribute('src', '/src/imgs/menu/machatea.png')
                    machaTea.appendChild(machaImg)
                
                const tea = document.createElement('div')
                tea.textContent = 'This is yummy Tea!'
                    const teaImg = document.createElement('img')
                    teaImg.setAttribute('src', '/src/imgs/menu/tea.png')
                    tea.appendChild(teaImg)

                const cappuccino = document.createElement('div')
                cappuccino.textContent = 'This is yummy Cappuccino!'
                    const cappuccinoImg = document.createElement('img')
                    cappuccinoImg.setAttribute('src', '/src/imgs/menu/cappuccino.png')
                    cappuccino.appendChild(cappuccinoImg)

                
                const caffeLatte = document.createElement('div')
                caffeLatte.textContent = 'This is yummy Caffe Latte!'
                    const caffeLatteImg = document.createElement('img')
                    caffeLatteImg.setAttribute('src', '/src/imgs/menu/caffelatte.png')
                    caffeLatte.appendChild(caffeLatteImg)
                
                const americano = document.createElement('div')
                americano.textContent = 'This is yummy Americano!'
                    const americanoImg = document.createElement('img')
                    americanoImg.setAttribute('src', '/src/imgs/menu/americano.png')
                    americano.appendChild(americanoImg)
                
                const orangeJuice = document.createElement('div')
                orangeJuice.textContent = 'This is yummy Orange Juice!'
                    const orangeJuiceImg = document.createElement('img')
                    orangeJuiceImg .setAttribute('src', '/src/imgs/menu/orangejuice.png')
                    orangeJuice.appendChild(orangeJuiceImg )
                
                const fizzyDrink = document.createElement('div')
                fizzyDrink.textContent = 'This is yummy Fizzy drink!'
                    const fizzyDrinkImg = document.createElement('img')
                    fizzyDrinkImg.setAttribute('src', '/src/imgs/menu/fizzydrink.png')
                    fizzyDrink.appendChild(fizzyDrinkImg)
                
        
        beverages.textContent = 'Beverages'
        beverages.append(strawberryBoba, machaTea, tea, cappuccino, caffeLatte, americano, orangeJuice, fizzyDrink)
        beverages.setAttribute('class', 'beverages')

        content.appendChild(beverages)
    
    
        // Berry pancake, Butter Syrup Pancakes, Ice Cream Pancake, Egg & Sandwiches, Bento Box
    content.appendChild(mainDishes)
        const berryPancake = document.createElement('div')
        berryPancake.textContent = 'MMMM! Berry Pancakes!'
            const berryPancakeImg = document.createElement('img')
            berryPancakeImg.setAttribute('src', '/src/imgs/menu/berrypancake.png')
            berryPancake.appendChild(berryPancakeImg)
        const butterPancake = document.createElement('div')
        butterPancake.textContent = 'MMMM! Butter Syrup Pancakes!'
            const butterPancakeImg = document.createElement('img')
            butterPancakeImg.setAttribute('src', '/src/imgs/menu/butterpancake.png')
            butterPancake.appendChild(butterPancakeImg)

        const icecreamPancake = document.createElement('div')
        icecreamPancake.textContent = 'MMMM! Ice Cream Pancakes!'
            const icecreamPancakeImg = document.createElement('img')
            icecreamPancakeImg.setAttribute('src', '/src/imgs/menu/icecreampancake.png')
            icecreamPancake.appendChild(icecreamPancakeImg)

        
        const eggSandwich = document.createElement('div')
        eggSandwich.textContent = 'MMMM! Egg & Sandwich!'
            const eggSandwichImg = document.createElement('img')
            eggSandwichImg.setAttribute('src', '/src/imgs/menu/eggsandwich.png')
            eggSandwich.appendChild(eggSandwichImg)
        
        const bentoBox = document.createElement('div')
        bentoBox.textContent = 'MMMM! Bento Box!'
            const bentoBoxImg = document.createElement('img')
            bentoBoxImg.setAttribute('src', '/src/imgs/menu/bentobox.png')
            bentoBox.appendChild(bentoBoxImg)
    


    mainDishes.textContent = 'Main Dishes'
    mainDishes.append(berryPancake, butterPancake, icecreamPancake, eggSandwich, bentoBox)
    mainDishes.setAttribute('class', 'mainDishes')


    const chocoStrawberry = document.createElement('div')
    chocoStrawberry.textContent = 'Amazing Chocolate Strawberry'
        const chocoStrawberryImg = document.createElement('img')
        chocoStrawberryImg.setAttribute('src', '/src/imgs/menu/strawberrychoc.png')
        chocoStrawberry.appendChild(chocoStrawberryImg)  
    
    const creamDonut = document.createElement('div')
    creamDonut.textContent = 'Amazing Cream Filled Donut'
        const creamDonutImg = document.createElement('img')
        creamDonutImg.setAttribute('src', '/src/imgs/menu/donut.png')
        creamDonut.appendChild(creamDonutImg)  
    
    
    const mochiIcecream = document.createElement('div')
    mochiIcecream.textContent = 'Amazing Dango!'
        const mochiIcecreamImg = document.createElement('img')
        mochiIcecreamImg.setAttribute('src', '/src/imgs/menu/mochi.png')
        mochiIcecream.appendChild(mochiIcecreamImg)  

    
    
    const croissant = document.createElement('div')
    croissant.textContent = 'Amazing Croissant'
        const croissantImg = document.createElement('img')
        croissantImg.setAttribute('src', '/src/imgs/menu/croissant.png')
        croissant.appendChild(croissantImg)  




    sides.textContent = 'Sides'
    sides.append(chocoStrawberry, creamDonut, mochiIcecream, croissant)
    sides.setAttribute('class', 'sides')
    content.appendChild(sides)
    
    
    
    
    }