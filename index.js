let logol = document.querySelectorAll('#logo-1 path');

for (let i = 0; i < logol.length; i++) {
  console.log(`Letter ${i} is ${logol[i].getTotalLength()}`);
}
