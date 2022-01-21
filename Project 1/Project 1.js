console.log("active");
var numbers = "";
let regex = /\d+/g;

let paragraph = document.getElementsByTagName('p');
let span = document.getElementsByTagName('span');
for (elt of paragraph) {
    patternExtract(elt);
}
for (elt of span) {
    patternExtract(elt);
}

alert(numbers);

function patternExtract(elt) {
    elt.style['color'] = '#ff0000';



    let pattern = elt.textContent.match(regex);
    if (pattern != null) {
        elt.style['color'] = '#00ff00';
        for (char of pattern) {
            let pattern2 = char.match(regex);
            if (pattern2 != null) {
                numbers += pattern2 + ", ";
                pattern2 = null;
                //break;
            }
        }
    }
}