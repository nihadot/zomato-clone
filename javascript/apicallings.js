const products = [
    {
        name:"Biryani",
        // image:"../assets/images/biriyani.avif",
        image:"/assets/images/biriyani.avif",
    },
    {
        name:"Chicken",
        image:"../assets/images/chiken.avif",
    },
    {
        name:"Fried Rice",
        image:"../assets/images/frid-rice.avif"
    },
    {
        name:"Shawarma",
        image:"../assets/images/shawarma.avif"
    },
    {
        name:"Butter Chicken",
        image:"../assets/images/butter-chiken.avif"
    },
    {
        name:"Fish",
        image:"../assets/images/fish.avif"
    },
    {
        name:"Noodles",
        image:"../assets/images/noodles.avif"
    },
    {
        name:"Pratha",
        image:"../assets/images/pratha.avif"
    }
]

$(document).ready(function() {
    // API URL
    
    // Function to fetch categories and load them dynamically
    function fetchCategories() {
        products.forEach(category => {
            const categoryHTML = `
                <div class="inspiration-card-item">
                    <img src="${category.image}" alt="${category.name}" class="inspiration-card-item-img">
                     <label for="" class="">${category.name}</label>
                </div>
            `;
            $('#scrollable-container').append(categoryHTML);
        });
    }

    // Call the function to fetch and display the categories
    fetchCategories();
});






$(document).ready(function() {

    function fetchCategories() {
        products.forEach(category => {
            const categoryHTML = `
                     <div class="col-3" >
                        <img style="border-radius: 100%;" class="img-fluid" src="${category.image}" alt="${category.name}">
                        <p class="card-title text-center mt-2">${category.name}</p>
                    </div>
            `;
            $('#products-container-mobile').append(categoryHTML);
        });
    }
    // Call the function to fetch and display the categories
    fetchCategories(8);



    // const seeMoreBtn = document.getElementById('see-more-btn');

    // seeMoreBtn.addEventListener('click', function() {
    //     // Check the current state of the button's "see-more" attribute
    //     if (seeMoreBtn.getAttribute('see-more') === 'true') {
    //         // If the attribute is 'true', it means "See less" is currently displayed, so toggle back to "See more"
    //         seeMoreBtn.setAttribute('see-more', 'false');
    //         seeMoreBtn.innerHTML = `See more <img src="./assets/icons/bottom-arrow.svg" class="bottom-arrow-svg-icon" alt="">`;
            
    //         // You can load a smaller set of items or hide extra items (for example, show only the first 8)
    //         fetchCategories(8); // Fetch or display fewer items
    //     } else {
    //         $('#products-container-mobile').empty();
    //         // If the attribute is 'false', it means "See more" is currently displayed, so toggle to "See less"
    //         seeMoreBtn.setAttribute('see-more', 'true');
    //         seeMoreBtn.innerHTML = `See less <img src="../assets/icons/top-arrow.svg" class="bottom-arrow-svg-icon" alt="">`;
            
    //         // You can load more items or display the full set (for example, show all or more than 8 items)
    //         fetchCategories(12); // Fetch or display more items
    //     }
    // });
    
    // // Initially set the "see-more" attribute to false when the page loads
    // seeMoreBtn.setAttribute('see-more', 'false');
    

});