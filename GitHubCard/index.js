/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
   */
  
  /* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
           */

          /* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
Using DOM methods and properties, create a component that will return the following DOM element:

*/
const userCardCreator = (obj) => {
  // <div class="card">
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  //   <img src={image url of user} />
  let userImg = document.createElement('img');
  userImg.src = obj.avatar_url;
  cardDiv.appendChild(userImg);
  //   <div class="card-info">
  let infoDiv = document.createElement('div');
           infoDiv.classList.add('card-info');
           cardDiv.appendChild(infoDiv);
           //     <h3 class="name">{users name}</h3>
           let nameHeader = document.createElement('h3');
              nameHeader.classList.add('name');
              nameHeader.textContent = obj.name;
              infoDiv.appendChild(nameHeader);
              //     <p class="username">{users user name}</p>
              let userName = document.createElement('p');
              userName.classList.add('username');
              userName.textContent = obj.login;
              infoDiv.appendChild(userName);
              //     <p>Location: {users location}</p>
              let locationPar = document.createElement('p');
              locationPar.textContent = `Location: ${obj.location}`;
              infoDiv.appendChild(locationPar);
              //     <p>Profile:  
              let profilePar = document.createElement('p');
              profilePar.textContent = 'Profile: ';
              infoDiv.appendChild(profilePar);
              //       <a href={address to users github page}>{address to users github page}</a>
              let addressAnch = document.createElement('a');
              addressAnch.href = obj.url;
              addressAnch.textContent = obj.url;
              profilePar.appendChild(addressAnch);
              //     </p>
              //     <p>Followers: {users followers count}</p>
              let followersPar = document.createElement('p');
              followersPar.textContent = `Followers: ${obj.followers}`;
              infoDiv.appendChild(followersPar);
              //     <p>Following: {users following count}</p>
              let followingPar = document.createElement('p');
              followingPar.textContent = `Following: ${obj.following}`;
              infoDiv.appendChild(followingPar);
              //     <p>Bio: {users bio}</p>
              let bioPar = document.createElement('p');
              bioPar.textContent = `Bio: ${obj.bio}`;
              infoDiv.appendChild(bioPar);
              //   </div>
              // </div>
              return cardDiv;
            }
            
            /* List of LS Instructors Github username's: 
            tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
  */
 let cardsDiv = document.querySelector('.cards');
 
 axios.get('https://api.github.com/users/Aaron-Lamb')
 .then(response => {
  const newCard = userCardCreator(response.data);
  cardsDiv.appendChild(newCard);
 })
 .catch(error => {
   console.log(error)
 })