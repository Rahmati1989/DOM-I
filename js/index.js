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

const a = document.querySelectorAll('a');
a[0].innerText = siteContent['nav']['nav-item-1'];
a[1].innerText = siteContent['nav']['nav-item-2']
a[2].innerText = siteContent['nav']['nav-item-3']
a[3].innerText = siteContent['nav']['nav-item-4']
a[4].innerText = siteContent['nav']['nav-item-5']
a[5].innerText = siteContent['nav']['nav-item-6']

let circleimg = document.getElementById('cta-img');
circleimg.setAttribute('src',siteContent["cta"]["img-src"]);
let h1 = document.querySelector('h1');
h1.innerText = siteContent["cta"]["h1"];
let button = document.querySelector('button');
button.innerText = siteContent["cta"]["button"];

let textContent = document.querySelectorAll('h4');
textContent[0].innerText = siteContent["main-content"]["features-h4"];
textContent[1].innerText = siteContent["main-content"]["about-h4"];
textContent[2].innerText = siteContent["main-content"]["services-h4"];
textContent[3].innerText = siteContent["main-content"]["product-h4"];
textContent[4].innerText = siteContent["main-content"]["vision-h4"];

let textContentP = document.querySelectorAll('p');
textContentP[0].innerText = siteContent["main-content"]["features-content"];
textContentP[1].innerText = siteContent["main-content"]["about-content"];
textContentP[2].innerText = siteContent["main-content"]["services-content"];
textContentP[3].innerText = siteContent["main-content"]["product-content"];
textContentP[4].innerText = siteContent["main-content"]["vision-content"];

let middleimage = document.querySelector('#middle-img');
middleimage.src = "img/mid-page-accent.jpg"

textContent[5].innerText = siteContent["contact"]["contact-h4"];
textContentP[5].innerText = siteContent["contact"]["address"];
textContentP[6].innerText = siteContent["contact"]["phone"];
textContentP[7].innerText = siteContent["contact"]["email"];
textContentP[8].innerText =siteContent["footer"]["copyright"];

