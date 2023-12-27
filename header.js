//Creating a nav
var navElement = document.createElement('nav');
document.body.appendChild(navElement);

// Creating a div with class "logo" and appending it to the "nav" div
var logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
navElement.appendChild(logoDiv);

// Creating an img element and appending it to the "logo" div
var img = document.createElement('img');
img.src = 'flip.png';
img.alt = 'logo';
logoDiv.appendChild(img);


// Creating a div with class "search" and appending it to the "nav" div
var searchDiv = document.createElement('div');
searchDiv.classList.add('search');
navElement.appendChild(searchDiv);

// Creating a search input element
var searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.name = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'Search';
searchDiv.appendChild(searchInput);


//Creating anchor tag
var aTag = document.createElement('a');
aTag.classList.add('Navlink');
aTag.textContent = 'Become a seller';
navElement.appendChild(aTag);

var cartTag = document.createElement('a');
cartTag.classList.add('Navlink');
cartTag.textContent = 'Cart';
navElement.appendChild(cartTag);

