var ProgressIndicator = function (containerDiv, stepCount) {
    for (var i = 1; i <= stepCount; i++) {
        containerDiv.append($('<span>' + i + '</span>'))
    }
    this.setProgress = function(step){
        var progressChunks = containerDiv.find('span');
        $.each(progressChunks, function (i, progressChunk) {
            i++;
            progressChunk = $(progressChunk);
            if (i < step) {
                progressChunk.addClass('completed')
                progressChunk.removeClass('current');
            } else if (i == step) {
                progressChunk.addClass('current');
                progressChunk.removeClass('completed');
            } else {
                progressChunk.removeClass('current');
                progressChunk.removeClass('completed');
            }
        });
    }
}