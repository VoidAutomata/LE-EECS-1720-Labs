console.log("active");
var numbers = "";

let paragraph = document.getElementsByTagName('p');
let span = document.getElementsByTagName('span');
for (elt of paragraph) {
    patternExtract(elt);
}
for (elt of span){
    patternExtract(elt);
}

alert(numbers);

function patternExtract (elt){
    elt.style['color'] = '#ff0000';


    for (i of elt.textContent) {
        let pattern = elt.textContent.match(/\d+/g);
        if (pattern != null) {
            elt.style['color'] = '#00ff00';
            for (char of pattern){
                let pattern2 = char.match(/\d+/g);
                if (pattern2 != null){
                    numbers += pattern2 + ", ";
                }
            }
        }
    }
}