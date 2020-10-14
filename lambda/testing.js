

result = [ { result: 'H' } ]


if(result.hasOwnProperty('H')) {
    console.log(" Win");
}
if(result.hasOwnProperty('A')) {
    console.log(" Win");
}

console.log(result);

Object.keys(result).forEach(function(key) {
    var row = result[key];
    console.log(row.result);
});