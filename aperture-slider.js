var ApertureSlider = function (apertureDiv, width, frameCount) {

    var filmDiv = apertureDiv.children('div');

    var frameDivs = filmDiv.children('div');

    var currentFrame = 0;

    frameDivs.css('float', 'left');
    frameDivs.css('width' ,  width + 'px');

    filmDiv.css('width', + (frameCount * width + 100) +'px');
    filmDiv.css('margin-left: 0');

    apertureDiv.css('width', width + 'px');
    apertureDiv.css('overflow', 'hidden');
    apertureDiv.show();

    this.setCurrentFrame = function(frameIndex){
        currentFrame = frameIndex;
        this.render();
    }

    this.getCurrentFrame = function(){
        return currentFrame;
    }

    this.goForward = function(){
        currentFrame += 1
        this.render();
    }

    this.goBack = function(){
        currentFrame -= 1;
        this.render();
    }

    this.render = function(callBack){
        filmDiv.animate(
            {
                'margin-left': -currentFrame * width
            },
            250,
            callBack
        )
    }
}