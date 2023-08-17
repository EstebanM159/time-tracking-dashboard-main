const daily = document.querySelector(".status .daily");
const weekly = document.querySelector(".status .weekly");
const monthly = document.querySelector(".status .monthly");
const estado = document.querySelector(".status")
const everyDaily = document.querySelectorAll(".previous-d")
const everyWeekly = document.querySelectorAll(".previous-w")
const everyMonthly = document.querySelectorAll(".previous-m")

function statusActive(on, off1, off2) {
    on.classList.add(".status-active");
    off1.classList.remove(".status-active")
    off2.classList.remove(".status-active")
}
function displayPrevious(on, clear1, clear2) {
    on.forEach(elementOn => {
        elementOn.style.display = "block";
    });

    clear1.forEach(clearOne => {
        clearOne.style.display = "none";
    });
    clear2.forEach(clearTwo => {
        clearTwo.style.display = "none";
    });
}
// ESTA FORMA ES CUANDO EL JSON ESTA ORDENADO, SIRVE PERO NO TIENE BUSQUEDA
// function mostrarCurrentDaily(datos) {
//     const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current `);
//     const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-d `)
//     console.log(previous)
//     for (let i = 0; i < current.length; i++) {
//         current[i].innerHTML = `${datos[i].timeframes.daily.current} hs`
//         previous[i].innerHTML += ` ${datos[i].timeframes.daily.previous} hs`
//     }
// }

// function mostrarCurrentWeekly(datos) {
//     const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current `);
//     const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-w `)
//     for (let i = 0; i < current.length; i++) {
//         current[i].innerHTML = `${datos[i].timeframes.weekly.current} hs`
//         previous[i].innerHTML += ` ${datos[i].timeframes.weekly.previous} hs`
//     }
// }

// function mostrarCurrentMonthly(datos) {
//     const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current `);
//     const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-m `)
//     for (let i = 0; i < current.length; i++) {
//         current[i].innerHTML = `${datos[i].timeframes.monthly.current} hs`
//         previous[i].innerHTML += ` ${datos[i].timeframes.monthly.previous} hs`
//     }
// }

// CON ESTE MODO POR MAS QUE ESTE DESORDENADO ANDA IGUAL
function mostrarDaily(datos) {
    const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current`);
    const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-d`)
    current.forEach(element => {
        for (let i = 0; i < datos.length; i++) {
            let datosCondicion = datos[i].title.split(' ').join('').toUpperCase()
            if (element.id.toUpperCase().trim() === datosCondicion) {
                element.innerHTML = `${datos[i].timeframes.daily.current} hs`
                previous[i].innerHTML = `Last Day - ${datos[i].timeframes.daily.previous} hs`
            }

        }
    });
}

function mostrarWeekly(datos) {
    const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current`);
    const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-w`)
    current.forEach(element => {
        for (let i = 0; i < datos.length; i++) {
            let datosCondicion = datos[i].title.split(' ').join('').toUpperCase()
            if (element.id.toUpperCase().trim() === datosCondicion) {
                element.innerHTML = `${datos[i].timeframes.weekly.current} hs`
                previous[i].innerHTML = (` Last Week - ${datos[i].timeframes.weekly.previous} hs`)
            }
        }
    });
}

function mostrarMonthly(datos) {
    const current = document.querySelectorAll(`.card-container .card-info .info-horas  .current`);
    const previous = document.querySelectorAll(`.card-container .card-info .info-horas  .previous-m`)
    current.forEach(element => {
        for (let i = 0; i < datos.length; i++) {
            let datosCondicion = datos[i].title.split(' ').join('').toUpperCase()
            if (element.id.toUpperCase().trim() === datosCondicion) {
                element.innerHTML = `${datos[i].timeframes.monthly.current} hs`
                previous[i].innerHTML = (` Last Monthly - ${datos[i].timeframes.monthly.previous} hs`)
            }

        }
    });
}


// ESTO SIRVE PARA UNO SOLO 
// const current = document.querySelector(`.card-container .card-info .info-horas  .current `);
// current.innerHTML = `${datos[1].timeframes.daily.current} hs ` 

const excercise = document.querySelector(".card-bg-excercise .info-horas");
const play = document.querySelector(".card-bg-play .info-horas");
const selfcare = document.querySelector(".card-bg-selfcare .info-horas");
const social = document.querySelector(".card-bg-social .info-horas");
const study = document.querySelector(".card-bg-study .info-horas");
const work = document.querySelector(".card-bg-work .info-horas");


fetch('data.json')
    .then(response => response.json())
    .then(json => {
        statusActive(daily, weekly, monthly)
        mostrarDaily(json);
        displayPrevious(everyDaily, everyMonthly, everyWeekly);
        daily.addEventListener("click", (e) => {
            statusActive(daily, weekly, monthly)
            displayPrevious(everyDaily, everyMonthly, everyWeekly);
            // mostrarCurrentDaily(json);
            mostrarDaily(json);
        })
        weekly.addEventListener("click", (e) => {
            statusActive(weekly, daily, monthly)
            displayPrevious(everyWeekly, everyDaily, everyMonthly);
            // mostrarCurrentWeekly(json);
            mostrarWeekly(json);
        })
        monthly.addEventListener("click", (e) => {
            statusActive(monthly, weekly, daily);
            displayPrevious(everyMonthly, everyDaily, everyWeekly);
            // mostrarCurrentMonthly(json);
            mostrarMonthly(json);
        })
    })
    .catch(error => console.error(error));







// estado.addEventListener("click", (e) => {
//     switch (e.target) {
//         case daily:
//             statusActive(daily, weekly, monthly)
//             displayPrevious(everyDaily, everyMonthly, everyWeekly);
//             mostrarCurrentDaily("asfasfasf");
//             break;
//         case weekly:
//             statusActive(weekly, daily, monthly)
//             displayPrevious(everyWeekly, everyDaily, everyMonthly);
//             break;
//         case monthly:
//             statusActive(monthly, weekly, daily)
//             displayPrevious(everyMonthly, everyDaily, everyWeekly);
//             break;
//     }
// })





// const current = document.querySelector(".card-container .card-bg-work .card-info .info-horas .current");
