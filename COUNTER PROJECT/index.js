let count = 0
function ADD() { 
    let A = count++
    document.getElementById("counterValue").innerHTML = `${A}`
    if(A>0){
        document.getElementById("counterValue").style.color = "green"
    }
 }
 function Subtract() { 
    let B = count--
    document.getElementById("counterValue").innerHTML = `${B}`
    if (B < 0) {
        document.getElementById("counterValue").style.color = "red"
    }
}