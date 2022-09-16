const submit = document.querySelector(".submit")
const score = document.getElementById("score")

const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const b4 = document.querySelector(".b4")
const b5 = document.querySelector(".b5")

const rating = document.querySelector(".rating")
const thanks = document.querySelector(".thanks")



b1.addEventListener("click", (e) => {
  score.innerText = b1.innerText
  complete();
});

b2.addEventListener("click", (e) => {
  score.innerText = b2.innerText
  complete();
});

b3.addEventListener("click", (e) => {
  score.innerText = b3.innerText
  complete();
});

b4.addEventListener("click", (e) => {
  score.innerText = b4.innerText
  complete();
});

b5.addEventListener("click", (e) => {
  score.innerText = b5.innerText
  complete();
});

const complete = () => {
  submit.addEventListener('click', (e) => {
    rating.remove();
    thanks.style.display = "block";
  });
}
