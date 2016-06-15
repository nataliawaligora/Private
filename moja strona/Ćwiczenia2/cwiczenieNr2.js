///**
// * Created by natalia on 2016-05-24.
// */
//
// $(document).ready(
//     function () {
//         $('input').change(multi);
//         console.log($('input'));
//     }
// );
//
// function multi(wartosc1, wartosc2) {
//
//     var wartosc1 = parseInt($("#wartosc1").val());
//     var wartosc2 = parseInt($("#wartosc2").val());
//
//     $("span").html(wartosc1 * wartosc2);
// }

function start() {

    var input1 = document.getElementById('wartosc1'); //$('#wartosc1')
    var input2 = document.getElementById('wartosc2');

    var changeListener = function () {
        var span = document.getElementsByTagName('span')[0]; //$('span')[0]
        span.innerHTML = input1.value * input2.value;
        //$('span').html(sgs * fsg)
    };

    // $('#wartosc1').change(changeListener);
    input1.addEventListener('change', changeListener);
    input2.addEventListener('change', changeListener);
}
