// pagina de los usuarios

function goCheck(){
    window.location.href = "test2.html";
}



function checker(room){

    const clJSON = localStorage.getItem("cls");
    const clses = JSON.parse(clJSON);
   


    
    if (clses.cls1) {
        document.getElementById("check").textContent = "Disponible";
    } else{
        document.getElementById("check").textContent = "Ocupada";  
    }
}