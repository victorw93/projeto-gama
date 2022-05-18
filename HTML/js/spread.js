let lista = [1, 2, 5];
let listaIncluir = [3, 4];

//Exibir as arrays

console.log(lista);
console.log(listaIncluir);

//Laços de repetição para inclusão nos Arrays
for(let i = 0; i < listaIncluir.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}

//Resultado final

console.log(lista);