/*jshint esversion: 7 */

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
    const obsrvr = new IntersectionObserver((items, observer) =>
    {
        items.forEach((item) =>
        {
            if (item.isIntersecting)
            {
                lazyLoad(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);
    allImages.forEach(img => {
        obsrvr.observe(img);
    });
}
else {
    allImages.forEach((img) =>
    {
        lazyLoad(img);
    });
}

/*Special Monday & Tuesday Message display*/
let day = now.getDay();
let joinMess = document.getElementById("joinUs");

if (day == 1 || day == 2 ) {
  joinMess.style.display = "block";
}

else{
  joinMess.style.display = "none";
}

/* Number Of Visits - Local Storage*/

let visitDisplay = document.getElementById("visits");
let numVisits = Number(window.localStorage.getItem("numberOfVisits"));

if (numVisits !== 0)
{
  visitDisplay.textContent = numVisits;
}
else
{
  visitDisplay.textContent = "This is your first visit";
}

numVisits++;
localStorage.setItem("numberOfVisits", numVisits);
/*no local storage value at the web page*/

