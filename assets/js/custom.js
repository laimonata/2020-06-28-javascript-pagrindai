//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [
    0 , 
    'Labas lietuva' , 
    2 , 
    3 , 
    [1, 2, 3]
];

//console.log( petras[1] );

//var = variable (angl.) kintamasis 

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = 'Labas lietuva!';





document.getElementById('kvietejas').addEventListener("click", ikrepseli);

function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value;

    var zodis = 'prekes';
    
    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }
    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    if( (kiekis%100 > 10 && kiekis%100 < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    if(kiekis > 100) {
        var error = document.getElementById('kiekis');
        error.classList.add('error');
        alert("Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas");
    }

    if(kiekis < 1) {
        var error = document.getElementById('kiekis');
        error.classList.add('error');
        alert("Pasirinktas per mažas kiekis");
    }
    

    document.getElementById('messages').innerHTML = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}

document.getElementById('reset').addEventListener("click", atnaujinti);

function atnaujinti() {

    location.reload();


}

//kaunasLietuva(petras);


