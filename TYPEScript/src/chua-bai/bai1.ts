export const twoSum = (listNumber: number[], taget: number): number []=>{
    for (let i=0; i<listNumber.length; i++){
        for(let j= i+1; j<listNumber.length; j++){
            if(listNumber[i]+listNumber[j]==taget){
                return [i,j]
            }
        }
    }
    return[];
}