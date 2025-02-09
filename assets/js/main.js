//darkmode 
function dark(){
     document.querySelector('body').classList.add('dark');

}
dark();
 async function getusers(){

    const response= await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

     const arr = users.map(function(user){
            
         return ` 
               <div calss='users'>
               <div class='user'>
                <div>  <h1 class='name'> Name : ${user.name}</h1> </div> 
                <div> <a class='email'> Email : ${user.email}</a></div> 
                <div> <p class='phone'> Phone : ${user.phone}</p></div>
                <div>
                    Address :
                   <p class='city'> City : ${user.address.city}</p>
                   <p class='street'> Street : ${user.address.street}</p>
                </div>
                </div>
               
               </div>
       
         
         `;


     }).join('');

     document.querySelector('.users').innerHTML = arr;
      
}
getusers();
   