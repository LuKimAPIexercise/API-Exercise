const card_container = document.querySelector("#card_container");

// /*get gender*/
const pickedGender = new URLSearchParams(window.location.search).get("gender");
console.log("browse loader...", pickedGender);

fetch(`https://dummyjson.com/users`)
  .then((response) => response.json())
  .then((data) => showList(data.users)); // FIX: Use `data.users`

function showList(users) { // FIX: Rename `ids` to `users`
  const markup = users
    .map(
      (user) => `        
      <div class="card_multi">
          <img src="default.png" alt="" class="pfp" id="pfp">
          
          <h1 class="name">
              ${user.firstName} ${user.lastName}
          </h1>
          <h1> ${user.gender} </h1>
          <p class="job_title">
              ${user.company.title || 'Unknown Job'}
          </p>

          <a href="single.html">Read more</a>
      </div>`
    )
    .join("");

  card_container.innerHTML = markup; // FIX: Use `idContainer`
}


// /*info på browse*/
// let browse = document.querySelector("card_container");
// let fetchUrl;

// if (pickedGender === null) {
//   fetchUrl = https://dummyjson.com/users;
//   console.log("fetchurl er ", fetchUrl);
// } else {
//   fetchUrl = https://dummyjson.com/users/filter?key=gender&value=${pickedGender};
//   console.log("fetchurl er ", fetchUrl);
// }

// fetch(fetchUrl)
//   .then((response) => response.json())
//   .then((data) => showList(data));




// fetch(`https://dummyjson.com/users/`)
//   .then((response) => response.json())

//   const gender = new URLSearchParams(window.location.search).get("gender");

//   // Update the <h2> element with the category name (fra CHATGPT)
// document.querySelector("h2").textContent = myCategori;

// function showList(users) {
//     console.log(users);
  
//     const markup = users
//       .map(
//         (product) => `
//                 <h2>{users.}</h2>

//         <div class="card_multi" id="card_multi">
//             <img src="default.png" alt="" class="pfp" id="pfp">
            
//             <h1 class="name" id="name">
//                 Navn
//             </h1>
//             <p class="job_title" id="job_title">
//                 job title
//             </p>

//             <a href="single.css">Read more</a>

//         </div>`
//       )
//       .join("");
//     listContainer.innerHTML = markup;
//   }