//1. feladat
let existingNames = ["Horváth Béla", "Kovács József", "Labda Edit", "Mekk Elek"];
let segito = [[1, 2, 3], ['alma', "banán", "körte"], { segítő: "Janos", kor: 31 }, "NEVED"];

function helper() {
    document.getElementById("helper").innerHTML = "Segitő: " + segito[2].segítő;
}

function nameFinder(callback) {

    if (existingNames.includes(document.getElementById("name").value)) {

        document.getElementById("result").innerHTML = "regisztrált tag";
        document.getElementById("helper").innerHTML = null;
    } else {
        document.getElementById("result").innerHTML = "nem regisztrált tag";
        callback();
    }
}


/////////////////////////////////////////

//2. feladat

const tomb = [3, 5, 7, 8, 11, 15, 26, 40, 65, 100]; 
//felhasználó inputja:
let number = 3;

function num(element){
    return element > number;
}

//tomb.find(num)

//console.log(tomb.find(num))
document.getElementById("findResult").innerHTML = tomb.find(num)

