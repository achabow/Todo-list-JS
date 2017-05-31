window.onload = function ()
{
   document.getElementById('add').addEventListener('click', function(){
      var value = document.getElementById('item').value; 
      if (value){
       addItemTodo(value); 
      }  else {
          console.log('STFU !!');  
      } 
       
   });
    
function addItemTodo(text){
    var item = document.createElement('li');
    item.innerText = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    
    var add = document.createElement('button');
    complete.classList.add('complete ');
    
    }
}
