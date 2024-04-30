const code = require("./code.js");
const assert = require("assert");

function checker(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

var test1 = code.depthFirstSearch([], 1, 2);
var test1sol = [];
var test2 = code.depthFirstSearch([[1, 2], [0, 2], [0, 1]], 0, 2);
var test2sol = [0, 2];
var test3 = code.depthFirstSearch([[1], [0, 2], [1, 3], [2, 4], [3]], 0, 4);
var test3sol = [0, 1, 2, 3, 4];
var test4 = code.depthFirstSearch([[1, 2], [0, 2], [0, 1]], 0, 4);
var test4sol = [];

assert(checker(test1, test1sol));
assert(checker(test2, test2sol));
//assert(checker(test3, test3sol));
assert(checker(test4, test4sol));

var test5 = code.breadthFirstSearch([], 1, 2);
var test6 = code.breadthFirstSearch([[1, 2], [0, 2], [0, 1]], 0, 2);
var test7 = code.breadthFirstSearch([[1], [0, 2], [1, 3], [2, 4], [3]], 0, 4);
var test8 = code.breadthFirstSearch([[1, 2], [0, 2], [0, 1]], 0, 4);

assert(checker(test5, test1sol));
assert(checker(test6, test2sol));
assert(checker(test7, test3sol));
assert(checker(test8, test4sol));