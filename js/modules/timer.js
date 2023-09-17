function timer(selector, deadline) {
    //Timer


    function getTimeRemaning(endtime) {

        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t/(1000*60*60*24)),
              hours = Math.floor(t/(1000*60*60)%24),
              minutes = Math.floor(t/(1000*60)%60),
              seconds = Math.floor(t/(1000)%60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }   
    console.log(getTimeRemaning(deadline));


    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else if (num < 0) {
            return `00`;
        }
        else {return num; }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              updateClock();

        function updateClock() {
            const t = getTimeRemaning(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

            
    }
    setClock(selector, deadline);

}

export default timer;