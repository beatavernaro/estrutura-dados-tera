/* encontre um par cuja soma seja igual ao número fornecido.

Entrada: 
array = [8, 7, 2, 5, 3, 1]
soma = 10
 
Saída: 
Par encontrado (8, 2)
ou
Par encontrado (7, 3)


Entrada: 
array = [5, 2, 6, 8, 1, 9]
soma = 12
 
Saída: 
Nenhum par encontrado */



function pares(array, soma) {
    console.log(`== Array: ${array} | Soma: ${soma} ==`);
    array.sort();
    var par = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        var dif = soma - (array[i]);
        for (let j = (array.length - 1); j >= Math.floor(array.length / 2); j--) {

            if (array[j] == dif && array[i] != array[j]) {
                par = 1;
                console.log(`Par encontrado: ${dif} | ${array[i]}`);
            }

        }

    }
    if (par == 0) {
        console.log("Par não encontrado");
    }
}

const array1 = [8, 7, 2, 5, 3, 1];
const array2 = [5, 2, 6, 8, 1, 9];
pares(array1, 10);
pares(array2, 12);





