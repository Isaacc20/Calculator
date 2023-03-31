// function add() {
//     let value1 = document.getElementById('nob').value
//     let value2 = document.getElementById('nob2').value
//     let screen = document.getElementById('go')
//     let result = Number(nob) + Number(nob2)
//     screen.innerHTML = result;
// }
// var nid;
// var nod;
// var plus = nid + nod;
// var minus = nid - nod;
// var times = nid * nod;
// var slash = nid / nod;

// function nobe() {
//     let nid = document.getElementById('nob') .Value;
// }
// function nober() {
//     let nod = document.getElementById('nob2') .Value;
// }
// function add() {
//     document.getElementById('go') .innerHTML = plus;
// }

function light() {
    document.getElementById('pad').style.backgroundColor = 'aqua'
    document.getElementById('body').style.backgroundColor = 'grey'
}
function dark() {
    document.getElementById('pad').style.backgroundColor = 'darkslateblue'
    document.getElementById('body').style.backgroundColor = 'black'
}
function add() {
    let nob = document.getElementById("nob").value
    let nob2 = document.getElementById("nob2").value
    let result = Number(nob) + Number(nob2)
    document.getElementById("go").innerHTML = result;
    document.getElementById('sign').innerHTML = '+'
}
function minus() {
    let nob = document.getElementById("nob").value
    let nob2 = document.getElementById("nob2").value
    let result = Number(nob) - Number(nob2)
    document.getElementById("go").innerHTML = result;
    document.getElementById('sign').innerHTML = '-'
}
function cross() {
    let nob = document.getElementById("nob").value
    let nob2 = document.getElementById("nob2").value
    let result = Number(nob) * Number(nob2)
    document.getElementById("go").innerHTML = result;
    document.getElementById('sign').innerHTML = '*'
}
function divide() {
    let nob = document.getElementById("nob").value
    let nob2 = document.getElementById("nob2").value
    let result = Number(nob) / Number(nob2)
    document.getElementById("go").innerHTML = result;
    document.getElementById('sign').innerHTML = '/'
}
// let inp = document.getElementById('nob').innerHTML = ;
// let inv = document.getElementById('nob2').innerHTML = ;

// function add() {
//     document.getElementById('go').innerHTML = inp + inv;
// }