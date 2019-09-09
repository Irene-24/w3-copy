const readMoreBtns = document.querySelectorAll('.read-more');
const menu = document.querySelector('.dropDwn span');
const toggleGrid = document.querySelector('.toggleGrid');
const toggleSideBarBtn = document.querySelector('.toggle-side');
const sideBar =  document.querySelector('.ext-links');
let gridCollapsed = true;

readMoreBtns.forEach( btn => btn.addEventListener('click',showMore) );
menu.addEventListener('click',showMore);
toggleGrid.addEventListener('click',showGrid);
toggleSideBarBtn.addEventListener('click',toggleSideBar);

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

let targetPos = 0;
let currentPosition = 0;
let links = document.querySelectorAll('.smooth-scroll');
let main = document.querySelector('main');
const animateTime = 900;

links.forEach(btn => btn.addEventListener("click", Scroller));

function Scroller(e) 
{
   
    targetPos = document.getElementById(e.target.hash.substr(1)).offsetTop;
    currentPosition = getYdistance();
    let diff = currentPosition - targetPos;

    main.classList.add('scrolling');   

    if (diff != 0) 
    {
        main.style.transform = "translate(0, " + diff + "px)";      

    }

    window.setTimeout(function () 
    {
        main.classList.remove('scrolling');
        main.style.cssText = null;      
        window.scrollTo(0, targetPos); //to actually scroll

    }, animateTime);
	 
    e.preventDefault();

}

function getYdistance() 
{
    let yScroll = 0;

    if (window.pageYOffset) 
    {
        yScroll = window.pageYOffset;
    }

    else if (document.documentElement && document.documentElement.scrollTop) 
    {
        yScroll = document.documentElement.scrollTop;        
    }
    
    else if (document.body) 
    {
        yScroll = document.body.scrollTop;    
    }
    return yScroll;

}

function toggleSideBar(e)
{
    e.preventDefault();
    const target = e.target;
    
    if( [...sideBar.classList].indexOf('open') > -1 )
    {
         sideBar.classList.remove('open');
         target.innerHTML = "&#xe01f;"
         target.classList.remove('slide')
    }
    else
    {
        sideBar.classList.add('open');
        target.innerHTML = "&#xe020;"
        target.classList.add('slide')
    }
    
}