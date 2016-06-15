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
            lastName: "Jonesfff"
        },
        {
            firstName: "Maciej",
            lastName: "Pe",
            nickname: "Czlowiek Dzamnior"
        },
        {
            firstName: "Ela",
            lastName: "Wu",
            nickname: "Fliberczibit"
        }
    ]
};
var data1 = {
    people1: [
        {
            Name: "John",
            lastName: "Doe"
        },
        {
            Name: "Konrad",
            lastName: "Smith",
            nickname: "the Rock"
        },
        {
            Name: "Peter",
            lastName: "Jones"
        },
        {
            Name: "Maciej",
            lastName: "Pe",
            nickname: "Czlowiek Dzamnior"
        },
        {
            Name: "Natalia",
            lastName: "Wu",
            nickname: "Fliberczibit"
        }
    ]
};

data.people.forEach(function(value){
    console.log(value.firstName);
});

data1.people1.forEach(function(value1){
    console.log(value1.Name);

});

data.people.forEach(function(person1){
    data1.people1.forEach(function(person2){
        if(person1.firstName === person2.Name){
            console.log(person1, person2);
        }
    }
    )
})

//
// function mapPerson(person) {
//     var result = person.firstName;
//
//     if (person.nickname != undefined) {
//
//         result += ' "' + person.nickname + '"';
//
//     }
//
//     result += ' ' + person.lastName;
//
//     return result;
// }
//
// var tablicaWynikowa = data.people.map(mapPerson);
// console.log(tablicaWynikowa)








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