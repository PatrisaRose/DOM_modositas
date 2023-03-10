var tomb = new Array();


function feltolt() {
  for (let index = 0; index < 50; index++) {
    let szam = Math.floor(Math.random() * 100) + 1;
    tomb[index] = szam;
  }
  alert("Sikeres feltöltés!")
}

function kiir(){
    let szoveg = "";
    for (let index = 0; index < tomb.length; index++) {
        szoveg += tomb[index] + " ";
        if (index % 5 == 4) {
          szoveg += "\r\n"
        }
        
    }
    alert("A tömb elemei: \r"+ szoveg);
}

function tombOsszege() {
  let osszeg = 0
  for (let index = 0; index < tomb.length; index++) {
    osszeg += tomb[index];
    
  }
  alert("Ennyi a tömbben lévő számok összege: \r" + osszeg)
}

function paros(){
  let parosDb = 0;
  for (let index = 0; index < tomb.length; index++) {
    if(tomb[index] % 2 == 0){
      parosDb++;
    }
    
  }
  alert("Ennyi páros szám van a tömbben: \r" + parosDb)
}

function egyes() {
  let eredmeny = ""
  for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] == 1) {
      eredmeny = "Van benne egyes szám!";
      break;
    }else{
      eredmeny = "Nem volt benne egyes szám!";
    }
    
  }
  alert(eredmeny)
}

function legnagyobb(){
  let max = tomb[0];
  for (let index = 0; index < tomb.length; index++) {
    if (max < tomb[index]) {
      max = tomb[index]
    }
    
  }
  alert("A legnagyobb szám a tömbben: \r" + max)
}