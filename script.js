const input = document.querySelector("input");
const list = document.querySelector('ul');
input.addEventListener('keyup', add);

function add(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML += input.value;
        list.appendChild(newLi);
        input.value = '';
    }
}
       

        
    