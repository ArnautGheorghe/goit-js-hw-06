let currentCount = document.querySelector("#value");
console.log(currentCount.innerHTML)
let counter = 0;
console.log(counter)
if (currentCount != counter) {
    currentCount = 0;
} 
console.log(currentCount);

const singleBtn = document.querySelector('button[data-action="decrement"]');

const handleClick = () => {
    counter = counter - 1;
    const val = document.querySelector("span"); 
    const newVal = document.createElement("span");
    newVal.textContent = counter;
    val.textContent=newVal.innerHTML;
    
    console.log(counter);
};

singleBtn.addEventListener("click", handleClick);

const singleBtn2 = document.querySelector('button[data-action="increment"]');

const handleClick2 = () => {
  counter = counter + 1;
  const val = document.querySelector("span");
  const newVal = document.createElement("span");
  newVal.textContent = counter;
  val.textContent = newVal.innerHTML;

  console.log(counter);
};

singleBtn2.addEventListener("click", handleClick2);