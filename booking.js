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
function showOutput(details){
    document.getElementById('display').innerHTML = 
    `<h4>Bookings</h4>
    <table>
    <tr>
    <th>Name</th>
    <th>E-mail</th>
    <th>Phone</th>
    </tr>
    <tr>
    <td>${JSON.stringify(details.fname)} </td>
    <td>${JSON.stringify(details.eid)} </td>
    <td>${JSON.stringify(details.no)} </td>
    </tr>`
}