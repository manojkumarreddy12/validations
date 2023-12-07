function cube(){
    // Get the data from id1 and assign to a variable
    var num=document.getElementById('id1').value
    //Validate num
    if(num == ""){
        //alert('n value should not be empty')
        document.getElementById('span1').innerHTML='*n value should not be empty'
        return false
    }
    else{
        var cube=eval(num*num*num)
        alert(cube)
        return true
    }
}
function erasedata(){
    var result=confirm('Are you sure to clear?')
    if(result == true){
        return true
    }
    else{
        return false
    }
}
