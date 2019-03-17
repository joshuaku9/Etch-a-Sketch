const container = document.querySelector("div");
for(let i = 0; i < 8; ++i){
    for(let j = 0; j < 8; ++j){
        const grid = document.createElement("div");
        grid.setAttribute('class','box');
        container.appendChild(grid);
    }
}

function onHover(){
    let divs = document.querySelectorAll('.container .box');
    divs.forEach((div) => {
        div.addEventListener('mouseover',function(e){
            e.target.setAttribute('style', 'background: black');
        })
    })
}
onHover();
