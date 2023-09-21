// 1. Scrieți o funcție care returnează pătratul unui număr

function findSquare(nr) {
  console.log(`Patratul numarului ${nr} este:`);
  return Math.pow(nr, 2);
}

console.log(findSquare(3));
console.log(findSquare(5));
console.log(findSquare(12));
console.log("------------------------------------------");

// 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

function getNumarRandom(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

console.log(getNumarRandom(3, 4));
console.log(getNumarRandom(1, 9));
console.log("------------------------------------------");

// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

function letterCount(sir, litera) {
  let count = 0;
    for (let i = 0; i < sir.length; i++) {
        if (sir[i].toLowerCase() === litera.toLowerCase()) {
            count++;
        }
    }
  console.log(`Numarul aparitiei literei "${litera}" in sirul "${sir}" este:`);
    return count;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Iarna este frig", "i"));
console.log("------------------------------------------");

// 4. Scrieți o funcție pentru a adăuga numere nelimitate

function addNumber(...numere) {
  const sum = numere.reduce((acumulator, element) => acumulator + element, 0);
  console.log(`Suma numerelor ${numere} este:`)
  return sum;
}

console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
console.log("------------------------------------------");