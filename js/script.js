$(function() {
    $("li").click(function(e) {
        e.preventDefault();
        $("li").removeClass("selected");
        $(this).addClass("selected");
    });
});

$(function() {
    $("#tabs").tabs();
});


$(document).ready(function() {
    //Add Inactive Class To All Accordion Headers
    $('.accordion-header').toggleClass('inactive-header');

    //Set The Accordion Content Width
    var contentwidth = $('.accordion-header').width();
    $('.accordion-content').css({ 'width': contentwidth });

    //Open The First Accordion Section When Page Loads
    $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.accordion-content').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.accordion-header').click(function() {
        if ($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('accordion-open accordion-closed')
        } else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('accordion-open accordion-closed')
        }
    });
    //Open the menu
    jQuery("#burger").click(function() {
        jQuery('#content').css('min-height', jQuery(window).height());

        jQuery('#mobile_nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();

        //set the content with the width that it has originally
        jQuery('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function(e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        //use stop(true) to fix jQuery overlapping issue with animation
        //if the first argument is true, removes all animations in the queue
        jQuery("#container").stop(true).animate({ "marginLeft": ["-70%", 'easeOutExpo'] }, {
            duration: 700
        });
        jQuery("#content").css('right', -250);
    });

    //close the menu
    jQuery("#contentLayer").click(function() {
        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        //use stop(true) to fix jQuery overlapping issue with animation
        //if the first argument is true, removes all animations in the queue
        jQuery("#container").stop(true).animate({ "marginLeft": ["1", 'easeOutExpo'] }, {
            duration: 700,
            complete: function() {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
                jQuery('#mobile_nav').css('opacity', 0);
                jQuery('#content').css('min-height', 'auto');

            }
        });
    });

    return false;
});