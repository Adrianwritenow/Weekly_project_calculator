var template = `
<div class = buttonCard>
  <table class = topRow>
    <tr>
      <td style= width:20.6%><input class = "clearBtn" type="button" value="C"></td>
      <td style= width:60% class = "numField" ></td>
    </tr>
    </table>
    <table>
    <tr>
      <td> <input class = "numButton" type="button" value="7" ></td>
      <td> <input class = "numButton" type="button" value="8" ></td>
      <td> <input class = "numButton" type="button" value="9"></td>
      <td><span> <input class = "operator" type="button" value="/" ></span></td>
    </tr>
    <tr>
      <td> <input class = "numButton" type="button" value="4"></td>
      <td> <input class = "numButton" type="button" value="5"></td>
      <td> <input class = "numButton" type="button" value="6"></td>
      <td><span> <input class = "operator" type="button" value="*" ></span></td>
    </tr>
    <tr>
      <td> <input class = "numButton" type="button" value="1" ></td>
      <td> <input class = "numButton" type="button" value="2" ></td>
      <td> <input class = "numButton" type="button" value="3" ></td>
      <td><span> <input class = "operator" type="button" value="-" ></span></td>
    </tr>
    <tr>
      <td> <input class = "numButton" type= "button" value = "0" ></td>
      <td> <input class = "numButton" type="button" value="." ></td>
      <td> <input class = "equalsBtn" type="button" value="=" ></td>
      <td><span> <input class = "operator" type="button" value="+"></span></td>
    </tr>

  </table>
</div>
  `;
let main = document.querySelector(".main").innerHTML = template;
let calculatorValues = document.querySelector(".buttonCard");
let numField = document.querySelector(".numField");
var numButtons = document.querySelectorAll(".numButton");
var clearInput = document.querySelector(".clearBtn")
var operators = document.querySelectorAll(".operator");
var equals = document.querySelector(".equalsBtn")


var userButton = [];
console.log(userButton);

let getUserInput = function(event) {
  userButton.push(event.target.value);
  numField.innerHTML += "" + event.target.value;

  for (var i = 0; i < userButton.length; i++) {
    if (parseInt(userButton[i - 1]) && parseInt(userButton[i]) || userButton[i] === "0") {
      value = userButton[i - 1] + userButton[i];
      console.log(userButton);
      userButton.pop()
      userButton.splice(userButton[1 + i], userButton[i]);
      userButton.pop()
      userButton.push(value);
    }
  }
  console.log(userButton);
}

let clearUserInput = function(event) {
  userButton = [];
  numField.innerHTML = " ";
}

let doMath = function(event) {
  userButton.push(event.target.value);
  numField.innerHTML += " " + event.target.value;
  console.log(userButton)
}

let getAnswer = function(event) {
  numField.innerHTML = " ";
  for (var i = 0; i < userButton.length; i++) {
    if (parseInt(userButton[i])) {
      userButton[i] = parseInt(userButton[i]);
    }
    //working on elminiating functions to a switch case//

    // if (userButton.includes("*"||"/"||"+"||"-")){
    //   let operatorIndex = userbutton.indexOf();
    //   var value = (userButton[operatorIndex - 1])  (parseInt(userButton[operatorIndex+1]));
    //   numField.innerHTML = value;
    //   userButton.splice(0,3);
    //   userButton.push(value);
    //   console.log(userButton);
    // }

    // completes the problem based on operator//
    if (userButton.includes("*")) {
      let operatorIndex = userButton.indexOf('*');
      var value = (userButton[operatorIndex - 1] * parseInt(userButton[operatorIndex + 1]));
      numField.innerHTML = value;
      userButton.splice(0, 3);
      userButton.push(value);
      console.log(userButton);
    }
    if (userButton.includes("/")) {
      let operatorIndex = userButton.indexOf('/');
      var value = (userButton[operatorIndex - 1] / parseInt(userButton[operatorIndex + 1]));
      numField.innerHTML = value;
      userButton.splice(0, 3);
      userButton.push(value);
      console.log(userButton);
    }
    if (userButton.includes("+")) {
      let operatorIndex = userButton.indexOf("+");
      var value = (userButton[operatorIndex - 1] + parseInt(userButton[operatorIndex + 1]));
      numField.innerHTML = value;
      userButton.splice(0, 3);
      userButton.push(value);
      console.log(userButton);
    }
    if (userButton.includes("-")) {
      let operatorIndex = userButton.indexOf('-');
      var value = (userButton[operatorIndex - 1] - parseInt(userButton[operatorIndex + 1]));
      numField.innerHTML = value;
      userButton.splice(0, 3);
      userButton.push(value);
      console.log(userButton);
    }
  }
}


equals.addEventListener("click", getAnswer);

clearInput.addEventListener("click", clearUserInput);

for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", getUserInput);
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", doMath);
}
