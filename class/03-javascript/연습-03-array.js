// 3번

let email = 'codecampe@gmail.com'
undefined
email
'codecampe@gmail.com'
email.includes("@")
true
email,split("@")
// split 지정된 문자기준으로 배열 분리
email.split("@")
// (2) ['codecampe', 'gmail.com']
let userMail = email.split("@")
// undefined
let userMail = email.split("@")[0]
undefined
userMail
'codecampe'
let company = email.split("@")[1]
undefined
company
'gmail.com'
let maskingmail = []
undefined
maskingmail.push(userMail[0])
1
maskingmail.push(userMail[1])
2
maskingmail.push(userMail[2])
3
maskingmail.push(userMail[3])
4
maskingmail
(4) ['c', 'o', 'd', 'e']
maskingmail.push("*")
5
maskingmail.push("*")
6
maskingmail.push("*")
7
maskingmail.push("*")
8
maskingmail
(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join("")
'code****'
maskingmail.join("")+"@"+company
'code****@gmail.com'
email
'codecampe@gmail.com'


