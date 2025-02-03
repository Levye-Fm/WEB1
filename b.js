function validar() {
    // let re = new RegExp(/^[a-z, A-Z]{2}[0-9][A-Z, a-z]\.[A-Z, a-z][0-9][A-Z, a-z]\-[aeiouAEIOU]{2}[0-9][^aeiouAEIOU]\$ /);

    let re = new RegExp(/^[a-z, A-Z]{2}[0-9][A-Z, a-z]\.[A-Z, a-z][0-9][A-Z, a-z]\-[aeiouAEIOU]{2}[0-9][^aeiouAEIOU]\$$/);

    const str = document.getElementById('ipt1').value;
    const lbl = document.getElementById('validante');

    if (re.test(str)) {
        lbl.innerHTML = "validado";
    }
    else {
        lbl.innerHTML = "nao validado"
    }
}