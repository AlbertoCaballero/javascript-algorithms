// Simple compression algorithm

/**
 * Input: aaaaaabbccddddddeeeeee
 * Output: 6a2b2c5d6e
 */

let input = "aaaaaabbccddddddeeeeee";

const lenghtCompression = (uncompressed: string) => {
    
    if (uncompressed === null || uncompressed.length === 0) return "";

    let list = [...uncompressed];
    let compressed: string[] = [];
    let counter = 1;
    list.map((element, index, array) => {
        if (element === array[index - 1]) {
            counter++;
            compressed[compressed.length - 1] = `${counter}${element}`;
        } else {
            counter = 1;
            compressed.push(`${index - compressed.length}${element}`);
        }
    })
    return compressed.join('');
};

console.log(`Input: ${input}`);
console.log(`Output: ${lenghtCompression(input)}`);

