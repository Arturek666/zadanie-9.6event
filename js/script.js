

var list = document.getElementById('list'),
 add = document.getElementById('addElem');

add.addEventListener('click', function() {
	console.log(this);
	var element = document.createElement('li');
	var getlist = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + getlist.length;
	list.appendChild(element);
});
console.log(list);
console.log(this);