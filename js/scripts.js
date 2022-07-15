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
    return {
        add,
        getAll
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){
    createElement(pokemon.name +" "+"height is "+ pokemon.height +" m!"); 

    if(pokemon.height >= 1.7) {
        document.write("     - I\`m size L. Wow, that\`s big!"+ "<br>");
    } else if(pokemon.height >=0.5 && pokemon.height <=1.1) {
        createElement("     - I\`m size M. "+ "<br>");
    } else {
        createElement("     - I\`m size S. " + "<br>");
    }
});
