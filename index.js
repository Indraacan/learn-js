// contoh Nan
const nilaiNan =5 * "a ";
console.log(nilaiNan);
const apakahNan = isNaN(nilaiNan) ? "lulus" : "coba lagi";
console.log(apakahNan);


// nan adalah not a number

//contoh undefined
let nilaiUndefined ;
console.log(nilaiUndefined);
const siswa = {}

//null
let nilaiNull = null;
console.log(nilaiNull);
const guru ={
    nama : null
}

const name = "River";
console.log(name);
console.log(`karakter kedua ${name.charAt(1)}`);
console.log(`karakter ${name.charAt(10)}`);
console.log(`karakter ${name.charAt(-1)}`);




console.log(name.length);

// contoh parseint
let nilaiKecepatan = "200 KM";
let nilaiAja = parseInt (nilaiKecepatan);
console.log(nilaiAja);

let nilaiNominal = "km 20";
let nilaiDepan = parseInt (nilaiNominal);
console.log(nilaiDepan);

let celcius = "34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);
// URI
const alamatWebsite = "http//wwww.ghttps://www.google.com/oogle.com"
console.log(`encode ${decodeURI (alamatWebsite)}`);

console.log();


//contoh searching for string
const kalimat = "saya ingin belajar coding agar bisa masuk peusahaan google"
const kataPencarian = "saya";
const kataDapat = kalimat.indexOf(kataPencarian)
// if (kataDapat >0){
//     console.log("kata ditemukan");
// }else {
//     console.log("kata tidak ditemukan");
    
// }

if (kalimat.includes(kataPencarian)){
    console.log(`kata didapat${kataPencarian} ditemukan di index ${kataDapat}`);
    
}else {
    console.log(`kata ${kataPencarian} tidak ditemukan`);
    
}
//contoh special character
console.log(`new line \n \n second line `);

console.log(`dia berkata "ya itu benar" `);
//learn  number
const num = 3.14;
console.log(num.toFixed(1));

//leran array
const namaSiswaImpacByte = ["sony", "frederick", "ozy", "indra", "julia"];
namaSiswaImpacByte.push("evan");
console.log(namaSiswaImpacByte);
namaSiswaImpacByte.pop();
console.log(namaSiswaImpacByte);
//array for in
for (let index in namaSiswaImpacByte){
    console.log(namaSiswaImpacByte[index]);
    
}
// learn concat
const namaSiswaUIB = ["agnes", "river", "ariq","vincent"]
const namaSiswaGlints = namaSiswaImpacByte.concat(namaSiswaUIB);
console.log(namaSiswaGlints);
console.log(namaSiswaUIB);
console.log(namaSiswaImpacByte);

// learn sorting
const namaSiswaSort = namaSiswaGlints.sort(function(a, b) {
    console.log(a,b);
    return a-b;   
})
console.log(namaSiswaSort.sort());

const number= [3,8,9,4,6]
console.log(number.sort());

// learn array join
console.log(namaSiswaGlints.join(", "));

// learn foreach
namaSiswaGlints.forEach(siswa =>{
    console.log(`nama siswa : ${siswa}`);

})

const namaSiswaAsal = namaSiswaGlints.map((item, index, array) =>{
return {
    name : index +1,
    name : item,
    asal : "Batam"
}
});
console.log(namaSiswaAsal);

const newSiswa = {
    id :10,
    name : "Budo",
    asal : "Medan"
}
namaSiswaAsal.push(newSiswa)
console.log(namaSiswaAsal);

//learn array find

const ditemukan = namaSiswaAsal.filter((item, index, array) => {
    if (item.asal == "Batam")
        return true;
    return false;

})
console.log(ditemukan);

// property value

const nama = "Babe";
const lastName = "Gokil";

// const person ={
//     nama : nama,
//     lastName : lastName
// }
const person ={
    nama,
    lastName
}
console.log(person.nama);
console.log(person.lastName);

// object assign
const bodyMeasure = {
    height : "170",
    weight : "80 Kg",
    kelas : "pekerja"
}

const PersonWithMeasure = Object.assign({}, person, bodyMeasure);
console.log(PersonWithMeasure);
console.log(person);


