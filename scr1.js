// pagina del admin

const clses = {
    //pabellon 1
  cls1: false,
  cls2: false,
  cls3: false,
  cls4: false,
  cls5: false,
  cls6: false,
//pabellon 2
  cls19: false,
  lab1: false,
  lab4: false,
  lab5: false,
//pabellon 3
  cls7: false,
  cls8: false,
  cls9: false,
  cls10: false,
  cls12: false,
//pabellon 4
  cls13: false,
  cls15: false,
  cls16: false,
  cls17: false,
  cls18: false,
//area tecnica
  wsh1: false,
  wsh2: false,
  wsh3: false,
  wsh4: false,
  wsh6: false,
  wsh7: false,
  wsh8: false,
  wsh9: false,
  wsh10: false
}


function goCheck(){
    window.location.href = "index.html";
}

function changer(room){
    const usJSON = localStorage.getItem("user");
    const user = JSON.parse(usJSON);

    switch(room){
        //pabellon 1
        case 1:
            clses.cls1 = !clses.cls1;
            console.log(clses.cls1);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
        case 2:
            clses.cls2 = !clses.cls2;
            console.log(clses.cls2);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
        case 3:
            clses.cls3 = !clses.cls3;
            console.log(clses.cls3);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
        case 4:
            clses.cls4 = !clses.cls4;
            console.log(clses.cls4);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
        case 5: 
            clses.cls5 = !clses.cls5;
            console.log(clses.cls5);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 6:
            clses.cls6 = !clses.cls6;
            console.log(clses.cls6);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        //pabellon2

        case 7:
            clses.cls19 = !clses.cls19;
            console.log(clses.cls19);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
        case 8:
            clses.lab1 = !clses.lab1;
            console.log(clses.lab1);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 9:
            clses.lab4 = !clses.lab4;
            console.log(clses.lab4);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 10:
            clses.lab5 = !clses.lab5;
            console.log(clses.lab5);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        //pabellon3

        case 11:
            clses.cls7 = !clses.cls7;
            console.log(clses.cls7);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 12:
            clses.cls8 = !clses.cls8;
            console.log(clses.cls8);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 13:
            clses.cls9 = !clses.cls9;
            console.log(clses.cls9);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 14:
            clses.cls10 = !clses.cls10;
            console.log(clses.cls10);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 15:
            clses.cls12 = !clses.cls12;
            console.log(clses.cls12);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        //pabellon4

        case 16:
            clses.cls13 = !clses.cls13;
            console.log(clses.cls13);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 17:
            clses.cls15 = !clses.cls15;
            console.log(clses.cls15);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 18:
            clses.cls16 = !clses.cls16;
            console.log(clses.cls16);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 19:
            clses.cls17 = !clses.cls17;
            console.log(clses.cls17);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 20:
            clses.cls18 = !clses.cls18;
            console.log(clses.cls18);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        //area tecnica

        case 21:
            clses.wsh1 = !clses.wsh1;
            console.log(clses.wsh1);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 22:
            clses.wsh2 = !clses.wsh2;
            console.log(clses.wsh2);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 23:
            clses.wsh3 = !clses.wsh3;
            console.log(clses.wsh3);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 24:
            clses.wsh4 = !clses.wsh4;
            console.log(clses.wsh4);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 25:
            clses.wsh6 = !clses.wsh6;
            console.log(clses.wsh6);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 26:
            clses.wsh7 = !clses.wsh7;
            console.log(clses.wsh7);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 27:
            clses.wsh8 = !clses.wsh8;
            console.log(clses.wsh8);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 28:
            clses.wsh9 = !clses.wsh9;
            console.log(clses.wsh9);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;

        case 29:
            clses.wsh10 = !clses.wsh10;
            console.log(clses.wsh10);
            localStorage.setItem("cls", JSON.stringify(clses));
        break;
    }
}

