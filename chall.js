// var books = document.querySelectorAll("#book-list li .name")

// Array.from(books).forEach(function(book){
//     book.textContent += (" (book)")
// })

// const bookList = document.querySelector('ul')
// bookList.innerHTML += '<li>Think and grow</li>'

// function newFunction() {
//     bookList.innerHTML += '<li>Think and grow</li>'
// }
// newFunction()
// newFunction()

//node vs element (prev, and next siblings matter )
// var training = document.querySelector('#book-list')
// training.previousElementSibling.querySelector('p').innerHTML += "</br>make dem babes squirt"
// // console.log(training.previousElementSibling)

//DDELETING DONE TASKS
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


//ADDING LIST
const addForms = document.forms['add-challenge']

addForms.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForms.querySelector('input[type="text"]').value;
    // console.log(value);

//CREATE ELEMENT
    const li = document.createElement('li')
    const chalName = document.createElement('span')
    const deleteBtn = document.createElement('span')

//ADD CONTENT
    chalName.textContent=value
    deleteBtn.textContent= 'Done'

//ADD CLASS
    chalName.classList.add('name')
    deleteBtn.classList.add('delete')

//APPEND CHILDS
    li.appendChild(chalName)
    li.appendChild(deleteBtn)
    list.appendChild(li)
})

//HIDE CHALLENGES
    const hideChall = document.querySelector('#hide')
    hideChall.addEventListener('change', function(e){
        if(hideChall.checked){
            list.style.display = "none";
        }
        else{
            list.style.display = "initial";
        }
    });

//FILTER BOOK
    const searchBar = document.forms['search-challenge'].querySelector('input')
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const challs = list.getElementsByTagName('li');
        Array.from(challs).forEach(function(chall){
            const fit = chall.firstElementChild.textContent;
            if(fit.toLowerCase().indexOf(term) != -1){
                chall.style.display ='block';
            }else{
                chall.style.display = 'none';
            }
        })
    }) 