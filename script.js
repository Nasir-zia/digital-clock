function displaytime(){
    var d = new Date();

    var hrs = d.getHours();

    var min = d.getMinutes();

    var sec = d.getSeconds();

 

    var section = document.getElementById('section');

    if(hrs>=12){
        section.innerHTML='pm'
    }else{
        section.innerHTML='Am'
    }

    if(hrs>12){
        hrs=hrs-12;
    }

     document.getElementById('hours').innerHTML = hrs;

    document.getElementById('minutes').innerHTML = min;

     document.getElementById('second').innerHTML = sec;

     

}
setInterval(displaytime,1000);