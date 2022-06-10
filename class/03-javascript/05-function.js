const token = () => {
    const authNum = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
    document.getElementById("auth").innerText = authNum
    document.getElementById("auth").style.color = `#` + authNum
    }


