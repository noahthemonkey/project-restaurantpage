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

customerReviews.setAttribute('class', 'customerReviews')
reviews.textContent = 'BananAdvisor 9/10 Bananas!'



const openHours = document.createElement('div')
openHours.setAttribute('class', 'openHours')
const openH1 = document.createElement('h1')
const openP1 = document.createElement('p')
const openP2 = document.createElement('p')
const cafeH1 = document.createElement('h1')
const cafeP = document.createElement('p')


openH1.textContent = 'Hours'
openP1.textContent = "Monday to Friday 6am - 6pm"
openP2.textContent = "Saturday to Sunday 8am - 6pm"


cafeH1.textContent = 'Welcome to PixCafe!'

const review1 = document.createElement('p')
review1.textContent = 'I went to PixCafe and I had the best time of my life! I will never forget the time I spent there! 10/10 recommend it!'
review1.style.fontStyle = 'italic'
cafeP.style.fontWeight = 'bold';
cafeP.style.fontSize = '22px'
cafeP.textContent = ' - Mr Sheepy'


content.appendChild(cafeH1)
content.appendChild(homeContent)

homeContent.append(reviewsContainer, openHours)
openHours.append(openH1, openP1, openP2)
reviewsContainer.appendChild(customerReviews)
reviewsContainer.appendChild(reviews)

customerReviews.appendChild(review1)
customerReviews.appendChild(cafeP)







}