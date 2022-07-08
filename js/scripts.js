let pokemonRepository = (function(){
    let pokemonList = [];

    function add(pokemon){
        pokemonRepository.add(pokemon);
    }
    function getAll(){
        return pokemonRepository.getAll(pokemonList);
    }
    return {
        add,
        getAll
    }
})();

(function(){
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
})();


  pokemonRepository.forEach(function(pokemon){
  document.write(pokemon.name +" "+"height is "+ pokemon.height +" m!"); 

  if(pokemonList[i].height >= 1.7) {
      document.write("     - I\`m size L. Wow, that\`s big!"+ "<br>");
  } else if(pokemonList[i].height >=0.5 && pokemonList[i].height <=1.1) {
      document.write("     - I\`m size M. "+ "<br>");
  } else {
      document.write("     - I\`m size S. " + "<br>");
  }
})

