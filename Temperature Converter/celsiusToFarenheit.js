var result = document.getElementById("result");

function handleSubmit() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = (celsius * 9) / 5 + 32 + " °F";
  result.innerText = fahrenheit;
}
