//parsePre: Array [Num, String, String....] (Empty String) -> NULL
//Effects: Logs the elements in the array
var parsePre = function (pre, tabStr){
  for(var i = 0; i < pre.length; i++){
    var arr = [];
    if(typeof pre[i] === 'number'){
      arr[i] = tabStr + pre[i] + "of: ";
      console.log(arr[i]);
    }
    else if(typeof pre[i] === 'string'){
      if(i === pre.length - 1){
          arr[i] = tabStr + pre[i]
          console.log(arr[i]);
      }
      else {
        arr[i] = tabStr + pre[i] + ", ";
        console.log(arr[i]);
      }
    }
    else {
      arr[i] = parsePre(pre[i], tabStr + "  ");
      console.log(arr[i]);
      return arr[i];
    }
  }
}
var stuff = {
  "subject":"PHYS",
  "catalog_number":"375",
  "title":"Stars",
  "prerequisites":"Prereq: PHYS 112 or 122 and two of PHYS 234, 241, 242, 256, 258\/358, 263, 275",
  "prerequisites_parsed":[
    [ 1, "PHYS112", "PHYS122" ],[ 2,"PHYS234","PHYS241","PHYS242","PHYS256",
                                  [ 1, "PHYS258", "PHYS358"],
                                  "PHYS263", "PHYS275"]]
};
var pr = stuff.prerequisites_parsed;

console.log(parsePre(pr, ""));