

let count_value=document.getElementById('h3');
let count=0;
document.getElementById('count').addEventListener('click',(e)=>{


    count+=1;

    count_value.textContent=count;

})


document.getElementById('Reset').addEventListener('click',(e)=>{


    count=0;
    // alert("done")

    count_value.textContent=count;
})