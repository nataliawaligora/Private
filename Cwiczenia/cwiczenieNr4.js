//y = ax + b
//
//function y1(x){
//    var a =7;
//    var b=9;
//    var wynik = y(a, x, b);
//    return wynik;
//}
//
//console.log(y1(7));
//
//
//
//function y(a, x, b){
//    var y = a*x + b;
//    return y ;
//}
//
//var wynik = y(1,2,3);
//console.log(wynik);

//scopes:

//var globalna = 666;
//
//function funkcja() {
//    var zmiennaLokalna = 123;
//    var argument = 999;
//    drugaFunkcja(argument);
//}
//
//
//function drugaFunkcja(argument) {
//    console.log(argument);
//}
//
//
//funkcja();
//drugaFunkcja(888);


//add(3)(5) //8

//closures
//var globalna = 555;
//function add(a) {
//    return function wewnetrzna(b) {
//        return a + b + globalna;
//    }
//}
//
//globalna = 1;
//var funkcjaWynikowa = add(3);
//var wynik = funkcjaWynikowa(5);
//console.log(wynik);
//console.log(funkcjaWynikowa(4));


//var foo = "Hello";
//(function () {
//    var bar = " World";
//    alert(foo + bar);
//})();
//
//alert(foo + bar);

//function wypiszWyniki(arr, fn) {
//    arr.forEach(function (item) {
//        console.log(fn.name + '(' + item + ') = ' + fn(item));
//    });
//}
//
// function zrobPierwszaLitereDuza(str) {
//     var pierwszaLitera = str[0].toUpperCase();
//     return pierwszaLitera + str.substr(1);
// }
//
//wypiszWyniki([9, 100, 10000], Math.sqrt);
//
//wypiszWyniki([-129, 100, -10000], Math.abs);
//
//wypiszWyniki(['natalia', 'maciej'], zrobPierwszaLitereDuza);
//
//wypiszWyniki([{imie: 'natalia', nazwisko: 'xyz'},
//    {imie: 'maciej', nazwisko: 'qwerty'}], function (person) {
//
//    return zrobPierwszaLitereDuza(person.imie) + " " + zrobPierwszaLitereDuza(person.nazwisko);
//});
/*
 return
 argumenty
 zakresy - scope
 closures
 IIFE
 przekazywanie funkcji
 hoisting
 */

// x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddnumbers() {
//     return x.filter(function (item) {
//         return item % 2 === 1;
//     });
// }

////exceptions
//function pierwiastek(x) {
//    if (x === 0) {
//        throw new Error('x nie moze byc 0');
//    }
//
//    return Math.sqrt(x);
//}
//
//try {
//    //console.log(pierwiastek(0));
//    console.log(pierwiastek(9));
//    console.log(pierwiastek(100));
//} catch (e) {
//    document.getElementById('errorMsg').innerHTML = e.message;
//} finally {
//    console.log('finally!');
//}


/*
 Napisz funkcję addLogins(), która przyjmie tablicę obiektów w formie:
 { imie: 'stefan', nazwisko: 'batory' } i rozszerzy te obiekty o wlasciwosc "login", ktora jako
 wartosc bedzie miala pierwsza litere imienia i nazwisko. Przykladowy wynik:
 { imie: 'stefan', nazwisko: 'batory', login: 'sbatory' }
 */

//var people = [{ imie: 'stefan', nazwisko: 'batory' }, { imie: 'natalia', nazwisko: 'walig' }];
//
//function addLogins(people) {
//    for (var i = 0; i < people.length; i++) {
//        people[i].login = people[i].imie[0] + people[i].nazwisko;
//    }
//}
//
//console.log(people[0].login, people[1].login);
//addLogins(people);
//console.log(people[0].login, people[1].login);
//
//function add(a,b){
//    return a+b;
//}
//
//var wynik = add(5,2);
//wynik = wynik*2;
//document.getElementById('errorMsg').innerHTML = wynik;
//
//(function () {
//    var name = [{ imie: 'stefan', nazwisko: 'batory', wiek: 27 }, { imie: 'natalia', nazwisko: 'walig', wiek: 17 }, { imie: 'robert', nazwisko: 'van der sar', wiek: 16 }];
//
//    function getMinorsFrom(people){
//        return people.filter(function (item){
//            return item.wiek < 18;
//    });
//    }
//    getMinorsFrom(name);
//})();

