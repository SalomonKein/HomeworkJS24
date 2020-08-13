// let notification = document.createElement('span');
// document.onkeypress = function(event) {
//     let selected = document.querySelectorAll('.active');

//     for (let elem of selected) {
//         elem.classList.remove('active');
//     }
//     if (event.charCode == "13" || event.charCode == "115" || event.charCode == "101" || event.charCode == "111" || event.charCode == "110" || event.charCode == "108" || event.charCode == "122") {
//         let activeBtn = document.getElementById(`${event.charCode}`);
//         activeBtn.classList.add('active')
//         activeBtn.innerHTML = `${event.key}`
//     }
//     if (event.charCode == "83" || event.charCode == "69" || event.charCode == "79" || event.charCode == "78" || event.charCode == "76" || event.charCode == "90") {
//         let activeBtn = document.getElementById(`${(event.charCode + 32)}`);
//         activeBtn.classList.add('active')
//         activeBtn.innerHTML = `${event.key}`
//     }


// }

let box = document.querySelector(".box");
let action = "";
let input = box.querySelector("input");

box.onclick = function(event) {
    buttonClick(event);

};
let arrDisp = [];
let arrArg = [];

function buttonClick(event) {

    // let firstNum = box.querySelector(".active");


    let target = event.target;

    if (target.value == undefined) {

        return;
    }
    if (target.value == "*" || target.value == "/" || target.value == "-" || target.value == "+") {
        arrArg.push(arrDisp.join(''));
        arrDisp = [];
        arrArg.push(target.value);
        
        let selected = box.querySelectorAll('.active');
        for (let elem of selected) {
            elem.classList.remove('active');
        }
        return;
    };
    let a = "";
    let b = "";

  
    // let result = input.setAttribute('value', target.value);
    // console.log(target.classList.contains("active"))
    if (target.value == "0" || target.value == "1" || target.value == "2" || target.value == "3" || target.value == "4" || target.value == "5" || target.value == "6" || target.value == "7" || target.value == "8" || target.value == "9" || target.value == ".") {
        // arrArg.push(arrDisp.join(''));
        
        arrDisp.push(target.value);
        target.classList.add('active');
        input.setAttribute('value', arrDisp.join(''));
    } else {
        b = a + target.value;


    }

    if (target.value == "=") {
        arrArg.push(arrDisp.join(''));
        // arrArg.push(target.value);
        
        let result = arrArg.join('');
        // eval(result);
        input.setAttribute('value', eval(result));
        console.log(arrArg);
        console.log('result=' + eval(result));
        arrDisp = [];
        arrArg = [];
        // arrDisp.push(eval(result));
    };
    if (target.value == "C") {
        let result = "0";
        input.setAttribute('value', result);
        arrDisp = [];
        arrArg = [];
    };

    console.log(arrDisp.join(''));
    
}