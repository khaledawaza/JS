let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl ="https://pokeapi.co/api/v2/pokemon/?limit=5";

  function loadList(){
      return fetch(apiUrl).then(function(response){ 
          return response.json();
      }).then(function(json){ 
          json.results.forEach(function(item){  
              let pokemon = { 
                  name: item.name, 
                  detailsUrl: item.url 
              };
              add(pokemon);
              console.log(pokemon);
          });
      }).catch(function(e){
          console.error(e);
      });
  }

  function add(pokemon){
      if(
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "detailsUrl" in pokemon
      ) {
      pokemonList.push(pokemon);
  } else {
      console.log("pokemon is not correct");
  }
  }

  function getAll(){
      return pokemonList;
  }

  function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list"); 
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("pokemon-button"); 
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      eventListener(button, pokemon);
  }

  function eventListener (button, pokemon){
      button.addEventListener("click", function(){
          showDetails(pokemon);
      });
  }

  function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
          showModal(item);
      });
   }

  function loadDetails(item) {
      let url = item.detailsUrl; 
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = details.abilities;
        hideLoader();
      })

      .catch(function (e) {
       console.error(e);
       hideLoader();

      });
    }

function showModal(pokemon) {
  let modalContainer = document.querySelector("#modal-container");
   modalContainer.innerHTML =" ";
  let modal = document.createElement("div");
  modal.classList.add("modal");
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hideModal);
  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name; 
  let contentElement = document.createElement("p");
  contentElement.innerText = pokemon.height; 
  let container = document.querySelector("#image-container");
  let pokemoniImage = document.createElement("img");
  pokemonImage.src = "link to image";
  modal.appendChild(pokemonImage);
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);
  modalContainer.classList.add("is-visible"); 
  function hideModal() {
      let modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.remove("is-visible");
  }
  
  modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if(target === modalContainer) {
          hideModal();
      }
      });
  }

  document.querySelector("#show-modal").addEventListener("click", () => {
  showModal("Modal title", "This is the modal content!");
  });
  window.addEventListener("keydown", (e) => {
      let modalContainer = document.querySelector("modal-container");
      if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
          hideModal();
      }
  });

  return {
      add,
      getAll,
      addListItem,
      loadList,
      loadDetails,
      showDetails
  }
})();
  pokemonRepository.loadList().then(function(){
      pokemonRepository.getAll().forEach(function(pokemon){
          pokemonRepository.addListItem(pokemon);
  });
});
