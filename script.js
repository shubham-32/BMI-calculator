function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    if (height === "" || weight === "") {
      document.getElementById("result").innerHTML = "Please enter both height and weight.";
      return;
    }
  
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
    var remarks;
    if (bmi < 18.5) {
      remarks = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      remarks = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      remarks = "Overweight";
    } else {
      remarks = "Obese";
    }
  
    document.getElementById("result").innerHTML = "Your BMI is " + bmi + ". " + remarks + ".";
  }
  