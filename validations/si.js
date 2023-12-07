function si(){
    // Get the data from id1 and assign to p variable
    var p=document.getElementById('id1').value
    //validate p
    if(p == ""){
        alert('P should not be empty')
        return false
    }
    // Get the data from id2 and assign to t variable
    var t=document.getElementById('id2').value
    //validate t
    if(t == ""){
        alert('t should not be empty')
        return false
    }
    // Get the data from id3 and assign to r variable
    var r=document.getElementById('id3').value
    //validate r
    if(r == ""){
        alert('r should not be empty')
        return false
    }
    else{
        var si=eval(p*t*r/100)
    alert(si)
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