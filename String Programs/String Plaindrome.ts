function stringPlaindrome(input: string): boolean{
    const str= input.toLocaleLowerCase();
    let left=0;
    let right= str.length-1;
    while(left<right){
        if(str[left]!=str[right]){
            return false;
        }
        left++;
        right--   
    }
    return true;
}
console.log(`Reverse String: ${stringPlaindrome("Abhishek")}`);