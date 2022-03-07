// Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
function ordemArray(array1) {
    if (array1[0] >= array1[1]) {
        array1.push(array1[0]);
        array1.shift();
    }
    //console.log(array1);
}

const array1 = [300, 100];
ordemArray(array1);


//Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

const array2 = [3, 2, 1];
for (let i = 0; i <= array2.length - 1; i++) {
    for (let j = 0; j <= array2.length - 2; j++) {
        if (array2[j] > array2[j + 1]) {
            let temp = array2[j];
            array2[j] = array2[j + 1];
            array2[j + 1] = temp;
        }
    }
}
//console.log(array2);

const array3 = [1,2,3];
for (let i = 0; i <= array3.length - 1; i++) {
    for (let j = 0; j <= array3.length - 2; j++) {
        if (array3[j] < array3[j + 1]) {
            let temp = array3[j];
            array3[j] = array3[j + 1];
            array3[j + 1] = temp;
        }
    }
}
console.log(array3);