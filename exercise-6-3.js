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