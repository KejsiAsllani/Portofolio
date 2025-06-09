const addForm = document.querySelector('.add');
const list = document.querySelector('.list');
const search=document.querySelector('.search input');

// Add new item to the list
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.querySelector('input').value.trim(); 

    if (todo.length) {
        addTemplate(todo);
        addForm.reset(); 
    }
});


const addTemplate = (todo) => {
    const html = `
     <li class="element">
        <i class="fa-regular fa-square-check check"></i>
        <span>${todo}</span>
    </li>
    `;
    list.innerHTML+=html;
   
};

//check item

list.addEventListener('click', e=>{
    if(e.target.classList.contains('check')){
        e.target.classList.remove('fa-regular', 'fa-square-check'); 
        e.target.classList.add('fa-solid', 'fa-square-check');
    }
});

//search

const filterTodos= (term)=>{

    Array.from(list.children)
    .filter((todo)=>!todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=>todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'));
    
};

search.addEventListener('keyup', ()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
});



