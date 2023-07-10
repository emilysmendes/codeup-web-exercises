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



$('h1').click (
    function () {
        $(this).css('background-color', 'yellow')
    }
)

                    //              PREFERRED METHOD        //
// $('h1').on ('click', (e) => (
//     $(e.target).css('background', 'yellow');
// });


$('p').dblclick(
    function () {
        $(this).css('font-size', '18px')
    }
)

                //              PREFERRED METHOD        //
// $('p').on('dblclick', () => (
//     $('p').css('font-size', '18px');
// });

$('li').hover (
    function () {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    }
)

               //              PREFERRED METHOD        //
// $('li').on('mouseenter', (e) => (
//     $(e.target).css('color', 'red');
//     });

// $('li').on('mouseleave', (e) => (
//     $(e.target).css('color', 'black');
//     });
