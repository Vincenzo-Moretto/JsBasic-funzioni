/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

const crazySum = function (num1, num2) {
  //num1 numero 1, num2 numero 2
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

console.log(crazySum(8, 8));
console.log(crazySum(8, 7));
document.getElementById("crazySum").innerHTML = crazySum(8, 8) + " e " + crazySum(8, 7);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log("Printa True o folse", boundary(3));
console.log("Printa True o folse", boundary(23));
document.getElementById("boundary").innerHTML = boundary(400) + " e " + boundary(8);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString = function (str) {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let finalString = reverseString.join("");
  return finalString;
};
console.log(reverseString("EPICODE"));
document.getElementById("reverseString").innerHTML = reverseString("EDOCIPE") + " e " + reverseString("EPICODE");
console.log(reverseString("EDOCIPE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

const upperFirstPhrase = function (str) {
  let words = str.split(" ");
  /*   console.log(words);
  let words1 = str.split("");
  console.log(words1); */
  let finalString = [];
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0);
    let uppercaseChar = firstChar.toUpperCase();
    let cutString = words[i].slice(1);
    let finalWord = uppercaseChar + cutString;
    finalString.push(finalWord);
  }
  return finalString.join(" ");
};

console.log(upperFirstPhrase("hello world"));
document.getElementById("upperFirst").innerHTML = upperFirstPhrase("hello world");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};
console.log(giveMeRandom(8));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};
const areaResult = area(6, 8);
console.log(areaResult);
document.getElementById("area").innerHTML = " l'area è " + area(6, 8);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
};
console.log(crazyDiff(3));

const crazyDiff1 = function (num) {
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return num - 19;
  }
};
console.log(crazyDiff1(20));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function (str) {
  if (str.startsWith("code") /* true / false */) {
    return str;
  } else {
    return "code " + str;
  }
};
console.log(codify("coders")); // ritorna coders
document.getElementById("codify").innerHTML = codify("Ritorna coders") + " " + codify("Ritorna code + Hello");
console.log(codify("Hello")); // ritorna code Hello

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

const check3and7 = function (n) {
  if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(check3and7(3));
console.log(check3and7(20));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString = function (str) {
  return str.slice(1, str.length - 1);
};
console.log(cutString("EPICODE"));
document.getElementById("cutString").innerHTML = cutString("EPICODE");
