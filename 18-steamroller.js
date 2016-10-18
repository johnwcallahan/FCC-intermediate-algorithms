// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	flattened = []; 
	function flatten(elem) { 
		if (!Array.isArray(elem)) { 
			flattened.push(elem);
		} else { 
			for (i = 0; i < elem.length; i++) { 
				flatten(elem[i])
			}
		}
	
	}	
	arr.forEach(flatten); 
	return flattened;n
}

console.log(steamrollArray([[[3,1]], 1, [[2, 1]]]))