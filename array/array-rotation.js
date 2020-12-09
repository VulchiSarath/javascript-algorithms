
function arrayRotation(array, d, n) {
	for (let i = 0; i < d; i++) {
		let aryShift = array.shift();
		array.push(aryShift);
	}
	console.log(array);
	return array;
}

arrayRotation([1, 2, 3, 4, 5, 6, 7], 2, 7);