const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if(text=="")
    return;
  const parent = document.createElement('div');
  parent.style.marginTop = "20px";

  const taskName = document.createElement('span');
  taskName.textContent = text;
  taskName.style.marginRight = "20px";

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.style.width = "50px"


  const doneButton = document.createElement('button');
  doneButton.textContent = "Done";
  doneButton.style.width = "50px"
  doneButton.style.marginRight = "10px"

  parent.append(taskName,doneButton, deleteButton);
  allTask.append(parent);

  deleteButton.addEventListener('click', ()=>{
    parent.remove();
  })

  doneButton.addEventListener('click', () => {
   taskName.style.color = 'grey';
   taskName.style.textDecoration = 'line-through' 
  })

  form.reset();

})