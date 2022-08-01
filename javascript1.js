let flag=0
let x=0
function displayontextbox(val){
        document.getElementById("displaytext").value=document.getElementById("displaytext").value+val
     
}
function addition(){
         x=parseInt(document.getElementById("displaytext").value)
        document.getElementById("displaytext").value=''
        flag=1
}
function substraction(){
        x=parseInt(document.getElementById("displaytext").value)
        document.getElementById("displaytext").value=''
        flag=2
}
function multiplication(){
        x=parseInt(document.getElementById("displaytext").value)
        document.getElementById("displaytext").value=''
        flag=3
}
function division(){
        x=parseInt(document.getElementById("displaytext").value)
        document.getElementById("displaytext").value=''
        flag=4
}
function del(){
 str=document.getElementById("displaytext").value
 document.getElementById("displaytext").value=str.substring(0,str.length-1)
}
function equals(){
        if(flag==1){
                document.getElementById("displaytext").value=x+parseInt(document.getElementById("displaytext").value)
        }
        else if(flag==2){
                document.getElementById("displaytext").value=x-parseInt(document.getElementById("displaytext").value)
        }
        else if(flag==3){
                document.getElementById("displaytext").value=x*parseInt(document.getElementById("displaytext").value)
        }
        else if(flag==4){
                document.getElementById("displaytext").value=x/parseInt(document.getElementById("displaytext").value)
        }
        flag=0
}
