function analyzeMarks() {
  const input = document.getElementById("marksInput").value;
  const marks = input.split(",").map(num => parseInt(num.trim()));
  
  if (marks.some(isNaN)) {
    document.getElementById("results").innerText = "❌ Please enter only numbers separated by commas.";
    return;
  }

  let total = 0;
  let highest = marks[0];
  let lowest = marks[0];
  let resultText = "";

  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    total += mark;

    if (mark > highest) highest = mark;
    if (mark < lowest) lowest = mark;

    const status = mark >= 40 ? "Pass" : "Fail";
    resultText += `Student ${i + 1}: ${mark} - ${status}\n`;
  }

  const average = total / marks.length;

  document.getElementById("results").innerText =
    `📊 Total Marks: ${total}\n` +
    `📈 Average Marks: ${average.toFixed(2)}\n` +
    `🏆 Highest Marks: ${highest}\n` +
    `📉 Lowest Marks: ${lowest}\n\n` +
    `🧑‍🎓 Individual Results:\n` + resultText;
}
