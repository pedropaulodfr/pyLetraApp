function copy(textAreaLyric) {
    let copy_btn = document.getElementById("copy-btn");

    copy_btn.onclick = function () {
        let textoTeste = textAreaLyric.innerHTML
        navigator.clipboard.writeText(textAreaLyric.innerHTML);
        alert("Letra copiada para a área de transferência");
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


