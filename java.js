const gridContainer=document.querySelector('.grid-container');
let eventhandlerone,eventhandlertwo;
function createGrid()
{
gridContainer.innerHTML='';
const m= document.getElementById('sizeInput').value;
if(m>100 || m<1)
{
    alert("Please enter a suitable value between 1 and 100.");
        return;
}
for(let i=0;i<m;i++)
{
    const gridItem=document.createElement('div');
    gridItem.classList.add('grid-Item');
    for(let j=0;j<m;j++)
    {
        const rowItem=document.createElement('div');
        rowItem.classList.add('row-items');
        gridItem.appendChild(rowItem);
         const enter=function ()
        {
        rowItem.style.backgroundColor='violet';
        }
        const leave =function ()
        {
        rowItem.style.backgroundColor = 'blue';
        }
        
        rowItem.addEventListener('mouseenter',enter);
        rowItem.addEventListener('mouseleave',leave);
        
    }
    gridContainer.appendChild(gridItem);
}
eventhandlerone=enter;
eventhandlertwo=leave;
}

function removeprops()
{
    const myelement=gridContainer.querySelectorAll('.grid-Item');
    myelement.forEach((griditem) =>
    {
    const myrowitem=griditem.querySelectorAll('.row-items');
    myrowitem.forEach((rowitem) =>
    {
        rowitem.style.backgroundColor='white';
    });
    });    
}


