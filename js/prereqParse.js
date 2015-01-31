//parsePre: Array [Num, String, String....] (Empty String) -> NULL
//Effects: Logs the elements in the array
var parsePre = function (pre, tabStr){
  for(var i = 0; i < pre.length; i++){
    if(typeof pre[i] === 'number'){
      console.log(tabStr + pre[i] + "of: ");
    }
    else if(typeof pre[i] === 'string'){
      if(i === pre.length - 1){
          console.log(tabStr + pre[i]);
      }
      else {
        console.log(tabStr + pre[i] + ", ");
      }
    }
    else {
      parsePre(pre[i], tabStr + "  ");
    }
  }
}