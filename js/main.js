
// document.getElementById('add').addEventListener('click', getItem);
var form = document.getElementById('itemform');
var itemList = document.getElementById('list');
var searchItem = document.getElementById('searchItem');



form.addEventListener('submit', getItem);
itemList.addEventListener('click',removeItem);
searchItem.addEventListener('keyup',filterItem);

function getItem(e){

    // var item = document.getElementById('inputItem').value;
    e.preventDefault();
    
    var newitem = document.getElementById('inputItem').value;

  if(newitem === ''){
      alert('add item');
      return false;
  }
else {
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newitem));
        var delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
    
    itemList.appendChild(li);

}
}


function removeItem(e){

if(e.target.classList.contains('delete')){
    if(confirm('are you sure ?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

}

function filterItem(e){

        var val = e.target.value.toLowerCase();
        var items = itemList.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(val)!= -1){
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        })
}