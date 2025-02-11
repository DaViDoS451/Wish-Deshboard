const user = {
  name: "Давід",
  surname: "Аракян",
  userPhoto: "photo.webp",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "istockphoto-172866048-1024x1024.jpg", alt: "хочу бути пинг понгистом" },
    { src: "22b945bc24.jpg", alt: "хочу вийграть чемпионат по бравл старсу" },
    { src: "Information-technology.jpg", alt: "хочу стати айтишником" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
