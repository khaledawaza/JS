let pokemonRepository = function() {
    let d = [];
    function a(a){d.push(a)}
    function b()
    {return d}
    function c(a){pokemonRepository.loadDetails(a).then
        (function(){e(a)
        })}

        function e(a){
        let b=$(".modal-body"),
        c=$(".modal-title");
        c.empty(),
        b.empty();
        let e=$("<h1>"+a.name+"</h1>"),
        d=$('<img class="pokemon-img">');
        d.attr("src",a.imageUrl);
        let f=$("<p>Height :"+a.height+"</p>"),
        g=$("<p>Types : "+a.types+"</p>");

        c.append(e),
        b.append(d),
        b.append(f),
        b.append(g)
    }

        return document.querySelector("#modal-container"),{

            add:a,
            getAll:b,
            addListItem:
            function(e)

            {let b=document.querySelector(".pokemon-list"),
            d=document.createElement("li");
            b.classList.add("group-list-item"),
            b.classList.add("col-sm-4","col-md-6","col-lg-12");
            let a=document.createElement("button");
            a.classList.add("pokemonButton"),
            a.innerText=e.name,
            a.setAttribute("data-toggle","modal"),
            a.setAttribute("data-target","#pokemon-modal"),
            d.appendChild(a),
            b.appendChild(d),
            a.addEventListener("click",
            function(a){c(e)}

            )},

            loadList:function() {

             return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
            .then(function(a){
                return a.json()
            }).then(function (b) {
                b.results.forEach(function(b){
                let c={name:b.name,detailsUrl:b.url};a(c),
                console.log(c)
            })

        }).catch(function(a) {
            console.error(a)
         })
        },
        loadDetails:function(a){
            return fetch(a.detailsUrl).then(function(a){
                    return a.json() }).then(function(b){

                    a.imageUrl=b.sprites.front_default,
                    a.height=b.height,
                    a.types=b.types.map(a=>a.type.name).join(",")
            }).catch (
                function(a){console.error(a)

                })},

                showDetails:c}}();
                pokemonRepository.loadList().then(function(){
                    pokemonRepository.getAll().forEach(function(a){
                        pokemonRepository.addListItem(a)

                    })})
