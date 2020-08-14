let box = document.querySelector(".box");
let action = "";
let input = box.querySelector("input");
box.onclick = function(event) {
    buttonClick(event);
};
let arrDisp = [];
let arrArg = [];
let mrc = "";

function buttonClick(event) {
    let target = event.target;
    if (target.value == undefined) {
        return;
    }
    if (target.value == "*" || target.value == "/" || target.value == "-" || target.value == "+") {
        arrArg.push(input.value);
        let result = arrArg.join('');
        console.log(arrDisp);
        console.log(arrArg);
        input.setAttribute('value', eval(result));
        arrDisp = [];
        arrArg = [];
        arrArg.push(eval(result));
        arrArg.push(target.value);
        let selected = box.querySelectorAll('.active');
        for (let elem of selected) {
            elem.classList.remove('active');
        }
        return;
    };
    if (target.value == "0" || target.value == "1" || target.value == "2" || target.value == "3" || target.value == "4" || target.value == "5" || target.value == "6" || target.value == "7" || target.value == "8" || target.value == "9" || target.value == ".") {
        arrDisp.push(target.value);
        target.classList.add('active');
        input.setAttribute('value', arrDisp.join(''));
    }
    if (target.value == "=") {
        arrArg.push(arrDisp.join(''));
        let result = arrArg.join('');
        input.setAttribute('value', eval(result));
        console.log(arrArg);
        console.log('result=' + eval(result));
        arrDisp = [];
        arrArg = [];
    };
    if (target.value == "C") {
        let result = "0";
        input.setAttribute('value', result);
        arrDisp = [];
        arrArg = [];
    };
    if (target.value == "m+") {
        if (document.querySelector(".memory")) {
            return;
        }
        mrc = input.value;
        let memory = document.createElement("p");
        memory.className = 'memory';
        memory.style.position = "absolute";
        input.style.position = "absolute";
        memory.style.zIndex = "100";
        input.style.zIndex = "1";
        memory.style.paddingLeft = "5px";
        memory.innerHTML = "m";
        document.querySelector(".display").prepend(memory);
    };
    if (target.value == "m-") {
        if (mrc == "") { return };
        mrc = "";
        document.querySelector(".memory").remove();
    }

    if (target.value == "mrc") {
        let result = mrc;
        if (result == "") { return };
        input.setAttribute('value', result);
        arrDisp.push(result);
    }
}
document.onkeypress = function(event) {
    // console.log(event);
    if (event.charCode == "42" || event.charCode == "92" || event.charCode == "45" || event.charCode == "43") {

        arrArg.push(input.value);
        let result = arrArg.join('');
        console.log(arrDisp);
        console.log(arrArg);
        input.setAttribute('value', eval(result));
        arrDisp = [];
        arrArg = [];
        arrArg.push(eval(result));
        if (event.charCode == "92") {
            arrArg.push('/');
        } else {
            arrArg.push(event.key);
        }


        let selected = box.querySelectorAll('.active');
        for (let elem of selected) {
            elem.classList.remove('active');
        }
        return;
    };
    if (event.charCode == "48" || event.charCode == "49" || event.charCode == "50" || event.charCode == "51" || event.charCode == "52" || event.charCode == "53" || event.charCode == "54" || event.charCode == "55" || event.charCode == "56" || event.charCode == "57" || event.charCode == "46") {
        arrDisp.push(event.key);
        input.setAttribute('value', arrDisp.join(''));
        console.log(arrDisp);
        console.log(arrArg);
    };
    if (event.keyCode == "13") {
        arrArg.push(arrDisp.join(''));
        let result = arrArg.join('');
        input.setAttribute('value', eval(result));
        console.log(arrArg);
        console.log('result=' + eval(result));
        arrDisp = [];
        arrArg = [];
    };
    if (event.charCode == "99") {
        let result = "0";
        input.setAttribute('value', result);
        arrDisp = [];
        arrArg = [];
    };
    if (event.charCode == "119") {
        if (document.querySelector(".memory")) {
            return;
        }
        mrc = input.value;
        let memory = document.createElement("p");
        memory.className = 'memory';
        memory.style.position = "absolute";
        input.style.position = "absolute";
        memory.style.zIndex = "100";
        input.style.zIndex = "1";
        memory.style.paddingLeft = "5px";
        memory.innerHTML = "m";
        document.querySelector(".display").prepend(memory);
    };
    if (event.charCode == "101") {
        if (mrc == "") { return };
        mrc = "";
        document.querySelector(".memory").remove();
    }

    if (event.charCode == "113") {
        let result = mrc;
        if (result == "") { return };
        input.setAttribute('value', result);
        arrDisp.push(result);
    };
}