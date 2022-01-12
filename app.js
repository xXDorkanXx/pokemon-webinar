let count = 1;

function render(){
    let container = document.getElementById("pokemon");
    container.innerHTML = `<img class="poke-display" src= "https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
};

let prev = document.getElementById("prev-btn");
let next = document.getElementById("next-btn");

prev.onclick = function(){
    if (count > 1){
        count--;
        render();
    };
};

next.onclick = function(){
    if (count < 649){
        count++;
        render();
    };
};

render();