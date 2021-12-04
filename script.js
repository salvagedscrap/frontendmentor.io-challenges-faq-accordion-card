const acc = document.querySelectorAll('.accordion');



for(let i=0; i<acc.length;i++){
acc[i].addEventListener("click", function(){
    for(let j= 0; j<acc.length;j++){
        acc[j].classList.remove("active");
        if(j!=i){
            acc[j].nextElementSibling.style.maxHeight = null;
        }
    }
    this.classList.add("active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight=null;
    }else{
        panel.style.maxHeight=panel.scrollHeight + "px";
    }
})
}


// acc[i].addEventListener('click',function(){
//     this.classList.toggle('active');


//     for(j=0; j<acc.length; j++){
//         if(j!==i){
//             acc[j].nextElementSibling.style.maxHeight =null;
//         }
//     }

//     let panel =this.nextElementSibling;
    
//     if( panel.style.maxHeight){
//         panel.style.maxHeight = null;
//     } else{

//         panel.style.maxHeight = panel.scrollHeight + "px";

//     }
// })