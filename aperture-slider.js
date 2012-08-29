/**
 * Aperture Slider
 *
 * JavaScript object that can be used to create sliding multi-part forms and
 * slide shows using jQuery.
 *
 * @author    Rod McNew <rodmcnew@gmail.com>
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */
var ApertureSlider = function (apertureDiv, width, frameCount) {

    //Config options
    var animationDelay = 400;
    var frameSeparation = 100;//how far apart the frame are in pixels

    //Get all the divs we need to work with
    var filmDiv = apertureDiv.children('div');
    var frameDivs = filmDiv.children('div');

    //Init var
    var currentFrame = 0;

    //Add css
    frameDivs.css('float', 'left');
    frameDivs.css('width', width + 'px');
    frameDivs.css('margin-right', frameSeparation + 'px');
    filmDiv.css('width', +(frameCount * (width + frameSeparation)) + 'px');
    filmDiv.css('margin-left: 0');
    apertureDiv.css('width', width + 'px');
    apertureDiv.css('overflow', 'hidden');
    apertureDiv.show();

    this.setCurrentFrame = function (frameIndex, callBack) {
        currentFrame = frameIndex;
        this.render(callBack);
    }

    this.getCurrentFrame = function () {
        return currentFrame;
    }

    this.goForward = function (callBack) {
        if (currentFrame < frameCount - 1) {
            currentFrame += 1
            this.render(callBack);
        }
    }

    this.goBack = function (callBack) {
        if (currentFrame != 0) {
            currentFrame -= 1;
            this.render(callBack);
        }
    }

    this.render = function (callBack) {
        filmDiv.animate(
            {
                'margin-left':-currentFrame * (width + frameSeparation)
            },
            animationDelay,
            callBack
        )
    }
}