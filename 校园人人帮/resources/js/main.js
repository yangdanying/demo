jQuery(document).ready(function($) {
    var isLateralNavAnimating = false;
    //o打开或关闭导航菜单
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        //若动画正在进行，则停止 
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0)
                isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //动画结束
                isLateralNavAnimating = false;
            });
        }
    });
});