import './index.less'
var weather = require('../api/weather2.json')
// const weather = require('../api/weather2.json')
const moon = require('./images/moon.png')
const sun = require('./images/sun.png')
const background1 = require('./images/background1.png')
const background2 = require('./images/background2.png')
const sunny1 = require('./images/sunny1.png')
const sunny2 = require('./images/sunny2.png')
const smallrain1 = require('./images/smallrain1.png')
const smallrain2 = require('./images/smallrain2.png')
const sunrain1 = require('./images/smallrain1.png')
const sunrain2 = require('./images/smallrain2.png')
const bigrain1 = require('./images/bigrain1.png')
const bigrain2 = require('./images/bigrain2.png')

// 实现热更新
if (module.hot) {
    module.hot.accept()
}

//插入数据
const insert = (num) => {
    document.querySelector('.today-weather').innerHTML = weather.forecast[0].weather
    document.querySelector('.today-tem span').innerHTML = parseFloat(weather.forecast[0].temperature)
    document.querySelector('.today-time').innerHTML = `${weather.time.period}：${weather.time.clock}`
    document.querySelector('.city').innerHTML = weather.city
    document.querySelector('p[index="1"]').innerHTML = weather.news[0]
    document.querySelector('p[index="2"]').innerHTML = weather.news[1]
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            document.querySelectorAll('.day')[i].innerHTML = weather.forecast[i].date
        }
        document.querySelectorAll('.tem')[i].innerHTML = weather.forecast[i].temperature
        if (weather.forecast[i].weather === "晴" && num === 1) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${sunny1}">`
        }
        else if (weather.forecast[i].weather === "晴" && num === 2) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${sunny2}">`
        }
        else if (weather.forecast[i].weather === "小雨" && num === 1) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${smallrain1}">`
        }
        else if (weather.forecast[i].weather === "小雨" && num === 2) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${smallrain2}">`
        }
        else if (weather.forecast[i].weather === "晴雨" && num === 1) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${sunrain1}">`
        }
        else if (weather.forecast[i].weather === "晴雨" && num === 2) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${sunrain2}">`
        }
        else if (weather.forecast[i].weather === "大雨" && num === 1) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${bigrain1}">`
        }
        else if (weather.forecast[i].weather === "大雨" && num === 2) {
            document.querySelectorAll('.weather')[i].innerHTML = `<img src="${bigrain2}">`
        }
    }
}

//更换主题
const changeTheme = () => weather.time.period === '晚上' ? night() : morning()

const night = () => {
    document.querySelector('.sun').innerHTML = `<img src="${moon}">`
    document.querySelector('main').style.background = `url(${background2}) no-repeat`
    document.querySelector('.bigcloud').style.opacity = .2
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll('.date')[i].style.color = '#fff'
    }
    document.querySelector('p[index="3"]').style.color = 'rgb(70, 64, 138)'
    insert(2)
}

const morning = () => {
    document.querySelector('.sun').innerHTML = `<img src="${sun}">`
    document.querySelector('main').style.background = `url(${background1}) no-repeat`
    document.querySelector('.bigcloud').style.opacity = 1
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll('.date')[i].style.color = 'rgb(85, 185, 224)'
    }
    document.querySelector('p[index="3"]').style.color = '#55b9e0'
    insert(1)
}

changeTheme()

document.querySelector('.settings').addEventListener('click', () => {
    weather = require('../api/weather1.json')
    changeTheme()
})


// const insertImg = (weather, img1, img2, i) => {
//     if (weather.forecast[i].weather === weather && num === 1) {
//         document.querySelectorAll('.weather')[i].innerHTML = `<img src="${img1}">`
//     }
//     else {
//         document.querySelectorAll('.weather')[i].innerHTML = `<img src="${img2}">`
//     }
// }

// insert(1)