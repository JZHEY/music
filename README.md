# music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 10.24

问题：还没有解决从播放页面，切换到其他任何页面，音乐继续播放的问题

完成了：摸鱼摸了一天，完成的东西也没多少，主要完成了以下内容：

* 首页的专辑都可以点了进行播放
* 完善了一下切换歌曲代码


## 10.25

问题：拖动进度条，改变音乐播放的位置

完成了：由于之前已经把上一首/下一首 暂停/播放 单曲循环/列表循环功能实现了，所以从audio组件把进度条和audio标签分离遇到了很多问题，具体完成以下内容：

* 实现了从播放页面切换到其他任何页面，音乐继续播放的问题
* 完成了 分离audio 和slider组件
  

## 11.26

问题：点击喜欢，能将该歌曲标为喜欢，并且会把心变成红的，但是返回到歌曲列表页，在重新点击进去这首歌，不会显示红心亮着，主要还是没有找到接口和字段，代表这首歌已经被我加入喜欢了

完成了：拖动进度条，改变音乐播放的位置

* 实现了拖动进度条，改变音乐播放的位置
* 解决登录时，出现死循环问题
  
加班终于结束了✌✌✌✌✌