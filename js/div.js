 function showDiv() {
    let a=document.getElementById('num1').value;
    let b=document.getElementById('num2').value;
    let c=parseFloat(a);
    let d=parseFloat(b);
    let e=c/d;
    document.getElementById("reDiv").innerHTML= "Result Division :" + e;
}