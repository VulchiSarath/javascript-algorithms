function reversalArrayRotation(array, d) {
	if (d == 0) {
		return;
	}
	const n = array.length;
	d = d % n;
	rotateArray(array, 0, d-1);
	console.log("1", {array: array, d: d-1});
	rotateArray(array, d, n-1);
	console.log("1", {array: array, n: n-1});
	rotateArray(array, 0, n-1);
	console.log("result", array);
	return array;
}

function rotateArray(array, start, end){
	let temp;
	while(start < end){
		temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}

reversalArrayRotation([1,2,3,4,5,6,7], 6);



