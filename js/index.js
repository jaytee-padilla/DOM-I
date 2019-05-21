const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Section
let navBar = document.querySelectorAll('header nav a');

// Prepended element
let prependElement = document.createElement('a');
prependElement.textContent = 'Prepend';
prependElement.setAttribute('href', '#');
prependElement.style.color = 'green';
navBar[0].parentNode.prepend(prependElement);

// Appended element
let appendElement = document.createElement('a');
appendElement.textContent = 'Append';
appendElement.setAttribute('href', '#');
appendElement.style.color = 'green';
navBar[0].parentNode.append(appendElement);

navBar.forEach((element, i) => element.textContent = siteContent['nav'][`nav-item-${i+1}`]);

navBar.forEach((element) => element.style.color = 'green');

// CTA Section
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = `dom is awesome`;

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = `Get Started`;

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// Main Content Section
// Top Content
let featuresHeading = document.querySelector('.top-content .text-content h4');
featuresHeading.textContent = siteContent['main-content']['features-h4']

let featuresContent = document.querySelector('.top-content .text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutHeading = document.querySelectorAll('.top-content .text-content h4');
aboutHeading[1].textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.top-content .text-content p');
aboutContent[1].textContent = siteContent['main-content']['about-content'];

// Main Content Image
let mainContentImg = document.querySelector('#middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Content
let bottomContentHeadings = document.querySelectorAll('.bottom-content .text-content h4');
let bottomContentParagraphs = document.querySelectorAll('.bottom-content .text-content p');

bottomContentHeadings[0].textContent = siteContent['main-content']['services-h4'];
bottomContentParagraphs[0].textContent = siteContent['main-content']['services-content'];

bottomContentHeadings[1].textContent = siteContent['main-content']['product-h4'];
bottomContentParagraphs[1].textContent = siteContent['main-content']['product-content'];

bottomContentHeadings[2].textContent = siteContent['main-content']['vision-h4'];
bottomContentParagraphs[2].textContent = siteContent['main-content']['vision-content'];

// Contact Section
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

// Footer Section
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];
