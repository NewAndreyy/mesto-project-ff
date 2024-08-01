// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardItems = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(cardInfo, deleteCollback) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.setAttribute("src", cardInfo.link);
  cardImage.setAttribute("alt", cardInfo.name);
  cardTitle.textContent = cardInfo.name;

  deleteButton.addEventListener("click", () => {
    deleteCollback(cardElement);
  });
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(el) {
  cardItems.removeChild(el);
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  cardItems.appendChild(createCard(item, deleteCard));
});
//asdsa asdas /asda
///asdasd
