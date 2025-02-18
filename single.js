const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://dummyjson.com/users/${id}`;
const imagePath = `https://dummyjson.com/icon/${id}.webp`;


function getUser () {
  fetch(url)
    .then((res) => res.json())
    .then(showUsers);
}

function showUsers(User) {
  document.querySelector("h1").textContent = User.name;
  document.querySelector("p").textContent = User.title;
  document.querySelector("p").textContent = User.department;

  document.querySelector("img").src =`https://dummyjson.com/icon/${id};.webp`;
  document.querySelector("img").alt = User.image;
}

getUser();