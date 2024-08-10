const modal = document.querySelector(".create-location__modal");
const editModal = document.querySelector(".edit-location__modal");
const openModal = document.querySelector(".create-location__button");
const openEditModal = document.querySelector(".location__edit-button");
const closeModal = document.querySelector(".modal__close-button");

openModal.addEventListener ('click', () => {
    modal.showModal();
})

openEditModal.addEventListener ('click', () => {
    editModal.showModal();
})

closeModal.addEventListener ('click', () => {
    modal.close();
})



const mainContainer = document.querySelector('.locations-managment__container')
mainContainer.addEventListener('click', function (e) {
  // Элемент, на котором был выполнен клик
  const targetElem = e.target
  // Определяем был ли выполнен клик
  // на одной из кнопок или внутри её
  const buttonElem = targetElem.closest('.location__open-button')
  // Если клик был выполнен вне кнопки, buttonElem === null
  if (buttonElem === null) {
    // Если клик выполнен не на кнопке, ничего не делаем
    e.stopPropagation()
    return
  }
  const containerElem = targetElem.closest('.main-location__container')
  // Выводим в консоль контейнер, содержащий нажатую кнопку
  const subLocations = () => {
    containerElem.querySelector(".open-button__line-2").classList.toggle('open-button--active');
    containerElem.querySelectorAll('.sub-location__container').forEach((sub, index) => {
    sub.classList.toggle('sub-location--active');
    });
};
  subLocations(containerElem);
})


mainContainer.addEventListener('click', function (e) {
  const targetElem = e.target
  const buttonElem = targetElem.closest('.location__details-button')
  if (buttonElem === null) {
    e.stopPropagation()
    return
  }
  const containerElem = targetElem.closest('.main-location__container')

  const editDeleteButtons = () => {
    containerElem.querySelector(".location__edit-button").classList.toggle('location__edit-button--active');
    containerElem.querySelector(".location__delete-button").classList.toggle('location__delete-button--active');
};
editDeleteButtons();
})

