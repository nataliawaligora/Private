///**
// * Created by natalia on 2016-05-24.
// */
var data = {
    people: [
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "Anna",
            lastName: "Smith",
            nickname: "the Rock"
        },
        {
            firstName: "Peter",
            lastName: "Jones"
        },
        {
            firstName: "Maciej",
            lastName: "Pe",
            nickname: "Czlowiek Dzamnior"
        },
        {
            firstName: "Natalia",
            lastName: "Wu",
            nickname: "Fliberczibit"
        },
    ],
};

console.log(data.people);



function mapPerson(person) {
    var result = person.firstName;

    if (person.nickname != undefined) {

        result += ' "' + person.nickname + '"';

    }

    result += ' ' + person.lastName;

    return result;
}

var tablicaWynikowa = data.people.map(mapPerson);
console.log(tablicaWynikowa)








//var samochod = {
//    kolor: 'czerwony',
//    kola: [
//        {
//            pozycja: 'przod',
//            strona: 'lewa'
//        },
//        {
//            pozycja: 'przod',
//            strona: 'prawa'
//        },
//        {
//            pozycja: 'tyl',
//            strona: 'lewa'
//        },
//        {
//            pozycja: 'tyl',
//            strona: 'prawa'
//        },
//    ]
//};
//
////console.log(samochod.kola[0].strona);