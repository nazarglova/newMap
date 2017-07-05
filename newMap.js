'use strict';
Array.prototype.newMap = function (callback) {
	let arr = [];
	let length = this.length; // calculated once and is faster as a result
	for (let i = 0; i < length; i++) {  
		arr.push(callback(this[i], i, this, arr));
	}
	return arr;
};
let a = [5, 78, 96, 3, 4, 2, 3, 1];

let bArr = a.newMap(function (item, index, arr,nArr) {
	console.log("index: " + index)
	nArr.sort()
	console.log("nArr -"+nArr)
	return item + 1
})
console.log(bArr)
