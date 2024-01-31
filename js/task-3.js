const textInput = document.querySelector("#name-input");
const textOutPut = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  const inputValue = e.currentTarget.value.trim();
  textOutPut.textContent = inputValue || "Anonymous";
});
