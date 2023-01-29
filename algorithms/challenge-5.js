function filterList(arr) {
    return arr.filter(function(item) {
        return typeof item === "number" && item >= 0;
    });
}


  module.exports =filterList