// let arr = word.split("");
// let newArr = [];
// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
//     'm','n','o','p','q','r','s','t','u','v','w','x','y','z',];
// for (let i =0; i<arr.length; i++){
//     for (let j=1; j<26; j++){
//         ;            if(arr[i]== alphabet[j]){
//             newArr.push(h[j]);
//         }
//     }
// }
//
// newArr.sort(function(a,b){return a-b})
//
// let square = newArr[newArr.length-1]*word.length;
//
// return square;
//
//
// }
keyboards=[3,1]
drives = [5,2,8]
b=10
let max = keyboards[0]+drives[0];
for (let i=0;i<keyboards.length;i++){
    for (let j = 0; j<drives.length;j++){
        if(max < keyboards[i]+drives[j]){
            max = keyboards[i]+ drives[j];
        }
    }
}
if (max > b){
    max = -1;
} else {
    max = max
}