const pName = document.querySelector('.pokeName')
const pID = document.querySelector('.pokeID')
const pType = document.querySelector('.pokeType')
const sprite = document.querySelector('.image')

async function getPoke(value){
try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    let data = await response.json()
    carregaPokemon(data)  
}
catch{
    window.alert('[ERRO]: Insira um pokemon válido')
}

}
function upperCase(str){
    let strUpper = str[0].toUpperCase() + str.substr(1)
    return strUpper
}

function carregaPokemon(pokemon){

        pName.innerHTML = upperCase(pokemon.name)
        pID.innerHTML = pokemon.id
        pType.innerHTML = " "
        for(const key in pokemon.types){
        let keyNum = parseInt(key)
            pType.innerHTML += `${keyNum+1}-${upperCase(pokemon.types[keyNum].type.name)} `
        }
        if(pokemon.id <= 649){
            sprite.setAttribute('src', `${pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`)
        }else{
            sprite.setAttribute('src', pokemon.sprites.front_default)
        } 
}


function Exec(){
    const input = document.querySelector('.value')
    let value = input.value
    getPoke(value)
}
