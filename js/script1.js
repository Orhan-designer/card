//Второй способ создания кода для звёздного рейтинга
/* //Создаём код со свойствами для всей карточки
let card = {
  //создаём объект для всей карточки
  poster: "poster.jpg",
  type: "type.png",
  sale: "sale.png",
  title: "Тайная жизнь,",
  subtitle: "домашних животных 2",
  price: 44,
  currency: "руб.",
  rating: 3,
  buy: "order.jpg",
  act: true,
};

//Полная стоимость
let fullPrice = `${card.price},00 ${card.currency}`;
console.log(fullPrice);

//Расчёт акции
let salePrice = `${Math.round(card.price * 0.9)},00${card.currency}`; //округляем до целого числа
console.log(salePrice);

//Расчёт рейтинга (второй способ)
let stars = "";
switch (
  card.rating //сюда вставляем значения из объекста card и проверяем его
) {
  case 1:
    stars =
      '<span class="material-icons">star star_border star_border star_border star_border</span>';
    break;

  case 1.5:
    stars =
      '<span class="material-icons">star star_half star_border star_border star_border</span>';
    break;

  case 2:
    stars =
      '<span class="material-icons">star star star_border star_border star_border</span>';
    break;

  case 2.5:
    stars =
      '<span class="material-icons">star star star_half star_border star_border</span>';
    break;

  case 3:
    stars =
      '<span class="material-icons">star star star star_border star_border</span>';
    break;

  case 3.5:
    stars =
      '<span class="material-icons">star star star star_half star_border</span>';
    break;

  case 4:
    stars = '<span class="material-icons">star star star star</span>';
    break;

  case 4.5:
    stars = '<span class="material-icons">star star star star star_half</span>';
    break;

  case 5:
    stars = '<span class="material-icons">star star star star star</span>';
    break;

  default:
    stars =
      '<span class="material-icons">star star_border star_border star_border star_border</span>';
}
console.log(stars);

let finalPrice = "";
if (card.act) {
  finalPrice = `<div>${salePrice}</div> <div>${fullPrice}</div>`;
} else finalPrice = `<div>${fullPrice}</div>`;

let s = `
  <div id="card">
    <div class="poster">
      <img src="./images/${card.poster}" alt="">
    </div>
    <div class="title">
      <div>${card.title}</div>
      <div>${card.subtitle}</div>
    </div>
    <div class="price">
      ${finalPrice}
    </div>
    <div class="rating">
      <span class="material-icons">${stars}</span>
    </div>
    <button>
      <a href="#"><img src="./images/${card.buy}"></a>
    </button>
    <div class="prelative">
      <img src="./images/${card.type}" alt="">
      <img src="./images/${card.sale}" alt="" id="sale">
    </div>
  </div>
`;

cards.innerHTML = s;

if (card.act) sale.style.opacity = "1";
else sale.style.opacity = "0"; */