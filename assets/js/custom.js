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
        miestas: "Kaunas",
        adresas: "Jonavos 56",
        data: "2020-07-01",
        kiekis: "10"
    },
    {
        miestas: "Vilnius",
        adresas: "Gelezinio vilko 20",
        data: "2020-07-01",
        kiekis: "15"
    },
    {
        miestas: "Klaipeda",
        adresas: "Ligonines 20",
        data: "2020-07-01",
        kiekis: "25"
    }
];

let html = '';
let ending = '';

for(let indeksas in duomenys) {

    html += '<tr>'; 

    for(let indeksas2 in duomenys[indeksas]) {
        
        html += '<td>' + duomenys[indeksas][indeksas2] + '</td>';

    }

    html += '</tr>';

    //console.log(eilute);

}

document.getElementById('lentelesVidus').innerHTML += html;

document.getElementById('rodyti').onclick = function() {

    var lentele = document.getElementById('lentele');

    lentele.classList.toggle('show');
  
    if( lentele.classList.contains('show') == false ) {
        document.getElementById('rodyti').innerText = 'Slėpti';
    } else {   
        document.getElementById('rodyti').innerText = 'Rodyti';
    }
  
};

 

var array = [5, 23, 8, 12, 26, 34, 1, 9, 15, 45];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);

console.log(sum);

console.log (document.getElementById('skaiciuoti').innerHTML );

//alert('skaiciuojami skaiciai: ' + array + ' suma ' + sum);

document.getElementById('submit').onclick = function() {

    var el = document.getElementById('pasirinkimas');

    console.log(el.value);

    var tekstas = '';

    switch(el.value) {

        case 'volvo':
            tekstas = 'Daug mases, daug plieno';
        break;

        case 'saab':
            tekstas = 'Svedu masina';
        break;

        case 'opel':
            tekstas = 'Stovedamas rudyja';
        break;

        case 'audi':
            tekstas = 'Audi neciaudi';
        break;

        default:
            tekstas = 'Velniop ta masina';
    }

   alert(tekstas);


}

jQuery(document).ready(function() {

    jQuery('.naujasmygtukas').addClass('klase');

    jQuery('#naujasmygtukas').removeClass('klase');

    jQuery('.naujasmygtukas').click(function() {

        alert('Paspaudimas');

    });

});



