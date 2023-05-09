function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let bmi = (weight ) / height^2()

  if (bmi < 18.5){
alert("you are underweight")
  }
else if (18.5 < bmi < 24.9){
alert("your weight is healthy")

}
else if (25.0< bmi < 29.9){
  alert("you are overweight")
  }

  else if (bmi >= 30.0){
    alert("you are obes")
    }

}
