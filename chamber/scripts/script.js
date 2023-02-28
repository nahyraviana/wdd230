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

/*Special Monday & Tuesday Message display*/
const day = now.getDay();
const joinMess = document.getElementById("joinUs");

if (day == 1) {
  joinMess.style.display = "block";
}
else if (day == 2){
  joinMess.style.display = "block";
}
else{
  joinMess.style.display = "none";
}

/* Number Of Visits - Local Storage*/
const visitDisplay = document.getElementById("visit");
let numberOfVisits = Number(windows.localStorage.getItem("visits-ls"));

if (numberOfVisits !== 0)
{
  visitDisplay.textContent = numberOfVisits;
}
else
{
  visitDisplay.textContent = "This is your first visit";
}

numberOfVisits++;
localStorage.setItem("visits-ls", numberOfVisits);
/*no local storage value at the web page*/