var x=3;
var y=7;

function segednelkul(x,y) {
    x=x+y;
    y=x-y;
    x=x-y;
    console.log("x :"+x+" y :"+y);
}

function segeddel1(x,y) {

    var temp=x;
    x=y;
    y=temp;
    console.log("x :"+x+" y :"+y);
}

function segeddel2(x,y) {

    var temp= x+y;
    y=temp-y;
    x=temp-x;

    console.log("x :"+x+" y :"+y);
}

function tombbel(x,y) {
    var array =[];
    array.push(x);
    array.push(y);
    x=array[1];
    y=array[0];

    console.log("x :"+x+" y :"+y);
}

console.log("segédváltozó nélküli megoldás:");
console.log("x :"+x+" y :"+y);
segednelkul(x,y);

console.log("\nsegédváltozóval történő megoldás:");
console.log("x :"+x+" y :"+y);
segeddel1(x,y);

console.log("\nsegédváltozóval történő megoldás 2:");
console.log("x :"+x+" y :"+y);
segeddel2(x,y);

console.log("\ntömb segítségével történő megoldás 2:");
console.log("x :"+x+" y :"+y);
tombbel(x,y);