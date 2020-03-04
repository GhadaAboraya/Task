$(document).ready (function () {
    /*this function to find today's date*/
     function calender() {
        var day=["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];
        var month=["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر"];
        var newDate=new Date();
        setText('calender-day' , day[newDate.getDay()]);
        setText('calender-date' , newDate.getDate());
        setText('calender-month' , month[newDate.getMonth()] + " " +(1900+newDate.getYear()));
    };
    function setText(id,val){
        document.getElementById(id).innerHTML = val;
    };
    window.onload = calender();
    





    /*this function for time*/
    function myTime(){
        var currentTime = new Date();
        var x = 'ص';
        var h = currentTime.getHours();
        var m = currentTime.getMinutes();

        if (h == 0){
            h = 12;
        } else if (h > 12){
            h = h - 12;
            x = "م";
        }
        if (h < 10){
            h = "0" + h;
        }
        if (m < 10){
            m = "0" + m;
        }

        var myclock = document.getElementById('clock');
        myclock.textContent = h + ":" + m + " " + x;
        setTimeout('myTime()' , 1000);
    }
    myTime();





});