
{/* <div class="bubble">5</div> */}

let btm = document.querySelector(".con-btm");
let hit = document.querySelector("#hit");
let timer = document.querySelector("#timer");
let sc = document.querySelector("#score");


let showBubble = ()=>{        
    let cullter = "";
    for(let i = 1; i<=144; i++){
        let rn = Math.floor(Math.random()* 10);
        cullter += `<div class="bubble">${rn}</div>`;
    }

    btm.innerHTML = cullter;

}

let hitrn;
let timmer = 60;
let score = 0;
let bubVal = 0;
let hitFun = ()=>{
    hitrn = Math.floor(Math.random()* 10);
    hit.innerText = hitrn    
}


let TimeFun = ()=>{
// ------------------------------------------
    // timmer--;
    // console.log(timmer);
    // let val = setTimeout(TimeFun,1000);
    
    // if(timmer == 0){
    //     clearTimeout(val);
    // }
// ------------------------------------------


    let val = setInterval(()=>{
        timmer--;
        timer.innerHTML = timmer

        if(timmer == 0){
            clearInterval(val);
            btm.innerHTML = `Game Over: Your Score is: ${score}`

        }
    },1000);

}


let scoreFun = ()=>{
    score += 10;
    sc.innerHTML = score;
}

let bubbleGame = ()=>{

    btm.addEventListener("click",(dets)=>{
        bubVal = +dets.target.innerText;
        // console.log(bubVal);
        if(hitrn === bubVal){            
            scoreFun();
            hitFun();
            showBubble();
        }else{
            
        }
    })

}


showBubble();
hitFun();
TimeFun();
// scoreFun();


bubbleGame();