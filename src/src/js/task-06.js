const textInput = document.querySelector("#validation-input");
let test = "";
textInput.classList.toggle("valid");
textInput.classList.toggle("invalid");
textInput.addEventListener("input", (event) => {
  test = event.currentTarget.value;
  

  if (test.length === 6) {
      textInput.addEventListener("blur", () => {
         textInput.classList.remove("invalid"); 
          textInput.classList.add("valid");
      textInput.value = "";
      console.log(textInput.value);
    });
  } else {
      textInput.addEventListener("blur", () => {
          textInput.classList.remove("valid");
          textInput.classList.add("invalid");
      textInput.value = "";
      console.log(textInput.value);
    });
  }
});