function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('textano')
    var res = window.document.getElementById('resultado')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!")
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('src', 'criançaM.jpg')
        if(fsex[1].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeH.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemH.jpg')
            }else if ( idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoH.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'VelhoH.jpg')
            }
        } else if (fsex[0].checked){
            console.log('else')
             
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeM.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemM.jpg')
            }else if ( idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoM.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'VelhoM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}