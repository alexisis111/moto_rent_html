$(document).ready(function () {
    var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var myEmail = $('#email')
    myEmail.focus(function () {
        if ($(this).val() == $(this).attr('defaultValue')) {
            $(this).val('');
        }
    });
    myEmail.blur(function () {
        var userEmail = $(this).val();
        if (userEmail == '') {
            $(this).val($(this).attr('defaultValue')).css('border', '1px solid grey');

        }
        else if (userEmail.search(regV) == -1) {
            $(this).css('border', '1px solid red')
        }
        else {
            $(this).css('border', '1px solid green')
        }
    });

    $('#my_button').click(function () {
        $(this).attr('disabled', 'disabled');
        $(this).attr('value', 'send...')
    })

});//end ready

/*
$('#motoSelect').change(function () { скрытие и показ выборных кнопок
        var myChoise = $('#motoSelect :selected').val();
        if (myChoise ==4 ) {
            $('#bag').attr('disabled','disabled');
            $('label[for=bag]').css('color','#cc0000');
        }
        else{
            $('#bag').attr('disabled',false);
            $('label[for=bag]').css('color','#646464');
        }
      })

      тоже самое только убирает из списка полностью

      $('#motoSelect').change(function () {
        var myChoise = $('#motoSelect :selected').val();
        if (myChoise == 4) {
            $('#bag, label[for=bag]').hide();

        }
        else {
            $('#bag, label[for=bag]').show();
        }
    })
*/


/* ДЗ в поле ввода емаил при фокусе пропадает value,но если ничего не введут оно вернется!
 var myEmail = $('#email')
    myEmail.focus(function () {
        if ($(this).val() == $(this).attr('defaultValue')) {
            $(this).val('');
        }
    });
    myEmail.blur(function () {
        if ($(this).val() == '') {
            $(this).val($(this).attr('defaultValue'));
        }
    });
 */
/*
 $('#motoSelect').change(function () { Добавляем html в код в зависимости от выбранного кол-ва дней.
        var myChoise = $('#motoSelect :selected').val();
        if (myChoise == 1) {
            $('#daysSelect').html('<option value="1">1</option><option value="2">2</option>')
        }
        else if (myChoise == 2) {
            $('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>')
        }
        else if (myChoise == 3) {
            $('#daysSelect').html('<option value="1">1</option>')
        }
        else {
            $('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>')
        }
    });
*/

/* фокус на поле ввода,блюр убирает подсветку!
 $('#email').focus(function () {
        $(this).addClass('onFocus').blur(function () { $(this).removeClass('onFocus') })
    });
*/

/* если поле ввода емэил пустое отдай ошибку
 $('#my_form').submit(function (e) {
        if ($('#email').val() == "") {
            e.preventDefault();
            alert('email is not a adress')
        }
    });
 */

/*
$('#checkButton').click(function () { выбираем все отмеченные чекбоксы и получаем их значение
    $(':checkbox:checked').each(function () {
        alert($(this).val());
     })
   });
 */

/* Создание выборок из эл-ов форм

 $('#my_form  :checkbox:checked').fadeOut(2000);

:input все элементы которые влияют на ввод данных в форме
:text поля ввода,которые созданы как ,input type='text'..
:password поля ввода,которые созданы как ,input type='password'..
:radio поля ввода,которые созданы как ,input type='radio'..
:checkbox поля ввода,которые созданы как ,input type='checkbox'..
:submit поля ввода,которые созданы как ,input type='submit'..
:image поля ввода,которые созданы как ,input type='image'..
:reset поля ввода,которые созданы как ,input type='reset'..
:button поля ввода,которые созданы как ,input type='button'..
:file поля ввода,которые созданы как ,input type='file'..
:hidden поля ввода,которые созданы как ,input type='hidden'..
:checked отбирает отмеченные в текущий момент поля checkbox и radio
:selected отбирает выбранный в текущий момент эл-т списка
*/

