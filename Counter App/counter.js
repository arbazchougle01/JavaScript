var counter = 0;   // defining a variable;

var inputVal = document.getElementById("input1");    //defining a variable;

//creating increment function

function increment() {
  counter = inputVal.value;
  counter++;
  inputVal.value = counter;
  console.log(counter);
}
// increment function ends  here

//creating decrement function

function decrement() {
  counter = inputVal.value;
  if (counter == 0) {
    inputVal.value = 0 ;
  } else {
    counter--;
    inputVal.value = counter;
    console.log(counter);
    return counter;
  }
}

// decrement function ends  here

// reset function starts  here

function reset() {
  counter = 0;
  inputVal.value = counter;
  console.log(counter);
  return counter;
}

// reset function ends  here

//code ends here!
