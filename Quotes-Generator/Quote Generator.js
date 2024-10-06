var blank="Click the button to display a quote";

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "The best way to predict the future is to invent it. – Alan Kay",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  ` "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "The best way to predict the future is to invent it. – Alan Kay",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "The best way to predict the future is to invent it. – Alan Kay",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "The best way to predict the future is to invent it. – Alan Kay",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "The best way to predict the future is to invent it. – Alan Kay",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",`
];

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  console.log(randomQuote);
  let quoteDisplay = document.getElementById("displayQuote");
  quoteDisplay.innerHTML = randomQuote;
  document.getElementById("displayQuote").style.color = "black";

}
function resetQuote(){
  let quoteDisplay = document.getElementById("displayQuote");
  quoteDisplay.innerHTML = blank;
  console.log("its working")
  document.getElementById("displayQuote").style.color = "gray";


}
