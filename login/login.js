function validaLogin(event){
    event.preventDefault()

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(!email || !senha){
        alert('È obrigatorio informar email e a senha!')
    }

    console.log(`O usuario é ${email} e a senha é ${senha}`)

    if(email === 'abcdefg' && senha === 'abcdefg'){
        window.location.href = "clientes.html"
    }else{
            alert('O usuario ou senha informados são invalidos!')
        }
    }
