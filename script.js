function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '/images/foto-bebe-m.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', '/images/foto-jovem-m.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', '/images/foto-adulto-m.jpg');
            } else {
                img.setAttribute('src', '/images/foto-idoso-m.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '/images/foto-bebe-f.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', '/images/foto-jovem-f.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', '/images/foto-adulto-f.jpg');
            } else {
                img.setAttribute('src', '/images/foto-idoso-f.jpg');
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}