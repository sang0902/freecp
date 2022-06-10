if( 5+5 ===10 ) {
    console.log('정답')
} else {
    정답
} 
// VM969:2 정답
undefined


if( 5+5 ===10 ) {
    console.log('정답')
} else {
    정답
}    
// VM974:2 정답
undefined

if( 5+5 ===10 ) {
    console.log('정답')
} else {
    console.log('오답')
}



if(false ) {
    console.log('정답')
} else {
    console.log('오답')
}
// VM1149:4 오답
undefined


let a = 1
undefined
let b = 2
undefined
if(a === b ){
    console.log('정답')
} else {
    console.log('오답')
}
// VM1680:4 오답




// -----------------------

if (profile.age >= 20 ) {
    "성인입니다"
} else if ( profile.age >= 8 ) {
    "학생입니다"
} else if(profile.age >= 0) {
    "어린이입니다"
} else {
    console('다시 입력해주세요.')
}



const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}






// ---------------------------------------

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]

for(let x = 0; x < persons.length; x++) {
    if(persons[x].age >= 19){
        console.log(`${persons[x].name} 님은 ${persons[x].age}세로, 성인입니다`)
    } else {
         console.log(`${persons[x].name} 님은 ${persons[x].age}세로, 미성년자입니다`)
    }
}




// -----------------------------------------------

const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]


for ( let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}

// VM608:3 1 레드향
// VM608:3 2 샤인머스켓
// VM608:3 3 산청딸기
// VM608:3 4 한라봉
// VM608:3 5 사과
// VM608:3 6 애플망고
// VM608:3 7 딸기
// VM608:3 8 천혜향
// VM608:3 9 과일선물세트
// VM608:3 10 귤