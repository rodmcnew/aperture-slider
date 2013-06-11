/**
 * Aperture Slider
 *
 * JavaScript object that can be used to create sliding multi-part forms.
 *
 * @author    Rod Mcnew
 * @license   License.txt New BSD License
 */

//jQuery document.ready() shortcut
$(function () {

    //Init the slider
    var slideDiv = $('.apertureSlider');
    var configOverrides = {
        minHeight:200,
        backButtonSupport:true
    };
    var apertureSlider = new ApertureSlider(slideDiv, configOverrides);

    //Attach forward button click event handler
    $('input[value="Continue"]').click(apertureSlider.goForward);

    //Setup optional progress indicator
    var progressIndicator = new ApertureProgressIndicator(
        $('.progressIndicator'),
        apertureSlider.getFrameCount()
    );
    progressIndicator.setProgress(1);
    slideDiv.bind('apertureFrameChanged',
        function () {
            progressIndicator.setProgress(
                apertureSlider.getCurrentFrame()
            )
        }
    );

    //Attach tab click event handler
    $('.progressIndicator span').click(
        function () {
            apertureSlider.goToFrame($(this).html());
        }
    );
});