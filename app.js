//VİZE1 %30, VİZE2 %30, FİNAL %40

let vize1 = Number(prompt("Vize1 notunuzu giriniz:"));
let vize2 = Number(prompt("Vize2 notunuzu giriniz:"));
let final = Number(prompt("Final notunuzu giriniz:"));


let ortalama = (vize1 * 0.3) + (vize2 * 0.4) + (final * 0.4);

if (ortalama >= 60) {
    alert("Dersten geçtiniz tebrikler" +" "+ ortalama);

}
else {
    alert("Dersten kaldınız" +" "+ ortalama);
}
   