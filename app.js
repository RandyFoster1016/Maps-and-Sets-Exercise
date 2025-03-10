//Quick Question #1

new setInterval([1,1,2,2,3,4,]) //{1,2,3,4}

//Quick Question #2
 
[...new Set("referee")] .join("") // 'ref'

//Quick Questions #3

let m = new Map ();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
0: {Arraay(#) => true}
1: {Array(3) => false}
*/

//hasDuplicate

hasDuplicate([1,3,2,1]) //true
hasDuplicate([1,5,-1,4]) //false

const hasDuplicate = arr => new Set (arr) .size !== arr.length

//vowelCount

vowelCount('awesome') //Map{ 'a' => 1, 'e' => 2, 'o' => 1}
vowelCount('Colt') //Map{'o' => 1}

function isVowel (char){
return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        }else {
            vowelMap.set(lowerCaseChar, 1);
        }
        }
    }
    return vowelMap;
}
