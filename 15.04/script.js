/*Валидация формы регистрации ребенка*/
const nameRegex = /^[A-Za-zА-Яа-яЁё\s.,]{1,100}$/;
const child_telRegex = /^\d{3}-\d{3}-\d{4}$/;
const dateRegex = /^\d\d.\d\d.\d{4}$/;
const ageRegex = /^\d+$/;


function validateField(input, regex, message) {
    input.addEventListener("input", () => {
        if (regex.test(input.value)) {
            message.textContent = "Корректный ввод";
            message.className = "valid";
        } else {
            message.textContent = "Некорректный ввод";
            message.className = "invalid";
        }
    });
}

const name = document.getElementById("name");
const age = document.getElementById("age");
const child_tel = document.getElementById("child_tel");
const date = document.getElementById("date");
const interests = document.getElementById("interests");


const nameMsg = document.getElementById("nameMsg");
const ageMsg = document.getElementById("ageMsg");
const child_telMsg = document.getElementById("child_telMsg");
const dateMsg = document.getElementById("dateMsg");
const interestsMsg = document.getElementById("interestsMsg");


validateField(name, nameRegex, nameMsg);
validateField(age, ageRegex, ageMsg);
validateField(child_tel, child_telRegex, child_telMsg);
validateField(date, dateRegex, dateMsg);
validateField(interests, nameRegex, interestsMsg);


document.getElementById("form_added").addEventListener("submit", function (event) {
    event.preventDefault();


    if (
        !nameRegex.test(name.value) ||
        !child_telRegex.test(child_tel.value) ||
        !ageRegex.test(age.value) ||
        !dateRegex.test(date.value) ||
        !nameRegex.test(interests.value)
    ) {
        alert("Пожалуйста, исправьте ошибки перед отправкой формы");
        return;
    }

    const data = {
        name: name.value,
        age: age.value,
        phone_number: child_tel.value,
        date_of_birth: date.value,
        interests: interests.value,
    };

    alert("Форма успешно отправлена! Регистрация ребенка завершена.\n\n" + JSON.stringify(data, null, 2));
});





/*Изменения в стиле CSS*/

const button = document.getElementById("button");
button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "#9a00ff";
})
button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "#ffd429";
})

const mobile_phone = document.getElementById("mobile_phone");
mobile_phone.addEventListener("click", () => {
    mobile_phone.style.scale = "1.1";
})
mobile_phone.addEventListener("dblclick", () => {
    mobile_phone.style.scale = "1";
})