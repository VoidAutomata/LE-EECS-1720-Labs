const qString = window.location.search;

const urlParams = new URLSearchParams(qString);

if (urlParams.has('q')){
    const searchQuery = urlParams.get('q');

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        let results = Array.from(this.responseXML.getElementsByClassName('result')).map(result => result.getElementsByClassName('result__a')[0].href);
        results = results.filter(result => !result.startsWith('https://duckduckgo.com/y.js'));
        applyResults(results);
    }

    xhr.onerror = function (){
        console.log("an error occured");
    }
}