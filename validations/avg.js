function average(){
    // Get the data from id1 and assign to n1 variable
    var n1=document.getElementById('id1').value
    //validate n1
    if(n1==""){
        alert('n1 should not be empty')
    }
    // Get the data from id2 and assign to n2 variable
    var n2=document.getElementById('id2').value
     //validate n2
     if(n2 == ""){
        alert('n2 should not be empty')
    }
    // Get the data from id3 and assign to n3 variable
    var n3=document.getElementById('id3').value
     //validate n3
     if(n3 == ""){
        alert('n3 should not be empty')
    }
    else{
        var result=eval(n1+n2+n3)/3
        alert(result)
    }   
}
function erasedata(){
    var result=confirm('Are you sure to clear?')
    if(result==true){
     //set the data to id1 as empty string
    document.getElementById('id1').value= ""
     //set the data to id2 as empty string
     document.getElementById('id2').value= ""
     //set the data to id3 as empty string
     document.getElementById('id3').value= ""
    }
}