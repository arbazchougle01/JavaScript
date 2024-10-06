var result = document.getElementById("result");

function handleSubmit() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = (celsius * 9) / 5 + 32 + "°F";
  result.innerText = fahrenheit;
  console.log(celsius);
  console.log(fahrenheit);
  console.log("Its Running")
}

function reset() {
  let celsius = document.getElementById("celsius");
  let result = document.getElementById("result");
  celsius.value = "";
  result.innerText = "";
  console.log("Its running");
}
