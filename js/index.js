(function(){
    var actulizadahora = function(){
        var fecha = new Date();
        var ampm;
        // obtengos los valoros de la fecha 
        var horas = fecha.getHours();
        var minutos= fecha.getMinutes();
        var segundos= fecha.getSeconds();
        var diasemana=fecha.getDay();
        var dia=fecha.getDate();
        var mes=fecha.getMonth();
        var años=fecha.getFullYear();

        var phoras=document.getElementById("horas");
        var pminutos=document.getElementById("minutos");
        var psegundos=document.getElementById("segundos");
        var pampm=document.getElementById("ampm")
        var pdiasemana=document.getElementById("diaSemana");
        var pdia=document.getElementById("dia");
        var pmes= document.getElementById("mes");
        var paños=document.getElementById("year");
       
        // aqui esta todo lo que es dias meses y año 
        var semana=["domingo","lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
        pdiasemana.textContent=semana[diasemana];
        pdia.textContent=dia;
        var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
        pmes.textContent=meses[mes];
        paños.textContent=años;
        // vamos con las horas y minutos y segundos 
        if(horas>=12){
            horas=horas-12;
            ampm="PM";
        }else{
            ampm="AM";
        }
        if(horas==0){
            horas=12;
        }
        phoras.textContent=horas;
        if(minutos<10){
            minutos="0"+minutos;
        }
        if(segundos<10){
            segundos="0"+segundos;
        }
        pminutos.textContent=minutos;
        psegundos.textContent=segundos;
        pampm.textContent=ampm

    };

    actulizadahora();
    var intervalor=setInterval(actulizadahora,1000);
}());