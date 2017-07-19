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
      <td> <input type="button" value="7" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="8" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="9" onclick = "getUserInput(value)"></td>
      <td><span> <input class = "operator" type="button" value="/" onclick = "getUserInput(value)"></span></td>
    </tr>
    <tr>
      <td> <input type="button" value="4" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="5" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="6" onclick = "getUserInput(value)"></td>
      <td><span> <input class = "operator" type="button" value="X" onclick = "getUserInput(value)"></span></td>
    </tr>
    <tr>
      <td> <input type="button" value="1" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="2" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="3" onclick = "getUserInput(value)"></td>
      <td><span> <input class = "operator" type="button" value="-" onclick = "getUserInput(value)"></span></td>
    </tr>
    <tr>
      <td> <input type="button" value="0" onclick = "getUserInput(value)"></td>
      <td> <input type="button" value="." onclick = "getUserInput(value)"></td>
      <td> <input class = "equalsBtn"type="button" value="=" onclick = "getUserInput(value)"></td>
      <td><span> <input class = "operator" type="button" value="+" onclick = "getUserInput(value)"></span></td>
    </tr>

  </table>
</div>
  `;
  let main = document.querySelector(".main").innerHTML = template;
  let calculatorValues = document.querySelector(".buttonCard");
  let numField = document.querySelector(".numField");


  var userButton = [];

function getUserInput(value){
  // userButton.forEach(function(buttonValue){
    userButton.push(value);
    console.log(userButton);
    console.log("value is ", value);
    numField.innerHTML += " "+value;
// });
}
// var userButton= document.getElementsByTagName('button').value;
// console.log(userButton);

// }
// function displayUserButton(){
//   console.log(userButton);
//
// }
