var istatus = document.querySelector("h5")
var flag = 0;
var addFriend = document.querySelector("#add")
// var removeFriend = document.querySelector('#remove')
addFriend.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML= 'Friend';
        istatus.style.color="green";
        addFriend.innerHTML="Remove Friend";
        
        flag=1;
    }else{
        istatus.innerHTML= 'Stranger';
        istatus.style.color="red";
        addFriend.innerHTML="Add Friend";
        flag=0;
    }
    
})

// removeFriend.addEventListener('click',function(){
//     istatus.innerHTML="stranger";
//     istatus.style.color="red";
// })