//function that will display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
function solve()
{
    let a = document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value=b
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}
console.log(val);