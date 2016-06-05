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
function zrobPierwszaLitereDuza(str) {
    var pierwszaLitera = str[0].toUpperCase();
    return pierwszaLitera + str.substr(1);
}
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

x = [1,2,3,4,5,6,7,8,9,10];
function oddnumbers(){
    return x.filter(function(item){
        return item % 2 === 1;
    });
}

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

