
const container = document.querySelector('.container');

function createGrid(number){
    for(let i = 0; i < number; ++i){
        for(let j = 0; j < number; ++j){
            const grid = document.createElement("div");
            grid.setAttribute('class','box');
            container.appendChild(grid);
        }
    }
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
createGrid(8);
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
