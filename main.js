let btn = document.querySelector('#btnn')
let mod = document.querySelector('#mod')
let title = document.querySelector('#title')
let closes = document.querySelector('#close')
let overly = document.querySelector('#overly')
 



    function addHidden( ){
        mod.classList.add('hidden')
        overly.classList.add('hedden')
    }

function removeHidden() {
    mod.classList.remove('hedden')
    overly.classList.remove('hedden')
}


btn.addEventListener('click',()=>{
    title.classList.remove('hedden')
    overly.classList.remove('hedden')
})

closes.addEventListener('click', ()=>{
    title.classList.add('hedden')
    overly.classList.add('hedden')

})
overly.addEventListener('click', ()=>{
    title.classList.add('hedden')
    overly.classList.add('hedden')

})
document.addEventListener('keydown',(e)=>{
    console.log(e);
    
    if(e.key==='Delete') {
        title. classList.add('hedden')
        overly.classList.add('hedden')
    }else{
        
    }
})


