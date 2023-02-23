/*jshint esversion: 6 */

/*Date display*/

const datefield = document.querySelector(".date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

let year = document.querySelector("#year");
const currentYear =  new Date().getFullYear();
year.textContent= currentYear;

/*Footer Last modified*/

let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

const day = now.getDay();
const joinMess = document.getElementById("joinUs");

if (day == 1) {
  joinMess.style.display = "block";
} else if (day == 2) {
  joinMess.style.display = "block";
} else {
  joinMess.style.display = "none";
}

/* Lazy loading of images*/

const allImages = document.querySelectorAll("img[data-src]");

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
        img.className = "in";
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) =>
        {
            if (item.isIntersecting)
            {
                lazyLoad(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options)
    allImages.forEach((img) =>
    {
        obsrvr.observe(img);
    });
}
else {
    allImages.forEach((img) =>
    {
        lazyLoad(img);
    });
}

/* Number Of Visits - Local Storage*/

 var numberOfVisits = localStorage.getItem("numberOfVisits");

  if (!numberOfVisits) {
    numberOfVisits = 0;
  }
  numberOfVisits = +numberOfVisits + 1;

  localStorage.setItem("numberOfVisits", numberOfVisits);
  document.getElementById("visit").innerHTML = numberOfVisits;

  if (numberOfVisits < 2) {
    document.getElementById("special-message").innerHTML = 
    "Thanks for visiting!";
  }

  function clearCacheAndReload() {
    localStorage.removeItem("numberOfVisits");
    location.reload();
  }

  function reload() {
    location.reload();
  }