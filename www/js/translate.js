function translation(query, textAreaLyric) {
    try{
        let translate = query.mus[0].translate[0].text;
        let translateBtn = document.getElementById("translate-btn");

        translateBtn.onclick = () =>{
            textAreaLyric.innerHTML = 'TRADUÇÃO\n\n' + translate;
        }
    }catch(error){
        false;
    }
}