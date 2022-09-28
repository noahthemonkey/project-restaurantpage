export function home(){



const content = document.getElementById('content')

function resetContent(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
      
}
resetContent()

const homeContent = document.createElement('div')

const reviewsContainer = document.createElement('div')

const reviews = document.createElement('div')
const customerReviews = document.createElement('div')

homeContent.setAttribute('class', 'homeContent')

reviewsContainer.setAttribute('class', 'reviewsContainer')

reviews.textContent = 'BananAdvisor 9/10 Bananas!'

const cafeH1 = document.createElement('h1')
const cafeP = document.createElement('p')



cafeH1.textContent = 'Welcome to PixCafe!'

cafeP.style.fontStyle = 'italic';
cafeP.textContent = 'I went to PixCafe and I had the best time of my life! I will never forget the time I spent there! 10/10 recommend it! - Mr Elephant'



content.appendChild(homeContent)
homeContent.appendChild(cafeH1)
homeContent.appendChild(reviewsContainer)
reviewsContainer.appendChild(reviews)
reviewsContainer.appendChild(customerReviews)
customerReviews.appendChild(cafeP)







}