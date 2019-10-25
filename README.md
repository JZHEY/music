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