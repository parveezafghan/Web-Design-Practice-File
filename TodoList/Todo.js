

let Todo_add=document.getElementById("Todo_add");



document.getElementById("form").addEventListener('submit',(e)=>{


    e.preventDefault();
// alert("on")

    let text=document.getElementById('text').value;
    console.log(text);

    let id=100;
    
    Todo_add.innerHTML+=`<h3 id="${id}">${text}</h3>`;

})