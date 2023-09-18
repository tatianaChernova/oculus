'use strict'
//Переключение табов в features section

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
tabItem.forEach(function (element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item--active');
    });
    tabContent.forEach(function (item) {
        item.classList.remove('tabs__content-item--active');
    });
    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

//Открытие/закрытие меню на мобильной версии

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});

//Отправка данных формы AJAX

$(document).ready(function () {
    $("#signUpForm").on("submit", function (event) {
        event.preventDefault();

        const data = {
            email: $("#formEmail").val()
        };
        console.log(data);

        if (data.email == "") {
            $("#resultMessage").text("Please fill in email");
            return false;
        }

        $("#resultMessage").text("");

        $.ajax({
            url: '/signup.php',
            type: 'POST',
            data: data,
            success: function (response) {
                $("#resultMessage").text(response);
                $('#signUpForm')[0].reset();
            },
            error: function (jqXHR, text, error) {
                $("#resultMessage").text(error);
            }
        });
    });
});