function changeColor(){
    
    let btn = document.getElementById("changeColor");
    let color = btn.style.backgroundColor;
    color = (color === 'blue') ?  'rgb(241, 86, 88)' : 'blue';
    btn.style.backgroundColor = color;
    console.log(color);
}

// Task 2: Show greeting based on time
function showGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

// Task 3: Simple calculator
function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("calcResult");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Result: Please enter valid numbers.";
  } else {
    const sum = num1 + num2;
    resultElement.textContent = "Result: " + sum;
  }
}