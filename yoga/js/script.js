window.addEventListener('DOMContentLoaded',
    function() {

        // Tabs ------------------------------------->

        'use strict';
        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

        // Таймер! ---------------------------------->

        let deadline = '2020-04-23';

        function getTimeRemainig(endTime) {
            let t = Date.parse(deadline) - Date.parse(new Date()) - 3 * 60 * 60 * 1000,
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                deys = Math.floor(t / 1000 / 60 / 60 / 24);
            return {
                total: t,
                seconds: seconds,
                minutes: minutes,
                hours: hours,
                deys: deys,
            };
        }

        function setClock(id, endTime) {
            let timer = document.getElementById(id),
                deys = timer.querySelector('.deys'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInt = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemainig(endTime);
                deys.textContent = t.deys;
                hours.textContent = t.hours;
                if (t.minutes < 10) {
                    minutes.textContent = "0" + t.minutes;
                } else { minutes.textContent = t.minutes; }
                if (t.seconds < 10) {
                    seconds.textContent = "0" + t.seconds;
                } else { seconds.textContent = t.seconds; }
                if (t.total <= 0) {
                    clearInterval(timeInt);
                }
            }

        }
        setClock('timer', deadline);
    });