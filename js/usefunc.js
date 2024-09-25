// take input id
// donation and history section hide and show function start here
function elementshowandhide(idfirst,idsecond){
    document.getElementById(idfirst).classList.add('hidden');
    document.getElementById(idsecond).classList.add('hidden');
    

    document.getElementById(idfirst).classList.remove('hidden');

}
// donation and history section hide and show function end here


// input value get function start here
function inputvalueTakeId(id){
    const InputId = parseFloat(document.getElementById(id).value);

    return InputId;
}
// input value get function end here

// textvalue get function start here
function textvalueInput(id){
    const InputId = parseFloat(document.getElementById(id).innerText);

    return InputId;
}
// textvalue get function end here

function textvalueonly(id){
    const InputId = document.getElementById(id).innerText;

    return InputId;
}


// addition calculatio function here
function additionfunc(first,second){
    const calculate = first + second;
    return calculate;
}
// addition calculatio function here

// subtraction code start here
function subtractionfunc(first,second){
    const calculate = first - second;
    return calculate;
}
// subtraction code end here