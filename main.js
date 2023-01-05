const tasks = document.querySelector('.tasks')
const myInp = document.querySelector('.add-task input')
const myBtn = document.querySelector('.add-task button')

myBtn.click()
myBtn.addEventListener('click', function(){
   if(myInp.value == 0) alert('sheavse inputi')
   else  addTodo()
})
const addTodo = function(event){ 
   const todoDiv = document.createElement('div')
   todoDiv.classList.add('todo-div')
   const todoINput = document.createElement('input') 
   todoINput.classList.add(`todo-input`)
   todoDiv.appendChild(todoINput)
   todoINput.disabled = true
   const editBtn = document.createElement('button')
   editBtn.classList.add(`edit-btn`)
   editBtn.innerText = 'EDIT'
   todoDiv.appendChild(editBtn)
   const deleteBtn = document.createElement('button')
   deleteBtn.classList.add('delete-btn')
   deleteBtn.innerText = 'DELETE'
   todoDiv.appendChild(deleteBtn)
   tasks.appendChild(todoDiv)
   todoINput.value = myInp.value
   myInp.value = ''
  
   editBtn.addEventListener('click', function(){
       if(editBtn.innerText == 'EDIT') {
         todoINput.disabled = false
        editBtn.innerText = 'SAVE'
        todoINput.style.color = 'var(--pink)'
} else{
   todoINput.disabled = true
   editBtn.innerText = 'EDIT'
   todoINput.style.color = 'var(--light)'
}})
deleteBtn.addEventListener('click', function(){
   todoDiv.parentNode.removeChild(todoDiv)
   todoINput.parentNode.removeChild(todoINput)
   editBtn.parentNode.removeChild(editBtn)
   deleteBtn.parentNode.removeChild(deleteBtn)
})}