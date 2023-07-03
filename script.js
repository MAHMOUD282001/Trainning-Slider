let imgsContainer = document.querySelectorAll(".slider div");

let prevBtn = document.querySelector(".prev");

let nextBtn = document.querySelector(".next");

let slideIndex = 0;

let next = () => {
  slideIndex++;

  if (slideIndex === imgsContainer.length) {
    slideIndex = 0;
  }

  imgsContainer.forEach((img) => {
    img.classList.remove("active");
  });

  imgsContainer[slideIndex].classList.add("active");
};

let prev = () => {
  if (slideIndex === 0) {
    slideIndex = imgsContainer.length - 1;
  } else {
    slideIndex--;
  }

  imgsContainer.forEach((img) => {
    img.classList.remove("active");
  });

  imgsContainer[slideIndex].classList.add("active");
};

nextBtn.addEventListener("click", next);

prevBtn.addEventListener("click", prev);

var Timer = setInterval(() => {
  next();
}, 3000);
