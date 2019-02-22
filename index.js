function botao (num) {
    let salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
}

function reset () {
    document.getElementsByName('visor').value = '';
}

function mostrarResultado () {
    document.calc.visor.value = eval(document.calc.visor.value);
}