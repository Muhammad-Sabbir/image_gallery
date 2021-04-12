const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

// console.log(smallImg);
smallImg.forEach( img=> {
  img.addEventListener("click",  ()=> {
    modal.classList.add("open");
    fullImg.classList.add("open");

    // Changin' the images dynamically
    const originalQuality = img.getAttribute("alt");
    fullImg.src = `img/small/${originalQuality}.jpg`;
  });
});

modal.addEventListener("click", e=> {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});