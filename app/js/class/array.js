document.write('es6数组扩展');
{
	let arr = Array.of(1,2,3,4,5);
	console.log(arr);
}
{
	for(let keys of ['a','b','c',1,2,3].keys()){

		console.log('keys',keys);
	};

	for(let [keys,values] of ['a','b','c',1,2,3].entries()){
		console.log(keys,values);
	}

}

{
	let arr=[1,3,5];
	let narr = Array.from(arr,(item)=>item*2);
	console.log(narr);
}

{
	function isBigEnough(element) {
  		return element >= 15;
	}

	console.log([12, 5, 8, 130, 44].find(isBigEnough));
}

{
	let arr=[2,4,6,8,9];
		console.log(arr.includes(10));
		console.log(arr.includes(8));
}

{
	let arr1=[1,2,3];
	let	arr2=[3,4,5];
	console.log(arr1.concat(arr2));
}
{
	let arr =[2,5,7,8,'u','w'];
	arr.forEach((value,index)=>console.log(index,value))
}