//var listalista = [{ imie: 'stefan', nazwisko: 'batory', wiek: 27, nick: 'beton'},
//                 { imie: 'natalia', nazwisko: 'walig', wiek: 17},
//                  { imie: 'robert', nazwisko: 'van der sar', wiek: 16, nick:"cichociemny"}];
//
//function mapowanie(obiektyWtablicy){
//    return obiektyWtablicy.map(function(item){
//        var nickPlaceholder = ' ';
//
//        if (item.nick) {
//            nickPlaceholder = ' "' + item.nick + '" ';
//        }
//
//        return zrobPierwszaLitereDuza(item.imie) + nickPlaceholder + zrobPierwszaLitereDuza(item.nazwisko);
//    })
//}

//var listalista = [{ imie: 'stefan', nazwisko: 'batory', wiek: 27, nick: 'beton'},
//    { imie: 'natalia', nazwisko: 'walig', wiek: 17, nick: "deska" },
//    { imie: 'robert', nazwisko: 'van der sar', wiek: 16,}];
//
//function szukanieksywy(tabl){
//    return tabl.filter(function(ksywa){
//        return ksywa.nick;
//    })
//}
//
//szukanieksywy(listalista);

//var a = 1;
//for ( var i = 0 ; a < 10 ; i++ ) {
//    if (i % 2 !== 0) {
//        a++;
//    }
//
//    console.log('i:', i, 'a:', a);
//}
//setTimeout(function () {
//    console.log('paf!');
//}, 1000);
//console.log('pif!');

// function range(a,b) {
//     var tablica = [];
//     for(var i = a; i<=b; i+=1){
//         tablica.push(i);
//     }
//     return tablica;
//     }
//
//
// function rangeOdd(a,b) {
//     var tablica = [];
//     for(var i = a; i<=b; i+=1){
//         if (i%2 == 0) {
//             tablica.push(i);
//         }
//     }
//     return tablica;
// }
//
//

//
// Array.prototype.map = function (f) {
//     if(typeof f !== 'function'){
//         return this;
//     } else {
//         var result = [];
//         for(var i=0; i<this.length; i+=1){
//             result.push(f(this[i], i ,this))
//         }
//         return result ;
//     }
// };
//
//
// var result = [1, 2, 3].map(function (element) {
//     return element + 55;
// }); // [56, 57, 58]
//
//
// Array.prototype.filter = function (f) {
//     var result = [];
//     for(var i=0; i<this.length; i+=1){
//         if (f(this[i]) === true){
//             result.push(this[i]);
//         }
//     }
//     return result;
// };
// var result2 = [1, 2, 3].filter(function (element) {
//     return element > 1;
// }); // [2, 3]

//
// Array.prototype.natalioweReduce = function (f, start) {
//     var result = start;
//     for(var i=0; i<this.length; i+=1){
//         result = f(result, this[i]);
//     }
//     return result;
// };
//
//
// var result3 = [1, 2, 3].natalioweReduce(function (last, curr) {
//     return last + curr;
// }, 0); // 6

//
// Array.prototype.natalioweReduce = function (f, start) {
//     if(start === undefined){
//         var result = 0;
//     }else {
//     var result = start;}
//     for(var i=0; i<this.length; i+=1){
//         result = f(result, this[i]);
//     }
//     return result;
// };
//
// var result4 = [1, 2, 3].natalioweReduce(function (last, curr) {
//     return last + curr;
// }); // 6
//

// var Samochod = function (kolor) {
//     this.kolor = kolor;
// };
//
// var Ciezarowka = new Samochod();
// Ciezarowka.prototype.

// var osoby = [{imie: "Natalia", nazwisko: "Kropka"}, {imie: "Nata", nazwisko: "Krka"}];
// function znajdz() {
//     for (var i = 0; i < osoby.length; i += 1) {
//         console.log(osoby[i].imie + ' ' + osoby[i].nazwisko);
//     }
// }
//
// znajdz();
//
//
// // var osoba = { imie: "Kon" , nazwisko:"kotek"};
// // osoba.nick = "lysy";
//
// var Osoba = function () {
//     this.imie = "kon";
//     this.nazwisko = 'kotek';
// };
//
// var osoba1 = new Osoba();
// osoba1.nick = "lysy";
//
// function OsobaZKsywka() {
//     Osoba.call(this);
//     this.nick = 'domyslny nick';
// }
//
// OsobaZKsywka.prototype = Object.create(Osoba.prototype);
// OsobaZKsywka.prototype.constructor = OsobaZKsywka;
//
// var osoba2 = new OsobaZKsywka();
//
// console.log(osoba2);
//


// $(document).ready(function () {
//     console.log("natek")
//
//     var nowyDiv = $('<div>').append('ziomalek');
//     $('body').append(nowyDiv);
//     $('div').css('background-color', 'green')
// });

