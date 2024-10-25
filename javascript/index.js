function handleScroll() {
    if ($(window).width() <= 894) {
        // User is on a mobile screen (less than or equal to 894px)
        if ($(window).scrollTop() > 10) {
            // User has scrolled more than 10 pixels
            $('#mobile-header').css('display', 'none');
            $('#mobile-search-container').css('display', 'none');
            $('#filer-meun-section').css('margin-top', '0px');
            $('#mobile-search-section-container').css('display', 'flex');
            $('#dynamic-sticky-container').css('z-index', '100');


        } else {
            $('#dynamic-sticky-container').css('z-index', '0');

            // User has scrolled back up (less than 10 pixels)
            $('#mobile-header').css('display', 'flex');
            $('#mobile-search-container').css('display', 'flex');
            $('#filer-meun-section').css('margin-top', '110px');
            $('#mobile-search-section-container').css('display', 'none');
        }
    } else {
        // Screen width is greater than 894px
        // $('#filer-meun-section').css('margin-top', '0px');
        $('#mobile-header').css('display', 'none');  // Always hidden on larger screens
    }

    if ($(window).width() >= 1024) {
        // For desktop screens (width >= 1024px), set position to fixed
        if ($(window).scrollTop() > 60) {
            // User has scrolled more than 100 pixels
            $('#filer-meun-section').css({
                'position': 'fixed',
                'top': '0px',
                'z-index': '13',
                'height': '75px',
                'align-items': 'center',
                'width': '100%',
                'background-color': 'white',
                'margin': '0px 0px 0px 0px',

            });
        } else {
            // User has scrolled back up (less than 100 pixels)
            $('#filer-meun-section').css({
                'position': 'static',
                'top': '0px',
                'margin': '40px 0px 10px 0px',

            });
        }

        $('#mobile-search-container').css('display', 'none');
        $('#mobile-header').css('display', 'none');
    }
}

// Debounce function to limit how often handleScroll is called
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

// Attach scroll event
$(window).scroll(handleScroll);
// Attach resize event to handle screen size changes dynamically
$(window).resize(handleScroll);

// Call on page load to ensure correct visibility on initial load
$(window).on("load", function() {
    handleScroll();
});


$(document).ready(function() {
    $("#explore-options-one").click(function() {
        var img = $("#explore-one-img");
        var currentSrc = img.attr("src");
        console.log(img,'img')
        // Toggle between the two images
        if (currentSrc === "./assets/icons/top-arrow.svg") {
            img.attr("src", "./assets/icons/bottom-arrow.svg"); // Switch to down arrow
        } else {
            img.attr("src", "./assets/icons/top-arrow.svg"); // Switch to top arrow
        }
    });


    $("#explore-options-two").click(function() {
        var img = $("#explore-two-img");
        var currentSrc = img.attr("src");
        console.log(img,'img')
        // Toggle between the two images
        if (currentSrc === "./assets/icons/top-arrow.svg") {
            img.attr("src", "./assets/icons/bottom-arrow.svg"); // Switch to down arrow
        } else {
            img.attr("src", "./assets/icons/top-arrow.svg"); // Switch to top arrow
        }
    });


    $("#explore-options-three").click(function() {
        var img = $("#explore-three-img");
        var currentSrc = img.attr("src");
        console.log(img,'img')
        // Toggle between the two images
        if (currentSrc === "./assets/icons/top-arrow.svg") {
            img.attr("src", "./assets/icons/bottom-arrow.svg"); // Switch to down arrow
        } else {
            img.attr("src", "./assets/icons/top-arrow.svg"); // Switch to top arrow
        }
    });


    $("#explore-options-four").click(function() {
        var img = $("#explore-four-img");
        var currentSrc = img.attr("src");
        console.log(img,'img')
        // Toggle between the two images
        if (currentSrc === "./assets/icons/top-arrow.svg") {
            img.attr("src", "./assets/icons/bottom-arrow.svg"); // Switch to down arrow
        } else {
            img.attr("src", "./assets/icons/top-arrow.svg"); // Switch to top arrow
        }
    });



    $("#explore-options-five").click(function() {
        var img = $("#explore-five-img");
        var currentSrc = img.attr("src");
        console.log(img,'img')
        // Toggle between the two images
        if (currentSrc === "./assets/icons/top-arrow.svg") {
            img.attr("src", "./assets/icons/bottom-arrow.svg"); // Switch to down arrow
        } else {
            img.attr("src", "./assets/icons/top-arrow.svg"); // Switch to top arrow
        }
    });
});











document.addEventListener('DOMContentLoaded', function() {
    const scrollableContainer = document.getElementById('scrollable-container');
    const leftIcon = document.getElementById('left-icon-container');
    const rightIcon = document.getElementById('right-icon-container');

    // Get the width of one card (assuming all cards have the same width)
    // const cardWidth = document.querySelector('.inspiration-card-item').offsetWidth;

    // Scroll to the right
    rightIcon.addEventListener('click', function() {
        scrollableContainer.scrollBy({
            left: 180, // Scroll by one card's width
            behavior: 'smooth' // Smooth scroll effect
        });
    });

    // Scroll to the left
    leftIcon.addEventListener('click', function() {
        scrollableContainer.scrollBy({
            left: -180, // Scroll backward by one card's width
            behavior: 'smooth'
        });
    });
});