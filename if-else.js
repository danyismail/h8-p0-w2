// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var namaKsatria = ''
var peran = ''
var hello = 'Selamat datang di Dunia Proxytia'

if(namaKsatria === '' && peran === ''){
    console.log('Nama dan peran harus diisi!')
}   else if(namaKsatria === 'Mikael' && peran === '')   {
    console.log('')
    console.log(  'Halo Mikael, Pilih peranmu untuk memulai game')
}   else if(namaKsatria === 'Nina' && peran === '') {
    console.log( 'Halo Nina, Pilih peranmu untuk memulai game')
}   else if(namaKsatria === 'Danu' && peran === '') {
    console.log( 'Halo Danu, Pilih peranmu untuk memulai game')
}   else if(namaKsatria === 'Zero' && peran === '') {
    console.log( 'Halo Zero, Pilih peranmu untuk memulai game')
}   else if(namaKsatria === 'Nina' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia,'+ namaKsatria)
    console.log( 'Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')
}   else if( namaKsatria === 'Danu' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia,'+ namaKsatria)
    console.log( 'Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')   
}   else if(namaKsatria === 'Zero' && peran === 'Penyihir'){
    console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!')
    console.log('Selamat datang di Dunia Proxytia,'+ namaKsatria)
}
