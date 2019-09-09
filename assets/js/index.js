const readMoreBtns = document.querySelectorAll('.read-more');
const menu = document.querySelector('.dropDwn span');
const toggleGrid = document.querySelector('.toggleGrid');
let gridCollapsed = true;

readMoreBtns.forEach( btn => btn.addEventListener('click',showMore) );
menu.addEventListener('click',showMore);
toggleGrid.addEventListener('click',showGrid);

function showMore(e)
{
    e.preventDefault();
    
    let target = e.target;
    if([...target.classList].indexOf('material-icons') > -1)
    {
        target = target.parentElement;
    }
    const hidden = target.nextElementSibling;
    console.log(hidden);
    
    const classList = [...hidden.classList];

    if(classList.indexOf('isVisibile') > -1)
    {
        hidden.classList.remove('isVisibile');
        if( !([...hidden.classList].indexOf('menu') > -1) )
        {
            target.innerHTML = `Read more <i class="material-icons"> &#xe5c5; </i>`;
        }
       
    }
    else
    {
        hidden.classList.add('isVisibile');
        if( !([...hidden.classList].indexOf('menu') > -1) )
        {          
            target.innerHTML = `Hide <i class="material-icons"> &#xe5c7; </i>`;
        }
       
    }
}

function showGrid(e)
{
    e.preventDefault();
    const target = e.target;

    const hiddenCards = document.querySelectorAll('.toggleCards');    

    hiddenCards.forEach( card => card.classList.toggle('hide-card') );

    if(gridCollapsed)
    {
        target.innerHTML = "Collapse";
        gridCollapsed = false;
    }
    else
    {
        target.innerHTML = "View all";
        gridCollapsed = true;
    }

    

    
}