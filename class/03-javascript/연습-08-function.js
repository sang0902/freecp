function hello() {
    alert("안녕하세요")
}

function hello2(userName) {
    console.log(userName + "님 안녕하세요")
}

function hello3(a, b) {
    return `${a}님, ${b}님 환영합니다`
}




// --------------------------------------------

let student = ['철수', '영희', '도우너', '말포이', '도비', '그루트']
undefined
function helloFriend(props) {
    for(let i = 0; i < props.length; i++) {
        console.log(props[i] + '님 반갑습니다.')
    }
}
undefined
helloFriend()
// VM508:2 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
//     at helloFriend (<anonymous>:2:30)
//     at <anonymous>:1:1
// helloFriend @ VM508:2
// (익명) @ VM538:1
helloFriend(student)
VM508:3 철수님 반갑습니다.
VM508:3 영희님 반갑습니다.
VM508:3 도우너님 반갑습니다.
VM508:3 말포이님 반갑습니다.
VM508:3 도비님 반갑습니다.
VM508:3 그루트님 반갑습니다.
undefined