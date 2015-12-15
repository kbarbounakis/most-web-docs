$(document).ready(function() {
        $("nav>ul>li>i.ionicons").click(function(ev) {
            var $methods = $(ev.target).parent().find(".methods");
            $methods.toggle(400, function() {
                if ($methods.is(":visible")) {
                    $(ev.target).removeClass("ion-ios-plus").addClass("ion-ios-minus");
                }
                else {
                    $(ev.target).removeClass("ion-ios-minus").addClass("ion-ios-plus");
                }
            });
        });
        //find active nav item
        var segments = location.pathname.split("/"), p = segments[segments.length-1];
        if (location.hash) {
            p += location.hash;
        }
        var $active = $('nav a[href="' + p + '"]');
        if ($active.length>0) {
            var offset = $active.offset();
            $("nav").animate({
                scrollTop: offset.top,
                scrollLeft: offset.left
            });
        }
    });