// var x = [1,2,3,4,5,6,7,8,9,10];
//
// var przefiltrowana = x.filter(function (item) {
//     return item%2===0;
// });
//
// console.log(przefiltrowana);
//
// $.ajax({
//     type: 'GET',
//     url: 'http://api.nbp.pl/api/exchangerates/tables/A/today/?format=json',
//     dataType: 'json',    
//     success: function (data) {
//         console.log(data);
//     }
// });
//
//
// var hotel = {
//     name: "Ajax",
//     rooms: 40,
//     booked: 25,
//     dostepnosc: function () {
//         return this.rooms - this.booked;
//     }
// };
//
//
// var hotel = new Object();
// console.log(hotel);
// delete hotel.name;
// hotel.rooms = 60;
// hotel.booked = 80;
// hotel.gym = 20;
// hotel.dostepnosc = function () {
//     return this.rooms - this.booked;
// }
//
//
// function hotele(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.dostepnosc = function () {
//         return this.rooms - this.booked;
//     };
// }


//
// (function nowaNazwa() {
//     var hoteliki = new hotele('kuku', 40, 60);
//
//     console.log('twoj hotel nazywa sie'+' ' + hoteliki.name + ' '+'a w nim jest '+' ' + hoteliki.rooms + 'pokoji')
//
// }());
//
// var hoteliki = new hotele('kuku', 40, 60);
// hoteliki.gym = 70;
//
//
//
// var shape = {
//     width: 600,
//     height: 400,
//     getArea: function() {
//         return shape.width + shape.height;
//     }
// };
//
// function titleCase(title, minorWords) {
//     if (title.length === 0) {
//         return '';
//     }
//
//     title = title.toLowerCase();
//
//     if (minorWords !== undefined && minorWords.length > 0) {
//         minorWords = minorWords.toLowerCase();
//         minorWords = minorWords.split(" ");
//     } else {
//         minorWords = [];
//     }
//
//     var tablica = [];
//     var arrayTitles = title.split(" ");
//     arrayTitles.forEach(function (item, index) {
//         if (minorWords.indexOf(item) === -1 || index === 0) {
//             item = item[0].toUpperCase() + item.substring(1);
//         }
//         tablica.push(item);
//     });
//     var result = tablica.join(" ");
//     return result;
// }
//
//
// console.log(titleCase('') === '');
// console.log(titleCase('', '') === '');
// console.log(titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings');
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows');
// console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox');
//
// function derDieDas(wort) {
//     wort = wort.toLowerCase();
//     var count = 0;
//     for (var i = 0; i < wort.length; i++) {
//         if (wort[i] === 'a' || wort[i] === 'e' || wort[i] === 'i' || wort[i] === 'o' || wort[i] === 'u' || wort[i] === 'ä' || wort[i] === 'ö' || wort[i] === 'ü') {
//             count = count + 1;
//         }
//     }
//     if( count <2){
//         return "das" + " " + wort;
//     }
//     else if( count > 3 ){
//         return "der" + " " + wort;
//
//     }else{
//         return 'die' + " " + wort;
//     }
//
// }
// console.log(derDieDas('Jürgen'), 'die Jürgen', '1 Umlaut, 1 Vokal -> die Jürgen');
// console.log(derDieDas('Auto'), 'die Auto', '3 Vokale -> die Auto');
// console.log(derDieDas('Lappen'), 'die Lappen', '2 Vokale -> die Lappen');
// console.log(derDieDas('Donau-Dampfschifffahrtsgesellschaft'), 'der Donau-Dampfschifffahrtsgesellschaft', '9 Vokale -> der Donau-Dampfschifffahrtsgesellschaft');
// console.log(derDieDas('Ei'), 'die Ei', '2 Vokale -> die Ei');
// console.log(derDieDas('Hut'), 'das Hut', '1 Vokal -> das Hut');

function changeMe(moneyIn) {
    var newchange = moneyIn;
console.log(newchange.split('£'));
    newchange[1]=newchange[1]*100;
    console.log(newchange[1]);

    if (moneyIn !== '£5' || moneyIn !== '£2' || moneyIn !== '£1' || moneyIn !== '50p' || moneyIn !== '20p'
    ) {
         moneyIn;
    }

    if (newchange % 20 === 0) {
        for(var i=0; i<=(newchange/20); i++){

        }

    }

    if (newchange % 20 === 10) {

    }


}

console.log(changeMe("£1"), "20p 20p 20p 20p 20p");
console.log(changeMe("Money"), "Money");