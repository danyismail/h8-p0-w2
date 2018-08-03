//balik kata
function balikKata(kata){

// var jumlah = kata.length //10
// var hasil = ''  
//     for(i=jumlah; i>=0; i--){
//         hasil = hasil + kata[i]
//     }
// return hasil
//ini muncul undefine
return kata.split('').reverse().join('');
  
}


console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
