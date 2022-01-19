const qString = window.location.search;

const urlParams = new URLSearchParams(qString);

if (urlParams.has('q')){
    const searchQuery = urlParams.get('q');

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        let results = Array.from(this.responseXML.getElementsByClassName('result'))
    }
}