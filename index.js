let logol = document.querySelectorAll('#logo path');

for (let i = 0; i < logol.length; i++) {
  console.log(`Letter ${i} is ${logol[i].getTotalLength()}`);
}