/* Домашнее задание к 92-му уроку.
 $('#small a').click(function (e) { галерея
        if ($('#big img').attr('src') != $(this).attr('href')) {
            $('#big img').hide().attr('src', $(this).attr('href'));
            $('#big img').load(function () {
                $(this).fadeIn(2000);
            });
        }
        e.preventDefault();
    });
    $('#gallery').hide(); показ\скрытие галереи
    $('#SH').toggle(function () {
        $('#gallery').slideDown(3000);
        $(this).text('hide gallery');
    }, function () {
        $('#gallery').slideUp(3000);
        $(this).text('open gallery');
    });
    $('#small a img').click(function () { миниатюры выделение
        $('#small a img').fadeTo(1000,1).css('border','none')
        $(this).fadeTo(1000,0.6).css('border','1px solid red')
     })
 */

/* Домашнее задание к 90-му уроку.

ДЗ при надатии на картинку появляется рамка,второе нажатие рамка исчезает
но при клике с кнопкой shift цвет рамки другой,второй клик она исчезает

 $('#div_for_img img').toggle(function (e) {
        $(this).addClass('forTr');
        if (e.shiftKey) {
            $(this).addClass('forTr2');
        };

    }, function (e) {
        $(this).removeClass('forTr');
        if (e.shiftKey) {
            $(this).removeClass('forTr2');
        };

    }); */

/*
$('#div_for_img').click(function (e) { e-обработчик событий (eventObject)
        alert('click for x' + e.screenX); - клик по х относительно монитора
        alert('click for y' + e.screenY);- клик по y относительно монитора
        alert('click for x fo brouser' + e.pageX); - клик по х относительно браузера
        alert('click for y fo brouser' + e.pageY); - клик по y относительно браузера
        alert('click for y fo brouser' + e.altKey); - клик с кнопкой alt
        alert('click for y fo brouser' + e.ctrlKey); - клик с кнопкой ctrl
        alert('click for y fo brouser' + e.shiftKey); - клик с кнопкой shift
        var myObj = e.target;
        alert('reaction for object ' + myObj.id); -получение назания элемента по Ид по которому кликнул пользователь
    });
 */

/* ДЗ добавляем подсветку при наведении на кнопку,добавляем подсветку классом на эл-ы
$('#my_button').hover(function () {
       $(this).css({
           'background-color':'#32375D',
           'color':'#ffffff'
       });
   },
   function () {
       $(this).css({
           'background-color':'#f6f6f6',
           'color':'#2C2C2C'
       });
   });
   $('#moto_table tbody tr').toggle (function () {
       $(this).addClass('forTr');
    },function () {
       $(this).removeClass('forTr');
     });
 */

/*  показ прятание формы,добавление подсветки строке
$('#moto_table tr').hover(function () {
        $(this).addClass('svet');
    }, function () {
        $(this).removeClass('svet');
    });



    $('.formHide').toggle(function () {
        $('#my_form').fadeOut(1000);
        $(this).text('Open form');
    }, function () {
        $('#my_form').fadeIn(1000);
        $(this).text('Hide form');
    });
*/

/* ДЗ добавляет класс и подсвечивает строку
var tablestr = $('#moto_table td');
    tablestr.mouseover(function () {
        $(this).addClass('svet');
    });

    tablestr.mouseout(function () {
        $(this).removeClass('svet');
    });
*/
/*  ДЗ выбираем элемент списка,приклике он добавляется в таблицу
 $('#moto_models li').click(function (){
    var motoModels =$(this).clone();
    $('#moto_table').append(motoModels);
    }); */




/*
$('img[src*=logo]').click(function (){ -объект,событие
    alert('header');-действие
    });

    $(window).scroll(function () {
        alert('down!');
     });
*/

/*
var myMoto = document.getElementById('img_1');- объект
   function motoClick() {
       alert('hello' + myMoto.width);-действие
   }
   myMoto.onclick = motoClick;-событие
*/


