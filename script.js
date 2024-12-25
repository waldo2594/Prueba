const countdown = () => {
    const countDate = new Date('Dec 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    // Calculando el tiempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Calcular los días, horas, minutos y segundos restantes
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    // Actualizar el HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};
  
// Ejecutar la función cada segundo
setInterval(countdown, 1000);
