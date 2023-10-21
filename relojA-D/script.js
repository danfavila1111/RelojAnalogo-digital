const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
const relojDigital = document.querySelector('.reloj-digital');

function updateDigitalClock() {
    const tiempo = new Date();

    const hr = tiempo.getHours() * 30;
    const min = tiempo.getMinutes() * deg;
    const seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${hr + min / 12}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg`;

    // Formatear la hora en formato 12 horas (AM/PM) con segundos
    const ampm = tiempo.getHours() >= 12 ? 'PM' : 'AM';
    const hour = tiempo.getHours() % 12 || 12;
    const digitalTime = `${hour.toString().padStart(2, '0')}:${tiempo.getMinutes().toString().padStart(2, '0')}:${tiempo.getSeconds().toString().padStart(2, '0')} ${ampm}`;
    relojDigital.textContent = digitalTime;
}

// Actualizar el reloj digital al inicio y luego cada segundo
updateDigitalClock();
setInterval(updateDigitalClock, 1000);
