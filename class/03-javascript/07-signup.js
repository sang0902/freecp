function checkedValidation() {
    const email = document.getElementById("email").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value

    if(email !== "" && pw1 !== "" && pw2 !== "") {
        // 버튼 활성화
        document.getElementById("submit") = false
        document.getElementById("submit").setAttribute("style","background-color: yellow")
    } else {
        // 버튼 비활성화
        document.getElementById("submit").disabled = true
        document.getElementById("submit").setAttribute("style","background-color : none")
    }   
}
