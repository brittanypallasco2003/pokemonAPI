function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  //console.log(getRandomInt(1,151))

  const fetchData=async(id)=>{
    try{

    const res=await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
        //CREAR UN POKEMON CON LOS DATOS QUE QUIERO TRABAJAR
        const pokemon={
            nombre: data.name,
            imgPokemon: data.sprites.other.dream_world.front_default,
            experiencia: data.data_experience,
            id:data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            tipo: data.types[0].type.name,
            tipo2: data.types[1].type.name,
            vida: data.stats[0].base_stat

        };
        pintarCard(pokemon);

    }catch(error){
        console.log(error);
    }
  }

  const pokemonRandom=getRandomInt(1,151);
  fetchData(pokemonRandom);

  //vamos a pintar la card
  const pintarCard =(pokemon)=>{
    console.log(pokemon);
    const flex=document.querySelector('.flex'); //donde va ir el card
    const template=document.querySelector('#template').content;//captura el contenido del template, ya no etiqueta por etiqueta
    const clone=template.cloneNode(true);//por buena practica no se debe trabajar en el template sino en su clon
    const fragment=document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src',pokemon.imgPokemon);
    clone.querySelector('.card-body-title').innerHTML=`${pokemon.nombre}<span>${pokemon.experiencia}</span>`;
    clone.querySelector('.card-body-text').innerHTML=`${pokemon.tipo}/${pokemon.tipo2}`;
    clone.querySelector('.poder').innerHTML=`${pokemon.vida}`;
    
    
    fragment.appendChild(clone);
    flex.appendChild(fragment);

  }



  //function (a){
  //  return a+5;
  //}


  //(a)=>{
    //return a+5;
// la => indica que es una función argumento y corchete de apertura para remplazar una función