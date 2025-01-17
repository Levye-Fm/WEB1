function pereca(x) {
    var mesaInfo = document.getElementById('mesaInfo'+x);

    mesaInfo.style.display = 'block';
    mesaInfo.style.top = '100px';
    
}

function closes(x) {
    var mesaInfo = document.getElementById('mesaInfo'+x);


    mesaInfo.style.display = 'none';
}

function modar(x) {
    var mesa = document.getElementById('mesa'+x);
    var mosa = document.getElementById('mosa'+x);
    var md = document.getElementById('md'+x);

    if (mosa.innerHTML == "disponivel") {
        mosa.innerHTML = "reservada";
        md.innerHTML = "reservada";
        mesa.style.backgroundColor = '#ffba3b';   
    }
    else if (mosa.innerHTML == 'reservada') {
        mosa.innerHTML = "em uso";
        md.innerHTML = "em uso";
        mesa.style.backgroundColor = '#F44336';
    }
    else {
        mosa.innerHTML = "disponivel";
        md.innerHTML = "disponivel";
        mesa.style.backgroundColor = '#0084ff ';
    }

}