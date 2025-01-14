// recursive factorial

const calculateFactorial = (n) => {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
};

const handleCalculate = () => {
  const input = document.getElementById("number");
  const recursiveResult = document.getElementById("Result");

  const value = input.value;
  const num = parseInt(value);

  if (value === "" || isNaN(num) || num < 0) {
    recursiveResult.textContent = "Please enter a valid non-negative number.";
    return;
  }

  const factorial = calculateFactorial(num);
  recursiveResult.textContent = `Recursive Factorial: ${factorial}`;
};

document.getElementById("calcBtn").addEventListener("click", handleCalculate);
