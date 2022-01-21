function getLyrics() {
    let music = document.getElementById('music').value;
    let artist = document.getElementById('artist').value;

    /*music = 'One';
    artist = 'U2';*/

    let URL = "https://api.vagalume.com.br/search.php?art=" + String(artist) + "&mus=" + String(music) + "&apikey={9790636438dcf6fe0cb11ded844d9786}"
    
    try{
        var request = new XMLHttpRequest();
        request.open('GET', URL, true);
        request.send();
    }catch(error){
        console.log('Erro: >' + error);
    }
    
    request.onload = function() {
        if(request.readyState == 4 && request.status == 200){
            try{
                let query = JSON.parse(request.response);
                let title = query.mus[0].name;
                let artistMusic = query.art.name;
                let urlMusic = query.mus[0].url;
                let lyrics = query.mus[0].text;
                var text = title + "\n" + artistMusic + "\n\n" + urlMusic + "\n\n" +lyrics;
                
                let searchMusic = document.getElementById("searchMusic");
                searchMusic.classList.toggle('move');
                
                if(document.body.contains(document.getElementById("text-area-lyric")) == false){
                    let textArea = document.createElement('textarea');
                    textArea.id = 'text-area-lyric';
                    textArea.className = 'form-control';
                    textArea.rows = 4;
                    textArea.disabled  = true;
                
                    document.getElementById("form-lyric").appendChild(textArea);
                }
                
                document.getElementById('text-area-lyric').innerHTML = text;

                save(text, title);
            }catch(error){
                let alertErro = document.getElementById("alert-erro");
                let searchMusic = document.getElementsByClassName("search-music")[0];
                console.log(searchMusic.offsetTop);
                alertErro.style.opacity = 1;

                setTimeout(function () {
                    alertErro.style.opacity = 0;
                }, 3000);

            }
        }
    }
}

function initialize() {
    let menuBtn = document.getElementById("menu-btn");
    let sidebar = document.getElementById("sidebar");
    let logo = document.getElementById("logo");
    let aboutBtn = document.getElementById("about-btn");
    let fieldArtist = document.getElementById("artist");
    let fieldMusic = document.getElementById("music");
    let searchBtn = document.getElementById("search-btn");
    
    menuBtn.onclick = function () {
        sidebar.classList.toggle('active');
    };
    aboutBtn.onclick = function () {
        alert("PyLetra\nAqui você encontra as letras das suas músicas favoritas\n\n"
        + "Desenvolvido por Pedro Paulo | Technetwork");
    }
    
    // EXCLUIR 
    //sidebar.classList.toggle('active');
    logo.classList.toggle('fade');
    fieldArtist.classList.toggle('zoom');
    fieldMusic.classList.toggle('zoom');
    searchBtn.classList.toggle('opacity');

    //getLyrics();
}

window.onload = initialize;