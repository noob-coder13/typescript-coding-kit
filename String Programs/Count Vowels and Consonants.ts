function vowelsAndConsonants(input: string): {vowels: number, consonants: number}{
    const str= input.toLocaleLowerCase();
    const vowls= "aeiou";
    let v=0, c=0;
    for(const i of str ){
        if(i>="a" && i<="z"){
            if(vowls.includes(i))
                v++;
            else
                c++;
        }
    }
    return {vowels:v, consonants: c};
}
console.log(vowelsAndConsonants("Abhishek Rawat"));