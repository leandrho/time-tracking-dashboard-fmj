let data = [];
const loadData = async () => {
    const res = await fetch('./data.json');
    data = await res.json();
    setData('weekly');
}
loadData();

const work = document.querySelector('.work');
const workCur = work.querySelector('.card-current');
const workPrev = work.querySelector('.card-previous');

const play = document.querySelector('.play');
const playCur = play.querySelector('.card-current');
const playPrev = play.querySelector('.card-previous');

const study = document.querySelector('.study');
const studyCur = study.querySelector('.card-current');
const studyPrev = study.querySelector('.card-previous');

const exercise = document.querySelector('.exercise');
const exerciseCur = exercise.querySelector('.card-current');
const exercisePrev = exercise.querySelector('.card-previous');

const social = document.querySelector('.social');
const socialCur = social.querySelector('.card-current');
const socialPrev = social.querySelector('.card-previous');

const self = document.querySelector('.self-care');
const selfCur = self.querySelector('.card-current');
const selfPrev = self.querySelector('.card-previous');

const setValues = (op, cur, prev) => {
    switch (op) {
        case 'work':
            workCur.innerHTML = cur;
            workPrev.innerHTML = prev;
            break;
        case 'play':
            playCur.innerHTML = cur;
            playPrev.innerHTML = prev;
            break;
        case 'study':
            studyCur.innerHTML = cur;
            studyPrev.innerHTML = prev;
            break;
        case 'exercise':
            exerciseCur.innerHTML = cur;
            exercisePrev.innerHTML = prev;
            break;
        case 'social':
            socialCur.innerHTML = cur;
            socialPrev.innerHTML = prev;
            break;
        case 'self care':
            selfCur.innerHTML = cur;
            selfPrev.innerHTML = prev;
            break;
        default:
            break;
    }
}
const setData = (option) => {
    data.forEach(element => {
        let cur = '', prev = '', op='';
        op = element.title.toLowerCase();
        if(option=="daily"){
            cur=element.timeframes.daily.current;
            prev=element.timeframes.daily.previous;
            setValues(op, cur+'hrs', `Yesterday - ${prev}hrs`);
        }
        else if(option=="weekly"){
            cur=element.timeframes.weekly.current;
            prev=element.timeframes.weekly.previous;
            setValues(op, cur+'hrs', `Last Week - ${prev}hrs`);
        }
        else if(option=="monthly"){
            cur=element.timeframes.monthly.current;
            prev=element.timeframes.monthly.previous;
            setValues(op, cur+'hrs', `Last Month - ${prev}hrs`);
        }
    });
   
}

const daily = document.querySelector('#daily');
daily.addEventListener('change', ()=>{
    setData('daily');
});
const weekly = document.querySelector('#weekly');
weekly.addEventListener('change', ()=>{
    setData('weekly');
});
const monthly = document.querySelector('#monthly');
monthly.addEventListener('change', ()=>{
    setData('monthly');
});

