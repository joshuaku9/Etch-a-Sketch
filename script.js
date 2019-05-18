
const container = document.querySelector('.container');

function createGrid(numGrid){
    for(let i = 0; i < numGrid * numGrid; ++i){
        let grid = document.createElement("div");
        grid.setAttribute('class','box');
        container.appendChild(grid);
    }
    container.setAttribute('style', 
        'grid: repeat(' + numGrid + ',auto) / repeat(' + numGrid + ',auto)');
    onHover();
}

function onHover(){
    let divs = document.querySelectorAll('.container .box');
    divs.forEach((div) => {
        div.addEventListener('mouseover',function(e){
            e.target.setAttribute('style', 'background: black');
        })
    })
}
createGrid(16);
onHover();
const clearButton=document.querySelector('#clearBtn');

clearButton.addEventListener('click',(e)=>{
   let num=window.prompt("Enter desired number for the grid");
   if(isNaN(num) || num==null || num== "" || num.trim() == "")
   {
       alert("You didn't enter a number. Please enter number")
   }
   else{
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        createGrid(num);  
    } 
})
