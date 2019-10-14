function getCookie() {
    let cookieStr = document.cookie
    
    console.log(cookieStr.indexOf("MUSIC_U") != -1)
    return cookieStr.indexOf("MUSIC_U") != -1
}

module.exports = {
    getCookie
}