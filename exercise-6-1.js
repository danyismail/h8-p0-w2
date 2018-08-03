//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')
a=2
while(a <= 20){
    console.log(a + ' ' + ' - ' + ' ' + 'I love coding')
    a+=2
}
console.log('')

console.log('LOOPING KEDUA')//tambah judul looping
b=20
while(b >= 2){
   console.log(b + ' ' + '-' + 'I' + ' ' + 'Will' + ' ' + 'become' + ' ' + 'stack' + ' ' + 'developer')
    b-=2
}

//2. Melakukan Looping Menggunakan For
for(c=1; c<=20; c++){
    console.log(c + ' ' + ' - ' + ' ' + 'I love coding')
}

console.log('')
for(d=20; d>=1; d--){
    console.log(d + ' ' + '-' + 'I' + ' ' + 'Will' + ' ' + 'become' + ' ' + 'stack' + ' ' + 'developer')
}

//3. Angka Ganjil dan Genap
for(i=1; i<=100; i++){
    if(i%2 == 0){
        console.log(i + ' ' + 'adalah bilangan GENAP')
    }else{
        console.log(i + ' ' + 'adalah bilangan GANJIL')
    }
}

console.log('')

for(j=1; j<=100; j+=2){
    if(j%3 == 0){
        console.log(j + ' ' + 'KELIPATAN 3')
    }else{
        console.log(j)
    }
}
console.log('')
for(k=1; k<=100; k+=5){
    if(k%6 == 0){
        console.log(k + ' ' + 'KELIPATAN 6')
    }else{
        console.log(k)
    }
}
console.log('')
for(n=1; n<=100; n+=9){
    if(n%10 == 0){
        console.log(n + ' ' + 'KELIPATAN 10')
    }else{
        console.log(n)
    }
}
