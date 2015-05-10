//parsePre: Array [Num, String, String....] (Empty String) -> NULL
//Effects: Logs the elements in the array
var flat = function(lst){
      var isflat = true;
      var flattened = lst;

      for(var i = 0; i < lst.length; i++){
        console.log("FIRST " + lst[i]);

        if(typeof lst[i] === 'object'){
          isflat = false;
          console.log("Isflat1: " + isflat);
        }
      }

      if(isflat === false){
        console.log("isFlat2: " + isflat);
        flattened = lst.reduce(function(a, b) {
            return a.concat(b);
        });
        console.log("flattened: " + flattened);
        return flat(flattened);
      }
      else {
        return flattened;
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
var pr = ['a', 'b', 'c']//stuff.prerequisites_parsed;
//console.log(pr);
flattened = pr.reduce(function(a, b) {
            return a.concat(b);
        });
console.log(pr);