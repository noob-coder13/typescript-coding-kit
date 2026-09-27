function characterFrequency(input: string):Map<string,number>{
    const freq= new Map<string, number>();
    const str= input.split("");
    for(const letter of str){
        freq.set(letter, (freq.get(letter)??0)+1);
    }
    return freq;
}
console.log(characterFrequency("abhishek"));