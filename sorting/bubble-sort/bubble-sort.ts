function bubbleSort(array: number[]): number[] {
    array = array.slice() // Cria uma copia do Array
    console.log(array) // Printa o array no console
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                console.log(array); // Printa o array com o valor trocado
            }
        }
    }
    return array; // Retorna o array
}

bubbleSort([9, 2, 3, 7, 5, 4, 15]); // Declara o array