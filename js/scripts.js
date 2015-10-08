(function($) {
    "use strict";

    function parallax() {
        var scrollPosition = $(window).scrollTop();
        $('#parallax').css('top', (0 - (scrollPosition * 0.3)) + 'px'); // bg image moves at 30% of scrolling speed
        $('#hero').css('opacity', ((100 - scrollPosition / 2) * 0.01));
    }
    $(document).ready(function() {

        /*	Parallax Background
	================================================== */

        $(window).on('scroll', function(e) {
            parallax();
        });

        /*	Local Scroll
	================================================== */

        jQuery('.navbar').localScroll({
            offset: -80,
            duration: 500
        });

        /*	Active Menu
	================================================== */

        jQuery(function() {
            var sections = jQuery('section');
            var navigation_links = jQuery('nav a');
            sections.waypoint({
                handler: function(direction) {
                    var active_section;
                    active_section = jQuery(this);
                    if (direction === "up") active_section = active_section.prev();
                    var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
                    navigation_links.parent().removeClass("active");
                    active_link.parent().addClass("active");
                    active_section.addClass("active-section");
                },
                offset: '35%'
            });
        });

        /*	Pretty Photo
	================================================== */

        jQuery('#gallery a').attr('rel', 'prettyPhoto');
        jQuery("a[rel^='prettyPhoto']").prettyPhoto();

        /*	Bootstrap Carousel
	================================================== */

        jQuery('.carousel').carousel()
    });

    jQuery(window).load(function() {

        $('.section').each(function() {
            animate_start($(this));
        });

    });
        /*	Animation with Waypoints
	================================================== */

    var animate_start = function($this) {
        $this.find('.animate').each(function(i) {
            var $item = jQuery(this);
            var animation = $item.data("animate");

            $item.waypoint(function(direction) {
                $item.css({
                    '-webkit-animation-delay': (i * 0.1) + "s",
                    '-moz-animation-delay': (i * 0.1) + "s",
                    '-ms-animation-delay': (i * 0.1) + "s",
                    '-o-animation-delay': (i * 0.1) + "s",
                    'animation-delay': (i * 0.1) + "s"
                });
                $item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    jQuery(this).removeClass(animation + ' animated');
                });
            }, {
                offset: '80%',
                triggerOnce: true
            });
        });
    };
    
    $("#sign_up").click(function(){
			
			$("#sign_error_name").hide();
			
			$("#sign_error_comment").hide();
			$("#sign_error_email").hide();
			
			$("#txt_name").removeClass("error");
			$("#txt_email").removeClass("error");
			
			$("#txt_comment").removeClass("error");
			if($("#txt_name").val()=="") {
				        $("#sign_error_name").html("Please enter a name");
					$("#sign_error_name").show();
					$("#txt_name").addClass("error");
					return false;
				}	
				if($("#txt_email").val()=="") {
					$("#sign_error_email").html("Please check your email");
					$("#sign_error_email").show();
					$("#txt_email").addClass("error");
					return false;
				} else if(!IsvalidEmail($("#txt_email").val())) {
					$("#sign_error_email").show();
					$("#txt_email").addClass("error");
					return false;
				}
							
				
				$("#loader").show();
				$.ajax({
				  type: "POST",
				  url: 'process.php',
				  data: $("#signupform").serialize(),
				  success: function(data) {
				    
  						$("#success").removeClass("error");
						$("#success").addClass("succ");
						$("#success").html("Thanks. We will get in touch with you shortly");
						$("#success").show();
						
						}
						
					  
				});
				
				return false;
		});
		
	function IsvalidEmail(email) {
	var str=email;
	var flag=true;
	var at="@";
	var dot=".";
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)
	if(str=='') {
		flag=false;
	}
	if (str.indexOf(at)==-1) {
		flag=false;
	}
	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
		flag=false;
	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
		flag=false;
	if (str.indexOf(at,(lat+1))!=-1)
		flag=false;
	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
		flag=false;
	if (str.indexOf(dot,(lat+2))==-1)
		flag=false;
	if (str.indexOf(" ")!=-1)
		flag=false;
	 if(flag)
		return true;
	 else
	 return false;
}
})(jQuery);
