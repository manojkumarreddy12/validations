function square(){
    // Get the data from id1 and assign to a variable
    var a=document.getElementById('id1').value
    //validate a
    if(a == ""){
        //alert('a should not be empty')
        document.getElementById('div1').innerHTML='*a should not be empty'
        return false
    }
    // Get the data from id2 and assign to b variable
    var b=document.getElementById('id2').value
    //validate b
    if(b == ""){
        //alert('b should not be empty')
        document.getElementById('div1').innerHTML='*b should not be empty'
        return false
    }
    else{
        var result=eval(a*a)+(b*b)+ 2*(a*b);
        alert(result)
        return true
    }
}
function erasedata(){
    var result=confirm('Are you sure to clear')
    if(result == true){
        return true
    }
    else{
        return false
    }
}