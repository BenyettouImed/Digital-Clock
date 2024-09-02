document.addEventListener('DOMContentLoaded', ()=>{
    const hours = document.getElementById('hours');
    const mins = document.getElementById('mins');
    const secs = document.getElementById('secs');

    
    setInterval(() =>{
        let currentTime = new Date();
        if (currentTime.getSeconds() < 10){
            secs.textContent='0'+currentTime.getSeconds();
        }
        else{
            secs.textContent=currentTime.getSeconds();
        }
        if (currentTime.getMinutes() < 10){
            mins.textContent='0'+currentTime.getMinutes();
        }
        else{
            mins.textContent=currentTime.getMinutes();
        }
        if (currentTime.getHours() < 10){
            hours.textContent='0'+currentTime.getHours();
        }
        else{
            hours.textContent=currentTime.getHours();
        }
        
    },1000)
    
})

