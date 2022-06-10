// ------------------------핸드폰
function changeFocus1 () {
    
    const phone1 =  document.getElementById("phone1").value;

    if(phone1.length === 3 ) {
        document.getElementById("phone2").focus()
    }
}

function changeFocus2 () {
    
    const phone2 =  document.getElementById("phone2").value;

    if(phone1.length === 4 ) {
        document.getElementById("phone3").focus()
    }
}


// -----------------------타이머
let isStarted = false

const token = () => {


    if(isStarted === false) {
        // 타이머가 돌고 있지 않다면 => 코드실행
        isStarted = true

        const authNum = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
        document.getElementById("auth").innerText = authNum
        // document.getElementById("auth").style.color = `#` + authNum
        document.getElementById("finish").disabled = false

        let time = 180
        let interval


        interval = setInterval(function() {
            console.log("동작중")
            if(time >= 0) {
                let min = Math.floor( time / 60 )
                let sec = String( time % 60 ).padStart(2,"0")
    
                document.getElementById("countdown").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disable = true   
                isStarted = false
                clearInterval(interval)
            }
        },1000)

    } else {
        // 타이머가 돌고 있다면 => 코드를 실행하지 않음
        console.log("타이머가 이미 동작중입니다.")
    }
}