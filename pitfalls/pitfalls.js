var funcs = [];

for (var i = 0; i < 3; i++) {

  // push will create new execution context with reference to i
  funcs.push((function(i) {

    return function(){
        console.log(i);
    }
  }) (i) );

}

funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3