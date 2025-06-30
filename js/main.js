document.querySelector('.button').addEventListener('click', function(event) {
  // Предотвратить стандартное поведение кнопки (отправку формы)
  event.preventDefault();

  // Получить все поля формы
  let form = document.getElementById('form'); // Замените на id вашей формы
  let inputs = form.querySelectorAll('input');
  let allFilled = true;

  // Проверить заполненность каждого поля
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '' ) {
      allFilled = false;
      break; // Если хотя бы одно поле пустое, прекратить проверку
    }
  }

  // Если все поля заполнены, перенаправить на другую страницу
  if (allFilled) {
    window.location.href = 'shop.html'; // Замените на URL целевой страницы
  } else {
      // В противном случае, можно вывести сообщение об ошибке или выполнить другие действия
      window.location.reload() 
      window.location.href = 'form-registration.html';
  }
});