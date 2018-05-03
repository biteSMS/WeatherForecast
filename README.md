## WeatherForecast

### 启动

```
npm install
npm run build
npm run dev
```

### 天气API JSON返回方式

```json
{
    "city": "重庆",
    "time": {
        "period": "晚上",
        "clock": "09:15"
    },
    "forecast": [
        {
            "date": "2",
            "weather": "小雨",
            "temperature": "25度"
        },
        {
            "date": "3",
            "weather": "晴",
            "temperature": "30度"
        },
        {
            "date": "4",
            "weather": "晴",
            "temperature": "33度"
        },
        {
            "date": "5",
            "weather": "大雨",
            "temperature": "26度"
        },
        {
            "date": "6",
            "weather": "晴雨",
            "temperature": "29度"
        }
    ],
    "news": [
        "我是很长的新闻测试啊啊啊啊啊",
        "萧萧被评为亚洲最帅"
    ]
}
```

#### 根据接口返回的时间段显示早晚的主题，点击右上角的+号可切换天气api查看主题更改情况。