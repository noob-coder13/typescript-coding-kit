function reverseString(input: string): string{
    const str= input.split();
    let left=0;
    let right= str.length;
    while (left<right) {
        [str[left], str[right]]= [str[right], str[left]];
        left++;
        right--;
    }
    return str.join("");
}
console.log(reverseString("Abhishek"));
console.log(`reverse string: ${reverseString("")}`);
