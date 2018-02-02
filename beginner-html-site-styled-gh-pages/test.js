function myFunction(x, y) {
    console.log(x);
    console.log(y);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    console.log(arguments['0']);
    console.log(arguments.0);
}