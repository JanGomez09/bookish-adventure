// pagina del admin

let clses = JSON.parse(localStorage.getItem("cls")) || {
  cls1:false, cls2:false, cls3:false, cls4:false, cls5:false, cls6:false,
  cls19:false, lab1:false, lab4:false, lab5:false,
  cls7:false, cls8:false, cls9:false, cls10:false, cls12:false,
  cls13:false, cls15:false, cls16:false, cls17:false, cls18:false,
  wsh1:false, wsh2:false, wsh3:false, wsh4:false, wsh6:false,
  wsh7:false, wsh8:false, wsh9:false, wsh10:false
};

function goCheck(){
    window.location.href = "index.html";
}

function save(){
    localStorage.setItem("cls", JSON.stringify(clses));
}

function changer(room){

    const map = {
        1:"cls1", 2:"cls2", 3:"cls3", 4:"cls4", 5:"cls5", 6:"cls6",
        7:"cls19", 8:"lab1", 9:"lab4", 10:"lab5",
        11:"cls7", 12:"cls8", 13:"cls9", 14:"cls10", 15:"cls12",
        16:"cls13", 17:"cls15", 18:"cls16", 19:"cls17", 20:"cls18",
        21:"wsh1", 22:"wsh2", 23:"wsh3", 24:"wsh4",
        25:"wsh6", 26:"wsh7", 27:"wsh8", 28:"wsh9", 29:"wsh10"
    };

    const key = map[room];

    if(!key) return;

    clses[key] = !clses[key];

    console.log(key, clses[key]);

    save();
}