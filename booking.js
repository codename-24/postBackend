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
    axios.get('https://crudcrud.com/api/61a17ba250e8446eb17b88b76fb0dc38/appointments')
    .then(response =>{
        for(var i=0;i<response.data.length;i++){
            showOutput(response.data[i]);
        }
        //console.log(response);
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
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    if(localStorage.getItem(user.email) !==null){
        removeFromScreen(user.email)
    }
    const parentNode = document.getElementById('display');
    const childHTML = `<li id=${details._id}> ${details.fname} - ${details.eid}
    <button onclick = remove('${details._id}')>Delete </button>
    <button onclick = editUser('${details._id}','${details.eid}','${details.fname}','${details.no}')> Edit </button></li>`
    parentNode.innerHTML = parentNode.innerHTML+childHTML;    
    
}
function editUser(id,eid,name,phone){
    if(id){
    axios.get(`https://crudcrud.com/api/61a17ba250e8446eb17b88b76fb0dc38/appointments/${id}`)
    .then(response =>{
        document.getElementById('email').value = eid;
        document.getElementById('name').value = name;
        document.getElementById('phone').value = phone;

        remove(eid);
        
    }).catch(error =>{
        console.error(error);
    })
    
    }
}
function remove(e) {
    axios.get(`https://crudcrud.com/api/61a17ba250e8446eb17b88b76fb0dc38/appointments/${e}`)
    .then(response =>{
        console.log(response);
        localStorage.removeItem(e);
        removeFromScreen(e);
    }).catch(error =>{
        console.error(error);
    })
    
}
function removeFromScreen(eid){
    const parentNode = document.getElementById('display');
    const tobedeleted = document.getElementById(eid);
    if(tobedeleted){
        parentNode.removeChild(tobedeleted);
    }
}