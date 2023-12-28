const text = document.querySelector("#text");
const input = document.querySelector("#font-size-control");


input.addEventListener("change", setFontSize);

function setFontSize(event) {
    const selectedOptionValue = event.currentTarget.value;
    
    const text = document.querySelector("#text");
    text.style.fontSize = `${selectedOptionValue}px`;
    
}

