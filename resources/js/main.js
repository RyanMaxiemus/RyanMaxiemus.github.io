$(document).ready(function() {
    /*
     *
     * REMOVE THIS TEST CLEAR
     * 
     */
    console.clear();

    /*
     * Scroll on navigation link click methods.
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
                scrollTop: $("#contact").offset().top
            },
            1000
        );
    });

    /*
     * Animate items while scrolling.
     */
    // Variables
    let $animationElements = $(".animation-element");
    let $window = $(window);
    let scrolling = false;

    // Add event listener for scroll & resize.
    $(window).scroll(function() {
        scrolling = true;
    });

    // Fire function after a timeout to not overload page
    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            onPageScroll();
        }
    }, 250);

    // Trigger a scroll event when page is loaded.
    $window.trigger("scroll");


    // When the page is scrolled execute these methods.
    function onPageScroll() {
        let elem = document.querySelector('body');
        let bounding = elem.getBoundingClientRect();


        /*
         *
         * REMOVE THIS TEST
         * 
         */
        console.log(bounding.top);

        // Fix the navigation lines.
        fixNavLines(bounding.top);

        // Check if an element is in view
        checkIfInView();
    }


    // Check to see if an element that needs to be animated is in view.
    function checkIfInView() {
        let windowHeight = $window.height();
        let windowTopPosition = $window.scrollTop();
        let windowBottomPosition = $window.scrollTop() + windowHeight;

        $.each($animationElements, function() {
            let $element = $(this);
            let elementHeight = $element.height();
            let elementTopPosition = $element.offset().top;
            let elementBottomPosition = elementTopPosition + elementHeight;



            // Check to see if this element is in view.
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                
                    // Add in-view class to the element
                    $element.addClass("in-view");
            } 
            // REMOVE THIS
            // REMOVE THIS
            // REMOVE THIS
            // REMOVE THIS
            else {
                $element.removeClass("in-view");


                document.getElementById("bg-code-center").classList.remove("in-View");
                document.getElementById("bg-code-bottom-left").classList.remove("in-View");
            }
            // REMOVE THIS
            // REMOVE THIS
            // REMOVE THIS
            // REMOVE THIS
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

        if (top > -513) {
            document.getElementById("home-line").classList.add("active");
        }
        else if (top <= -513 && top >= -1540) {
            document.getElementById("skills-line").classList.add("active");
        }

        /*
         *
         * ADD MORE CONDITIONAL STATEMENTS HERE
         * 
         */
    }
});


