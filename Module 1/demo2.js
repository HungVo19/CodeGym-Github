keyboards=[3,1]
drives = [5,2,8]

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