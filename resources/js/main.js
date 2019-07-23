$(document).ready(function() {

    // Check if the page is being viewed on a mobile device.
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    /*
     * For a mobile device.
     */
    if (isMobile) {

        // Change text & background color of navbar.
        $(".nav-link").css("background-color", "blue"); // "var(--bgMainColor)");       // !FIX ME
        $(".nav-link").css("color", "rgba(255, 255, 255, 1)");

        

        /*
         * Scroll on navigation link click.
         */
        // Scroll to home section when link is clicked.
        $("#home-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#home").offset().top - 230
                },
                1000
            );
        });

        // Scroll to skills section when link is clicked.
        $("#skills-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#skills").offset().top - 125
                },
                1000
            );
        });

        // Scroll to portfolio section when link is clicked.
        $("#portfolio-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#portfolio").offset().top - 125
                },
                1000
            );
        });

        // Scroll to portfolio section when link is clicked.
        $("#contact-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#contact").offset().top
                },
                1000
            );
        });
    }
    /*
     * For a non-mobile device.
     */ 
    else {

        /*
         * Scroll on navigation link click.
         */
        // Scroll to home section when link is clicked.
        $("#home-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#home").offset().top - 230
                },
                1000
            );
        });

        // Scroll to skills section when link is clicked.
        $("#skills-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#skills").offset().top - 300
                },
                1000
            );
        });

        // Scroll to portfolio section when link is clicked.
        $("#portfolio-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#portfolio").offset().top - 300
                },
                1000
            );
        });

        // Scroll to portfolio section when link is clicked.
        $("#contact-link").click(function() {
            $("html, body").animate(
                {
                    scrollTop: $("#contact").offset().top - 400
                },
                1000
            );
        });
    }

    /*
     * Animate items while scrolling.
     */
    // Variables
    let $window = $(window);
    let $animationElements = $(".animation-element");
    let scrolling = false;

    // Add event listener for scroll & resize.
    $(window).scroll(function() {
        scrolling = true;
    });

    // Fire function after a timeout to not overload page.
    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            onPageScroll();
        }
    }, 250);

    // Trigger a scroll event when page is loaded.
    $(window).trigger("scroll");

    // When the page is scrolled execute these methods.
    function onPageScroll() {
        // Fix the navigation lines.
        fixNavLines(window.scrollY);

        // Check if an element is in view
        checkIfInView();
    }

    // Check to see if an element that needs to be animated is in view.
    function checkIfInView() {
        let windowHeight = $window.height();
        let windowTop = $window.scrollTop();
        let windowBottom = windowTop + windowHeight;

        $.each($animationElements, function() {
            let $element = $(this);
            let eHeight = $element.height();
            let eTop = $element.offset().top;
            let eBottom = eTop + eHeight;


            // Check to see if this element is in view.
            if ( eBottom >= windowTop && eTop <= windowBottom ) {
                if($element.hasClass("portfolio-tile")) {
                    $element.addClass("in-view");
                }
                else {
                    $element.addClass("in-view");
                }
            }
        });
    }
    

    function fixNavLines(top) {
        let eleArr = [
            document.getElementById("home-line"),
            document.getElementById("skills-line"),
            document.getElementById("portfolio-line"),
            document.getElementById("contact-line")
        ];

        for (let i = 0; i < eleArr.length; i++) {
            eleArr[i].classList.remove("active");
        }

        if (top < 455) {
            document.getElementById("home-line").classList.add("active");
        } else if (top >= 455 && top <= 1200) {
            document.getElementById("skills-line").classList.add("active");
        } else if (top > 1200 && top <= 2820) {
            document.getElementById("portfolio-line").classList.add("active");
        } else {
            document.getElementById("contact-line").classList.add("active");
        }
    }
});
