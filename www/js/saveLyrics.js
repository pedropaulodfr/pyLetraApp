function save(text, music) {
    let storage = window.localStorage;

    let save_btn = document.getElementById("save-btn");

    save_btn.onclick = function () {
        let key = getRandomIntInclusive(0, 10000000000000);
        //storage.setItem(key, text);
        alert("Letra de '" + music + "' salva!")
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }