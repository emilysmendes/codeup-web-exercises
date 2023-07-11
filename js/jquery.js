// window.onload = function() {
//     alert( 'The page has finished loading!' );
// }

// $(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
//      alert($("#header-welcome").html());
//      // const paragraph = $('#')
//
// $('.container').css('border', '1px dotted red');
//      const codeup= document.querySelectorAll('.codeup');
//      codeup.forEach( codeupStudents=> {
//     codeup.style.border = '1px dotted red';
// });
//
//

// $('li').css('font-size', '20px');
//
// $('p').css('background color', 'yellow')
// $('h1').css('background color', 'yellow')
// $('li').css('background color', 'yellow')
//
// alert($('li').text());



// $('h1').click (
//     function () {
//         $(this).css('background-color', 'yellow')
//     }
// )

                    //              PREFERRED METHOD        //
// $('h1').on ('click', (e) => (
//     $(e.target).css('background', 'yellow');
// });


// $('p').dblclick(
//     function () {
//         $(this).css('font-size', '18px')
//     }
// )
//
//                 //              PREFERRED METHOD        //
// // $('p').on('dblclick', () => (
// //     $('p').css('font-size', '18px');
// // });
//
// $('li').hover (
//     function () {
//         $(this).css('color', 'red');
//     },
//     function () {
//         $(this).css('color', 'black');
//     }
// )
//
//                //              PREFERRED METHOD        //
// $('li').on('mouseenter', (e) => (
//     $(e.target).css('color', 'red');
//     });

// $('li').on('mouseleave', (e) => (
//     $(e.target).css('color', 'black');
//     });


"use strict";

 // BODY //
$('body')
    .css('background-image', "url('../css/img/matrix image.gif')")
    .css('background-repeat', 'repeat')
    .css('background-size', 'cover');

// TEXT
$('#main-header, #main-text, #instructions')
    .css('text-align', 'center')
    .css('font-family', 'IBM Plex Mono')
    .css('color', '#ffffff')
    .css('margin-top', '80px');

//HIDDEN MESSAGE
$('#hidden-message').hide()


$(document).keyup(function(event){
    console.log(event.keyCode);
});

function onKonamiCode(cb) {
    var input = '';
    var key = '3838404037393739666513';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () {
    alert('You gained 30 lives!')
    $('body')
        .css('background-image', "url('../css/img/cat matrix.jpeg')")
        .css('object-fit', 'cover')
        .css('background-size', 'cover')
        .css('background-repeat', 'no-repeat');


    $('#main-header, #main-text, #instructions').hide()
    $('#hidden-message').show()
        .css('text-align', 'center')
        .css('font-family', 'IBM Plex Mono')
        .css('color', '#ffffff')
        .css('margin-top', '80px');
});


