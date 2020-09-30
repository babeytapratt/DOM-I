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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll('a');
navItems.forEach((navItem, index) => {
  navItem.innerText = siteContent['nav'][`nav-item-${index + 1}`];
  })

const textContents = document.querySelectorAll('.text-content')

// const textContentsDOM = document.querySelectorAll('.cta-text');
// textContents[0].querySelector('h1').innerText = siteContent["cta"]["h1"]

const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

const textContentsFeatures = document.querySelectorAll('.text-content');
textContents[0].querySelector('h4').innerText = siteContent["main-content"]["features-h4"];

const textContentsFeaturesPara = document.querySelectorAll('.text-content');
textContents[0].querySelector('p').innerText = siteContent["main-content"]["features-content"];

const textContentsAbout = document.querySelectorAll('.text-content');
textContents[1].querySelector('h4').innerText = siteContent["main-content"]["features-h4"];

const textContentsAboutPara = document.querySelectorAll('.text-content');
textContents[1].querySelector('p').innerText = siteContent["main-content"]["features-content"];

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const textContentsServices = document.querySelectorAll('.text-content');
textContents[2].querySelector('h4').innerText = siteContent["main-content"]["services-h4"];

const textContentsServicesPara = document.querySelectorAll('.text-content');
textContents[2].querySelector('p').innerText = siteContent["main-content"]["features-content"];

const textContentsProduct = document.querySelectorAll('.text-content');
textContents[3].querySelector('h4').innerText = siteContent["main-content"]["product-h4"];

const textContentsProductPara = document.querySelectorAll('.text-content');
textContents[3].querySelector('p').innerText = siteContent["main-content"]["product-content"];

const textContentsVision = document.querySelectorAll('.text-content');
textContents[4].querySelector('h4').innerText = siteContent["main-content"]["vision-h4"];

const textContentsVisionPara = document.querySelectorAll('.text-content');
textContents[4].querySelector('p').innerText = siteContent["main-content"]["vision-content"];

const textContentsContact = document.querySelector('.contact');
textContents[0].querySelector('h4').innerText = siteContent["contact"]["contact-h4"];

// const textContentsAddress = document.querySelectorAll('.contact');
// textContents[0].querySelector('p').innerText = siteContent["contact"]["address"];

// const textContentsPhone = document.querySelectorAll('.contact');
// textContents[1].querySelector('p').innerText = siteContent["contact"]["phone"];

// const textContentsEmail = document.querySelectorAll('.contact');
// textContents[2].querySelector('p').innerText = siteContent["contact"]["contact-h4"];
