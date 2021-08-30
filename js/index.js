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

document.querySelector('title').textContent = 'Great Idea!'

const allLinks = document.querySelectorAll('a');
for(let i = 0; i < allLinks.length; i++){
  const current = allLinks[i];
  current.textContent = siteContent["nav"][`nav-item-${i+1}`];
}

// the above is simplified code for the code that's commented out below:

// const servicesLink = document.querySelector('a:nth-of-type(1)')
// const productLink = document.querySelector('a:nth-of-type(2)');
// const visionLink = document.querySelector('a:nth-of-type(3)')
// const featuresLink = document.querySelector('a:nth-of-type(4)')
// const aboutLink = document.querySelector('a:nth-of-type(5)')
// const contactLink = document.querySelector('a:nth-of-type(6)');

// servicesLink.textContent = siteContent["nav"]["nav-item-1"];
// productLink.textContent = siteContent["nav"]["nav-item-2"];
// visionLink.textContent = siteContent["nav"]["nav-item-3"];
// featuresLink.textContent = siteContent["nav"]["nav-item-4"];
// aboutLink.textContent = siteContent["nav"]["nav-item-5"];
// contactLink.textContent = siteContent["nav"]["nav-item-6"];



// Get Started Section
// document.querySelector('.cta h1').textContent = siteContent['cta']['h1']  *** I wrote then commented this out because I know this is the way you wanted us to do this assignment, by calling siteContent properties but there are breaks between the words in DOM IS AWESOME so I want to utilize innerHTML to including those breaks.  Please see below:

document.querySelector('.cta h1').innerHTML = 'Dom<br> Is<br> Awesome';
document.querySelector('.cta button').textContent = siteContent['cta']['button'];
document.querySelector('.cta img').src = siteContent['cta']['img-src'];



// Top Content
document.querySelector(".top-content .text-content:nth-of-type(1) h4").textContent = siteContent['main-content']['features-h4'];
document.querySelector(".top-content .text-content:nth-of-type(1) p").textContent = siteContent['main-content']['features-content'];
document.querySelector(".top-content .text-content:nth-of-type(2) h4").textContent = siteContent['main-content']['about-h4'];
document.querySelector(".top-content .text-content:nth-of-type(2) p").textContent = siteContent['main-content']['about-content'];


// Middle Image
document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];


// Bottom Content
document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['services-content'];

document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];

document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];


// Contact Section
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent['contact']['address'];
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];


// Footer 
document.querySelector('footer').textContent = siteContent['footer']['copyright'];