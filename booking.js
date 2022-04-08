document.getElementById('submit').addEventListener('click',addItem);

function addItem(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const details = {
        fname : name,
        eid : email,
        no : phone,
    }
    //localStorage.setItem(details.eid, JSON.stringify(details));
    axios.post('https://crudcrud.com/api/61a17ba250e8446eb17b88b76fb0dc38/appointments',{
        details
    }).then(response =>{
        console.log(response);
    }).catch(error =>{
        console.error(error);
    })
    showOutput(details);
}
window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/61a17ba250e8446eb17b88b76fb0dc38/appointments',{
        details
    }).then(response =>{
        console.log(response);
    }).catch(error =>{
        console.error(error);
    })
    const localStorageobj = localStorage;
    const localStoragekeys = Object.keys(localStorageobj);
    for(var i=0;i<localStoragekeys.length;i++)
    {
        const key = localStoragekeys[i];
        const userDetailString = localStorageobj[key];
        const userDetailObj = JSON.parse(userDetailString);
        showOutput(userDetailObj);
    }
})
function showOutput(details){
    
}