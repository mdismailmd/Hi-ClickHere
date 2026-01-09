let para = document.getElementById("para")

let imoji = document.getElementById("imoji")

let btn = document.getElementById("btn")

let image = document.getElementById("image")



btn.addEventListener("click",function(){
    alert("Coutdown Start!")
    
    btn.style="display:none"
let count=5
let minCount=0
let intervalId=setInterval(()=>{
    imoji.innerText=count
    count--
    if(count<minCount){
        image.style="display:block"
        imoji.style="display:none"
        
        
        clearInterval(intervalId)
    }
},1000)

})

