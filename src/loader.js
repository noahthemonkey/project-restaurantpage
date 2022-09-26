
export function header() {
    const content = document.getElementById('content')
    const h1 = document.createElement('h1')
    
    h1.textContent = 'hello is thsi wroking'
    
    
    content.appendChild(h1)
    

    console.log('fucku')
}


export const createAppend = (child) => {

    
    const child = document.createElement(`${child}`)
    content.appendChild(child)
}
