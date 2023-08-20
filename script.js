
const habilidades=document.getElementsByClassName("habilidades")[0]
const slideInElements = document.querySelectorAll('.slide-in-element');
const copyButtons = document.querySelectorAll(".copyButton");
const inputs = document.querySelectorAll(".contatos input");

const slideContainer = document.querySelector('.slide-container');
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');


let currentPosition = 0;
const slidesToShow = 3;

for (let i = 0; i < slidesToShow; i++) {
  slides[i].classList.add('active');
}

function updateSlidePosition() {
  slideTrack.style.transform = `translateX(-${currentPosition * (100 / slidesToShow)}%)`;
}

function slidePrev() {
  if (currentPosition > 0) {
      slideTrack.children[currentPosition + slidesToShow - 1].classList.remove('active');
      currentPosition--;
      slideTrack.children[currentPosition].classList.add('active');
      updateSlidePosition();
  }
}

function slideNext() {
  if (currentPosition < slides.length - slidesToShow) {
      slideTrack.children[currentPosition].classList.remove('active');
      currentPosition++;
      slideTrack.children[currentPosition + slidesToShow - 1].classList.add('active');
      updateSlidePosition();
  }
}


prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

copyButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    inputs[index].removeAttribute("disabled");
    inputs[index].select();
    document.execCommand("copy");
    inputs[index].setAttribute("disabled", true);

    // Opcional: Dar algum feedback visual para o usuário
    button.textContent = "Copiado!";
    setTimeout(function() {
      button.textContent = "Copiar";
    }, 1500);
  });
});


window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
      } else {
        document.getElementById("backToTopBtn").style.display = "none";
      }
    }

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }