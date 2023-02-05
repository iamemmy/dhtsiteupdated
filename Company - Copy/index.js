// const navbar = document.querySelector('.navitems');
// const toggle = document.querySelector('.nav-toggle');
// const links = document.querySelectorAll('#navlink');

// toggle.onclick = function(){
//    if ( navbar.style.top != '75px') {
//     navbar.style.top = '75px'
//     setTimeout(()=>{ navbar.style.zIndex = '999'},700)
//    }else{
//     navbar.style.top = '-350px'
//     navbar.style.zIndex = '-1'

//    }
//    links.forEach(link =>{
//     link.style.visibility = 'hidden'
//     setTimeout(()=>{
//         link.style.visibility = 'visible'
//     }, 350)
//    })
// }

let toggleButton = document.querySelector('.toggle--button')
let navListContainer = document.querySelector('.nav--list')
let body = document.querySelector('body')

toggleButton.onclick = function(){
    if ( navListContainer.style.left != '0px') {
        navListContainer.style.left = '0px'
        navListContainer.style.zIndex = '999'
        setTimeout(function(){
            toggleButton.classList.remove('fa-bars');
            toggleButton.classList.add('fa-times');
        },1000)

        body.style.overflowY = 'hidden'
       }else{
        navListContainer.style.left = '-70vw'
        setTimeout(function(){
            toggleButton.classList.remove('fa-times');
            toggleButton.classList.add('fa-bars');
        },400)

        body.style.overflowY = 'scroll'
       }
}

