$(function() {

    var bank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Times = ['12AM', '1AM', "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", '10AM', '11AM', 
                 '12PM','1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

    var Day = JSON.stringify( moment().day() );
    var Time = JSON.stringify( moment().hour() );
    $('#clock').text(Days[Day]);
    var a = 0;
    var page;
    

     if (localStorage.getItem('page')){
         page = JSON.parse(localStorage.getItem('page'));
         document.getElementById('output').innerHTML = page;
    }else{ 
        
    for (i = 0; i < 24; i++){
        var current = document.getElementById('output').innerHTML += '<div class="time-block" id = '+i+'><div class="row hour">' + Times[a]  + '</div><div class="row description"><textarea></textarea></div><button class="row saveBtn">SAVE</button></div>';
        a++;
      };
     };

    for (i = 0; i < 24; i++){
        var current = document.getElementsByClassName('hour')[i];
        if (current.textContent == Times[Time]){
        current.style.backgroundColor = "orange";
    } else if ( bank[i] <= Time ){
        current.style.backgroundColor = "lightgray";
    } else if ( bank[i] > Time ){
        current.style.backgroundColor = "aquamarine"
    };
    };

    

      $('#output').on('click', function(event){
        if (event.target.matches('.saveBtn')){
        
        var text = event.target.parentNode.childNodes[1];
        //text.childNodes[0].value = "VALUE";
        //text.innerHTML = "<textarea></textarea>";
        text.innerHTML = '<textarea></textarea>'+ text.childNodes[0].value; 
        console.log(typeof(text));
        page = JSON.stringify(document.getElementById('output').innerHTML);
        localStorage.setItem('page', page);
        alert('save');
        }; 
    }); 

     

/* var Request = new XMLHttpRequest();
Request.open('GET', 'https://api.openweathermap.org/data/2.5/onecall?lat=33.875294&lon=-117.566438&exclude=timezone&appid=41fc8ca598f3a7d7ba154982bb7f9da1');
Request.onload = function(){
    var Output = $('#output');
    var Bank =  JSON.parse (Request.responseText);
    var a = 0;

    
    
    $('#press').on('click', function(){
        console.log(Bank[a]);
        var child = document.createElement('TD');
        var child2 = document.createElement('TR');
        child.textContent += JSON.stringify(Bank);
        child2.appendChild(child);
        document.getElementById('output').appendChild(child2);
        a++;
        if (a > 2){
            a = 0;
            $('#press').off('click');
            $('#press').remove();
        }
    })
    
}

Request.send(); */

}); 