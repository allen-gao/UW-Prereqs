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

parsePre(pr, "");

