
window.addEventListener(
    'load',
    main_function
)
function main_function(){
    console.log("Page is ready");
    square.addEventListener(
            "click",
            (event)=>{
                najal(event)
                if(event.clientX >= 0 && event.clientX <=100 && event.clientY >= 0 && event.clientY <=100)
                {
                    square.style.background = 'lightblue'
                }
                else if(event.clientX > 100 && event.clientX <=200 && event.clientY >= 0 && event.clientY <=100){
                    square.style.background = 'lightgreen'
                }
                else if(event.clientX >= 0 && event.clientX <=100 && event.clientY > 100 && event.clientY <=200){
                    square.style.background = 'lightpink'
                }
                else if(event.clientX > 100 && event.clientX <=200 && event.clientY > 100 && event.clientY <=200){
                    square.style.background = 'lightyellow'
                }
                
            }
        )
}

function najal(kuda){
    console.log(kuda.clientX, kuda.clientY);
}