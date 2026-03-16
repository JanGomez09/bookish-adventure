function goCheck(){
    window.location.href = "test2.html";
}

function checker(room){

    const clses = JSON.parse(localStorage.getItem("cls")) || {};

    const map = {
        1:"cls1", 2:"cls2", 3:"cls3", 4:"cls4", 5:"cls5", 6:"cls6",
        7:"cls19", 8:"lab1", 9:"lab4", 10:"lab5",
        11:"cls7", 12:"cls8", 13:"cls9", 14:"cls10", 15:"cls12",
        16:"cls13", 17:"cls15", 18:"cls16", 19:"cls17", 20:"cls18",
        21:"wsh1", 22:"wsh2", 23:"wsh3", 24:"wsh4",
        25:"wsh6", 26:"wsh7", 27:"wsh8", 28:"wsh9", 29:"wsh10"
    };

    const key = map[room];

    if(clses[key]){
        document.getElementById("check").textContent = "Disponible";
    }else{
        document.getElementById("check").textContent = "Ocupada";
    }
}


/* 🔹 vuelve a leer los datos cuando la página reaparece */
window.addEventListener("pageshow", () => {
    checker(1); // o el aula que estés mostrando
});