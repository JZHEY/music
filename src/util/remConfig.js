export default function (){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 +'px'

    //禁止双击放大
    document.documentElement.addEventListener('touchstart', event => {
        // console.log(event)
        if(event.touches.length > 1){
            event.preventDefault();
        }
    },false)

    let lastTouchEnd = 0

    document.documentElement.addEventListener('touchend',event => {
        let now = Date.now()
        if(now - lastTouchEnd <= 300){
            event.preventDefault();
        }

        lastTouchEnd = now
    },false)
}