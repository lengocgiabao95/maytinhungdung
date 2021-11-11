function showAdd() {
    let a=document.getElementById('num1').value;
    let b=document.getElementById('num2').value;
    let c=parseFloat(a)
    let d=parseFloat(b)
    let f=c+d
    document.getElementById("reAdd").innerHTML= "Result Addition :" + f;
}


