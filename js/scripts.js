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

for (let i=0; i<pokemonList.length; i++){
  document.write(pokemonList[i].name +" "+"height is "+ pokemonList[i].height +" m!"); 

  if(pokemonList[i].height >= 1.7) {
      document.write("     - I\`m size L. Wow, that\`s big!"+ "<br>");
  } else if(pokemonList[i].height >=0.5 && pokemonList[i].height <=1.1) {
      document.write("     - I\`m size M. "+ "<br>");
  } else {
      document.write("     - I\`m size S. " + "<br>");
  }
}

