const result = document.getElementById("result");
const button = document.getElementsByClassName("number");
const mark = document.getElementsByClassName("mark");

function clickbutton(target) {
    const target_value = target.innerHTML;
    const lastCha = result.innerHTML.slice(-1);
  
    if (target_value === "AC") {
      result.innerHTML = "0";
    } else if (target_value === "=") {
      result.innerHTML = eval(result.innerHTML);
    } else {
      if (result.innerHTML === "0" && target_value !== ".") {
        result.innerHTML = target_value;
      } else {
        if (result.innerHTML === "0" && "+-*/".includes(target_value)) return;
        if (target_value === ".") {
            const currentNumber = result.innerHTML.split(/[\+\-\*\/]/).pop();
            if (currentNumber.includes(".")) return;
        }
        if ("+-*/".includes(lastCha) && "+-*/".includes(target_value)) {
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
        } else {
          result.innerHTML += target_value;
        }
      }
    }
}
