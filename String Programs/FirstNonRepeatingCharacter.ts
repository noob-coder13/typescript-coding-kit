function firstNonRepeating(input: string): string| null{
    const freq= new Map<string, number>();
    for(const letter of input.split("")){
        freq.set(letter, (freq.get(letter)??0)+1);
    }
    for(const letter of input.split("")){
        if(freq.get(letter)===1)
            return letter;
    }
    return null;
}
console.log(firstNonRepeating("kitkat"));