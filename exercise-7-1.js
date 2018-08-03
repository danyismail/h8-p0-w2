//1. Menyusun Barisan Bintang
var rows1   = 5
for(i=1; i<=rows1; i++){
    console.log('*')
}
console.log('')

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2   = 5
var hash    = ''
for (i=1; i<=rows2; i++) {
    for (j=1; j<=rows2; j++){
        hash += '*'
    }
    hash += '\n'    
}
console.log(hash)

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows2   = 5
var hash    = ''
for (i=1; i<=rows2; i++) {
    for (j=1; j<=i; j++){
        hash += '*' 
        
    }
hash += '\n'        
}
console.log(hash)