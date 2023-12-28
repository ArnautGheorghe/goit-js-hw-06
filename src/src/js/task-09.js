function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const fundal = document.querySelector(".widget");
const butonel = document.querySelector(".change-color");

fundal.style.backgroundColor = "none";


butonel.addEventListener("click", () => {
  fundal.style.backgroundColor = getRandomHexColor();
  let modifColor = document.querySelector(".color");
modifColor.innerHTML = `<span >#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}</span> `;
  console.log(
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
  );
});

