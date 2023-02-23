function getMiddle(s){
    let arr = s.split('');
    let i = Math.round(arr.length / 2 ) - 1;
    if(arr.length % 2 === 0){
     
      return arr[i] + arr[i+1];
    }else{
      
      return arr[i];
    }
}

let result = getMiddle("testing");
console.log(result);