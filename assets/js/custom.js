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
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    if(kiekis > 100) 
         zinute = 'Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.'

    if(kiekis < 1)
         zinute = 'Pasirinktas per mažas kiekis.';

    document.getElementById('messages').innerHTML = '';

    //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}

//kaunasLietuva(petras);


document.getElementById('reset').addEventListener("click", atnaujinti);

function atnaujinti() {

    location.reload();

}

var i = 0;

while(i < 10) {

    //console.log(i);
    i++;

}

i = 0;

do {
    //console.log('Skaicius yra: ' + i);
    i++;
}
while (i < 10)


var petras = [
    5 , 
    6, 
    7 , 
    8 , 
    9
];

//console.log(petras[0]);

const duomenys = [
    {
        vardas: "Rokis",
        veisle: "Vokieciu aviganis",
        miestas: "Vilnius",
        amzius: "3"
    },
    {
        vardas: "Milka",
        veisle: "Foksterjeras",
        miestas: "Kaunas",
        amzius: "7"
    },
    {
        vardas: "Amsius",
        veisle: "Zanenhundas",
        miestas: "Alytus",
        amzius: "5"
    }
];

for(let eile in duomenys) {
    console.log(duomenys[eile]['vardas'], duomenys[eile]['veisle'], 
    duomenys[eile]['miestas'], duomenys[eile]['amzius']);
    
}

/*for(let i = 0; i < petras.length; i++) {
    console.log('Masyvo petras indeksas: ' + petras[i]);
}*/