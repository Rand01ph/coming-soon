(function($) {
    "use strict";
    
    /* COUNTDOWN */
	$("#countdown").countdown({
        date: "10 Feb 2015 10:10:10", // Put your date here
		format: "on"
	});
    
    /* SIDEBAR MENU */
    $(".open-menu").pageslide({ direction: "right", modal: true });
	
	/* SMOOTH SCROLL */
    $('.smooth').click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 750);
    });
    
    /* TOOLTIPS */
    $('.tool-tip').tooltip();
    
    /* CONTACT FORM */
	$('#contact-form').ketchup().submit(function() {
        if ($(this).ketchup('isValid')) {
			$('#contact-form-submit').button('loading');
            var action = $(this).attr('action');
            $.ajax({
                type: "POST",
                url : action,
                data: {
                    contactname: $('#contact-name').val(),
                    contactemail: $('#contact-email').val(),
                    contactwebsite: $('#contact-website').val(),
                    contactmessage: $('#contact-message').val()
                },
                success: function() {
					$('#contact-form-submit').button('reset');
                    $('#contact-error').fadeOut();
                    $('#contact-success').fadeOut();
                    $('#contact-success').html('Success! Thanks for contacting us!').fadeIn();
                },
                error: function() {
					$('#contact-form-submit').button('reset');
                    $('#contact-error').fadeOut();
                    $('#contact-success').fadeOut();
                    $('#contact-error').html('Sorry, an error occurred.').fadeIn();
                }
            });
        }
        return false;
    });
	
	/* NEWSLETTER FORM */
	$('#newsletter-form').ketchup().submit(function() {
		if ($(this).ketchup('isValid')) {
			$('#newsletter-submit').button('loading');
			var action = $(this).attr('action');
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					newsletter_email: $('#newsletter-email').val()
				},
				success: function(data) {
					$('#newsletter-submit').button('reset');
                    $('#newsletter-error').fadeOut();
                    $('#newsletter-success').fadeOut();
                    $('#newsletter-success').html(data).fadeIn();
                },
                error: function() {
					$('#newsletter-submit').button('reset');
                    $('#newsletter-error').fadeOut();
                    $('#newsletter-success').fadeOut();
                    $('#newsletter-error').html('Sorry, an error occurred.').fadeIn();
                }
			});
		}
		return false;
	});
    
    /* ANIMATIONS */
    $('.navbar-brand').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInLeft');
		}
	});
	$('.navbar-nav').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInRight');
		}
	});
	$('.navbar-toggle').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInRight');
		}
	});
    $('.heading').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInDown');
		}
	});
    $('.menu').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInLeft');
		}
	});
    $('form').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInUp');
		}
	});
    $('.time').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInUp');
		}
	});
    $('.about-item').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInUp');
		}
	});
    $('.social-icons').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).addClass('animated fadeInUp');
		}
	});
    
})(jQuery);
