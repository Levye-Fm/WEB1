function gerar() {
    inpot = document.getElementById('inpot');
    inpot = parseInt(inpot.value);
    var divs = [];
    var div2 = document.getElementById('div2');
    var spn = document.getElementById('spn');
    var erros = document.getElementById('erros');
    var contagem = 0;

    for (let i = 1; i<=inpot; i++) {
        divs[i] = document.createElement('div');
        div2.appendChild(divs[i]);
        divs[i].onclick = function() {
            contagem++;
            erros.innerHTML = ''+contagem;
        }
    }
    const matmat = Math.floor(Math.random() * (inpot - 1 + 1 )) + 1;
    spn.innerHTML = ''+matmat;
    divs[matmat].onclick = function() {
        alert('acertou');
    }

    setInterval(function () {
        for (let i = 1; i<=inpot; i++) {
            divs[i].onclick = function() {
                contagem++;
                erros.innerHTML = ''+contagem;
                }
            }
            const matmat = Math.floor(Math.random() * (inpot - 1 + 1 )) + 1;
            spn.innerHTML = ''+matmat;  
    divs[matmat].onclick = function() {
        alert('acertou');
    }
        }, 10000
    )
}