/* РЕАКЦИЯ ЭЛЕМЕНТОВ ВЕБ СТРАНИЦЫ НА СОБЫТИЯ

mouseover-наведение мыши на объект
mouseout-увод мыши с объекта
click-клик мышью по объекту
dblclick-двойной клик по объекту
mousemove-перемещение курсора мыши
mouseup-момент нажатия кнопки мыши
mousedown-момент отпускания кнопки мыши
submit-момент отправки формы обтаботчику
focus-момент получения фокуса объектом(работает и для ссылок)
blur-момент потери фокуса объектом(работает и для ссылок)
change-изменения объекта формы
reset-сброс формы
keypress-нажатие клавиши клавиатуры
keydown-момент нажатия клавиши,до момента отпускания
keyup-момент отпускания клавиши
load-полная загрузка страницы
resize-изменение размеров окна браузера
scroll-прокрутка страницы
unload-уход со страницы
*/


/*
$('img[alt]').fadeOut(5000);- выборка просто по атрибуту
*/

/*
$('img[width=200], a[href*=documents]').fadeOut(5000);-выборка разнотипных элементов
*/

/*
var myDiv =  $('#div_for_img').clone();-клонируем что то
   $('#my_form').after(myDiv);

   var myForm = $('#my_form').remove();-удаляем что-то,но удаленный объект все равно можно использовать!
   $('#moto_table').before(myForm);
*/

/*
 var myDiv =  $('div').get(0); - тоже что и getElementByTagName по индексу
   alert(myDiv);
*/
/* ДЗ выбираем все картинки и отбираем по условию картинки попадающие в диапазон,даем рамку
$('img').each(function(){
        if($(this).height() > 50 && $(this).height() < 100 ){
           $(this).css({
            'border':'1px solid #cc0000'
           });
        }
    });
*/

/* each это каждый элемент(массив),а $(this)это отдельный элемент уже отобранный
$('img').each(function(){
   if( $(this).width() < 400){
       $(this).fadeOut(3000);
   };
});
*/

/* ДЗ создаем див,добавляем текст,заливку и цвет текста,ост.пар.добавил сам!
$('body').append('<div id=\'newParagraph\'>Its a random text</div>');

$('#newParagraph').css({
    'margin' : '0 auto',
    'width' : '900px',
    'textAlign' : 'center',
    'backgroundColor' : '#000000',
    'color':'white'
});
*/

/*МЕТОДЫ ДОБАВЛЕНИЯ HTML В РАЗНЫЕ МЕСТА СТРАНИЦЫ
   var myDiv = $('#div_for_img').css({'border' : '1px solid red'});
   myDiv.before('<p>it\'s a new paragraph using the method before()</p>'); ПЕРЕД БЛОКОМ
   myDiv.after('<p>it\'s a new paragraph using the method after()</p>');ПОСЛЕ БЛОКА
   myDiv.prepend('<p>it\'s a new paragraph using the method prepend()</p>');ВНУТРИ БЛОКА ПЕРЕД ЭЛЕМЕНТАМИ
   myDiv.append('<p>it\'s a new paragraph using the method append()</p>');ВНУТРИ БЛОКА ПОСЛЕ ЭЛЕМЕНТОВ
*/

/* ДЗ выбрать картинку,дать ей анимацией рамку и скрыть этот элемент
 $('#img_2').css({'border' : '1px solid red'}).animate ({'borderWidth' : '5px'},5000).fadeOut(5000);
*/

/*
$('#main_h1').css({'border' : '2px solid red'}).animate ({'paddingTop' : '50px'},4000,function () {alert('End Animate!')});
*/

/*  ДЗ удаляем класс,и добавляем 3 новых css свойства
 $('.pq').removeClass('pq').css({
        'border':'1px solid #cc0000',
        'padding':'5px',
        'backgroundСolor':'#f6f6f6'
    });
*/

