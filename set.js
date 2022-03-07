const set1 = new Set([1,2,3,4,5]);
console.log(set1);
console.log(set1.has(3));
console.log(set1.has(10));

for(let cadaUm of set1){ // printar cada item
    console.log(cadaUm);
}
set1.add(6)
console.log(set1.size); // retorna quantidade de itens no set

var array = [...set1]; // de set para array
console.log(array[3]);

// tirando elementos duplicados da array
var arrayDupla = [1,1,2,2,3,3,4,4,5,5,6,6];
const setArrayDupla = new Set(arrayDupla);
arrayDupla = [...setArrayDupla];
console.log(arrayDupla);
console.log(setArrayDupla);
console.log(arrayDupla);