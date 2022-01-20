console.log("active");

let paragraph = document.getElementsByTagName('p');
for (elt of paragraph){
    elt.style['background-color'] = '#ff0000';
}