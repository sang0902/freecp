setTimeout( function() { console.log("3초가 지났습니다.") } ,3000)
2
// VM461:1 3초가 지났습니다.
setTimeout( function() { console.log("3초가 지났습니다.") } ,3000)
3
// VM465:1 3초가 지났습니다.
setInterval( function() { console.log("1초") } , 1000)
4
// 42VM702:1 1초


// ---------------------------------------------------

let time = 10 
undefined
setInterval(function(){
    if(time >= 0) { 
        console.log(time)
        time = time - 1
    }
    
},1000)
2

// -----------------------------------------------------

let time = 180



setInterval(function() {

    if(time >= 0) {

        const min = Math.floor( time/60 )
        const sec = String(time % 60).padStart(2,"0")

        console.log(min + ":" + sec)

        time = time - 1 
    }
}
    , 1000)