function anagramString(a: string, b: string): boolean{
    const str1= a.toLowerCase();
    const str2= b.toLowerCase();
    if(str1.length!== str2.length){
        return false;
    }
    const freqStr1= new Map<string, number>();
    const freqStr2= new Map<string, number>();
    for(const letter of str1){
        freqStr1.set(letter, (freqStr1.get(letter)??0)+1)
    }
    for(const letter of str2){
        freqStr2.set(letter, (freqStr2.get(letter)??0)+1);
    }
    if(freqStr1.size !== freqStr2.size){
        return false;
    }
    for(const [ch,count] of freqStr1){
        if(freqStr2.get(ch)!== count){
            return false;
        }
    }
    return true;

}