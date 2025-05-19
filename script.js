// Image Carousel
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
];

let index = 0;
const carouselImg = document.getElementById("carousel-img");

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  carouselImg.src = images[index];
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  carouselImg.src = images[index];
});

// Joke API
const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
const loader = document.getElementById("loader");

jokeBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  jokeDisplay.textContent = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      loader.classList.add("hidden");
      jokeDisplay.textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      loader.classList.add("hidden");
      jokeDisplay.textContent = "Oops! Couldn't fetch a joke.";
    });
});
