let pokemonRepository = (function(){
    let pokemonList = [

        {name: "charizard",
         height: 1.7,
         types: ["fire","flying",]},
      
        {name: "Bulbasur",
         height: 0.5, 
         types: ["grass","poison"]},
      
        {name: "Pikachu", 
          height: 0.4,
          types: ["ground","electric","poison"]},
      
        {name: "butterFree",
         height: 0.7, 
         types: ["bug","ice","flying"]},
      
        {name: "kadabra",
         height: 1.1,
         types: ["psychic","fire", "poison"]}
      ];

      function add(pokemon){
        pokemonList.add(pokemon);
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
    function showDetails(pokemon){
        console.log(pokemon);
    }
    function eventListener (button, pokemon){
        button.addEventListener("click", function(){
            showDetails(pokemon)
        });
         
    }
    return {
        add: add,
        getAll:getAll,
        addListItem: addListItem
    };
})();



    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });

