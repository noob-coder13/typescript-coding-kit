function titleCase(input: string): string{
    return input.split(" ").map(word=> word.length===0? word: word[0].toUpperCase()+ word.slice(1)).join();
}
console.log(titleCase("Abhishek"));