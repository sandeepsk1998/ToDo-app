

let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// Add button disbled

input.addEventListener('keyup', () => {
  
  if (input.value.trim() != 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }

});

// Add new Item

addBtn.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
     <p>${input.value}</p>
     <div class="item-btn">
         <i class="fa-regular 
         fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
     </div>
     `

    tasks.appendChild(newItem);
    input.value = '';
  }
  else {
    alert("Please enter a valid task");
  }
});

//dlete the Item

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.
    toggle('.completed');
  }
});

