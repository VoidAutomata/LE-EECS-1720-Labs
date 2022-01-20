console.log("active");

let paragraph = document.getElementsByTagName('p');
for (elt of paragraph){
    let pattern = elt.textContent.match(/\d+/g);
    if(pattern != null){
        elt.style['color'] = '#00ff00';
    }
    else {elt.style['color'] = '#ff0000';}
}