/*!
    jQuery scrollTopTop v1.0 - 2013-03-15
    (c) 2013 Yang Zhao - geniuscarrier.com
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.fn.scrollToTop = function(options) {
        var config = {
            "speed" : 400
        };
        if (options) {
            $.extend(config, {
                "speed" : options
            });
        }
        return this.each(function() {
            var $this = $(this);
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $this.fadeIn();
                } else {
                    $this.fadeOut();
                }
            });
            $this.click(function(e) {
                e.preventDefault();
                $("body, html").animate({
                    scrollTop : 0
                }, config.speed);
            });
        });
    };
})(jQuery);

//点击滚动到指定地方
$(function(){
    $("#scrollComment").click(function(){
        $('html,body').animate({scrollTop:$('#comment-section').offset().top - 20},400);
    });
});
