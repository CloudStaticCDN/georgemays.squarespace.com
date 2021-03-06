window.addEventListener('load',function(){
    
    x = document.querySelector(".index-gallery-wrapper");
    xx = x.querySelectorAll(".image-container");

    videoWidthMultiplier = 16/9;
    videoHeightMultiplier = 9/16;

    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    videoWidth = videoWidthMultiplier*windowHeight;

    
    if(videoWidth > windowWidth){

        videoLeftOffset = (-(videoWidth - windowWidth)/2);
        videoHeight = windowHeight;

    }else{

        videoWidth = windowWidth;
        videoHeight = videoHeightMultiplier*windowWidth;

        videoLeftOffset = 0;

    }

    videoCode = [];
    videoCode[0] = `<video autoplay="" muted="" loop="" id="vimeoplayer" class="background-video ready"` 
    videoCode[0] += ` style="height:${videoHeight}px;width:${videoWidth}px;left:${videoLeftOffset}px;top:0px;"`;
    videoCode[0] += `><source src="https://github.com/CloudStaticCDN/georgemays.squarespace.com/raw/master/bg_video.mp4" type="video/mp4"></video>`;

    videoCode[1] = `<video autoplay="" muted="" loop="" id="vimeoplayer" class="background-video ready"`;
    videoCode[1] += ` style="height:${videoHeight}px;width:${videoWidth}px;left:${videoLeftOffset}px;top:0px;"`;
    videoCode[1] += `><source src="https://github.com/CloudStaticCDN/georgemays.squarespace.com/raw/master/commercial_720.mp4" type="video/mp4"></video>`;

    videoCode[2] = `<video autoplay="" muted="" loop="" id="vimeoplayer" class="background-video ready"`;
    videoCode[2] += ` style="height:${videoHeight}px;width:${videoWidth}px;left:${videoLeftOffset}px;top:0px;"`;
    videoCode[2] += `><source src="https://github.com/CloudStaticCDN/georgemays.squarespace.com/raw/master/music_720.mp4" type="video/mp4"></video>`;

    videoCode[3] = `<video autoplay="" muted="" loop="" id="vimeoplayer" class="background-video ready"`;
    videoCode[3] += ` style="height:${videoHeight}px;width:${videoWidth}px;left:${videoLeftOffset}px;top:0px;`;
    videoCode[3] += `"><source src="https://github.com/CloudStaticCDN/georgemays.squarespace.com/raw/master/films_720.mp4" type="video/mp4"></video>`;
   

    y = [];
    for(i = 0; i < xx.length; i++){
        y[i] = xx[i].querySelector(".sqs-video-background #player");
        y[i].innerHTML = videoCode[i];
    }
    
    //y.style.display = "none";
    //x.style.backgroundImage = "url(https://raw.githubusercontent.com/CloudStaticCDN/georgemays.squarespace.com/master/bg.gif)";
    //x.style.backgroundSize = "cover";

}, false);