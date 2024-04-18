const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const numHour = document.querySelector('.hours');
const numMin = document.querySelector('.minutes');
const links = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

console.log(links);

for (let i = 0; i < links.length; i++) {
  const element = links[i];
  
  console.dir(element);
  // element.onclick = function () {  
  //   console.log('нажали');
  // }
  // element.onclick += function () {  
  //   console.log('привет');
  // }
  
  element.addEventListener('click', function (e) {  
    e.preventDefault()
    // element.classList.add('имяКласса') - добавляет класс тегу
    // element.classList.remove('имяКласса') - удаляет класс у тега
    // element.classList.contains('имяКласса') - проверяет есть ли указанный класс у данного тега
    // element.classList.toggle('имяКласса') - удаляет класс у тега если он есть, и добавляет если его нету
    
    for (let x = 0; x < links.length; x++) {
      const elem = links[x];
      elem.classList.remove('active');
      tabsContentItem[x].classList.remove('active');
    }
    this.classList.add('active');
    tabsContentItem[i].classList.add('active');
    
  })
  
}

let i = 360;

function clock() {  
  
  let time = new Date();
  
  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;
  
  if(seconds == 0 || i > 360 ){
    sec.style.transform = `rotate(${i}deg)`;
    i += 6;
  }
  else{
    sec.style.transform = `rotate(${seconds}deg)`;
  }
  
  
  sec.style.transition = `1s linear`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;
  
  numMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  numHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  
  setTimeout(() => {clock()}, 1000);
  // рекурсия = функция, крторая вызывает сама себя
}

clock()


const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const span = document.querySelector('.tabsLink__span');
console.log(stopwatchBtn);

stopwatchBtn.addEventListener('click', () => {
  
  if(stopwatchBtn.innerHTML == 'start'){
    stopwatchBtn.innerHTML = 'stop'
    span.classList.add('active');
    start();
  }else if(stopwatchBtn.innerHTML == 'stop'){
    stopwatchBtn.innerHTML = 'clear'
    span.classList.remove('active');
    span.classList.add('active_clear');
  }else if(stopwatchBtn.innerHTML == 'clear'){
    stopwatchBtn.innerHTML = 'start'
    span.classList.remove('active_clear');
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
  }
  
})

function start() {  
  setTimeout(() => {
    
    if(stopwatchBtn.innerHTML == 'stop'){
      stopwatchSeconds.innerHTML++;
      start();
    }
    if(stopwatchSeconds.innerHTML > 59){
      stopwatchSeconds.innerHTML = 0;
      stopwatchMinutes.innerHTML++;
    }else if(stopwatchMinutes.innerHTML > 59){
      stopwatchMinutes.innerHTML = 0;
      stopwatchHours.innerHTML++;
    }
    
  }, 1000);
}