/*
    $('#main_h1').css({получаем свойство объекта и меняем его
        'color':'#3F4078',
        'font-size':'19px'
    });литерал(свойства объекта)ключ,значение
*/


/*
$('#div_for_img + p').addClass('new');-добавление класса
$('#moto_table').removeClass('mototable');- удаление класса
*/


/* ДЗ
 function result (id,nameAttr,newAttr) {
        var idFull = '#'+ id;
        $(idFull).attr(nameAttr,newAttr);
    };

    result('img_1','title','home work');функция,которая получает 3 параметра
    и меняет атрибут на новый!
*/

/*
$('#moto_table').removeAttr('title'); удаляем атрибут
$('#moto_table').removeAttr('title').attr('title', 'new attr'); удаляем атрибут и добавляем новый атрибут
*/

/*
$('#motoSelect').attr('size', 4); меняем значение атрибута
*/

/*
    var fH = $('img[src*=footer]').attr('height');
    $('#forresults').text(fH); узнаем атрибут и выводим информацию
*/

/* $('img[src*=logo]').slideUp(4000).slideDown(4000);Плавное исчезновение вверх и вниз */

/* $('img[src*=logo]').fadeTo(4000,0.5).fadeTo(4000,1);еще один метод fadeTo */
/*
ДЗ функция которая проверяет условия,и скрывает эл-т если условие выполнено
function result (id,time){
        if (time < 500 || time >10000 || isNaN(time)){
            return false;
        }
        else{
            var idFull = '#'+ id;
            $(idFull).fadeOut(time);
        };

    }

    result('div_for_img img',1000);
*/

/*  $('img[src*=logo]').fadeOut(4000).fadeIn(4000);Плавное появление и исчезновение */

/* $('#moto_models').html('<li>Harley</li><li>Jiji</li>'); Изменение или вытаскивание эл-та */


/* ДЗ функция вычисления размера эл-а
function result(par) {
        var idFull = '#'+ par;
        var wEl = $ (idFull).width();
        var hEl = $ (idFull).height();
        $('#forresults').text('Width :'+ wEl + ' height :' + hEl);
    };
        result('div_form_2');
*/

/* $('#div_for_img').height(130).width(820);изменение высоты и ширины элементов */


/* ДЗ спрятать все картинки кроме первой
$('img:not(.forheader img)').hide(5000);
*/
/* $('#div_for_img img').hide(3000);цикл сам себя перебирает */

/* ДЗ замена ссылки

 var myLink = $('.test')
    myLink.hide().text('new gypertext').show(2000);
*/

/*  var textH1 = $('#main_h1').text();скрываем и показываем эллемент
    var myLogo = $('#forheader img');
    myLogo.hide(1300).show(1300);
*/


/* $(document).ready (function () {

});
$(function () {

});

//Дожидаюсь окончание формирования DOM!!!
*/

/*
$('#moto_table tr:even');-фильтр четных
$('#moto_table tr:odd');-фильтр нечетных
$('img:not(#div_for_img img)');- все кроме
$('div:has(fieldset))');- которые имеют внутри себя
$('p:contains(мотоцикл)');- только те которые содержут в себе
$('#div_for_img:first');- только первый элемент
$('#div_for_img:last');- только последний элемент
$('div:hidden'); - только скрытые блоки
$('div:visibility');- только видимые блоки
$('p'); - выбор по названию тэга
$('#main_h1'); - выбор по идентификатору
$('.maindiv'); - выбор по КЛАССУ
$('#div_for_img img'); - выбор по вложенным селекторам
$('#div_for_img > img'); - выбор дочерних тэгов
$('#main_h1 + p'); - выбор следующего тэга
$('img[width = 200]');- Выбор по атрибуту
$('a[href^= http]');-выбор по началу атрибута
$('img[src$= .jpg]');-выбор по концу атрибута
$('img[src* = moto]');-выбор по атрибуту в любом месте(moto)
*/
