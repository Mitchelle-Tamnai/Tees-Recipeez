document.addEventListener('DOMContentLoaded', () => {
    // Code to execute when the DOM content is fully loaded
    console.log('DOM content loaded');
});

// Function to fetch breakfast recipes
function getBrekkieRecipes() {
    let breakfastUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=a377ae10&app_key=348b408601f3c104ba464dfbb2fe7dbc&mealType=Breakfast';

    // Fetch data from the API
    fetch(breakfastUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        // Loop through each recipe in the data
        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

            // Create HTML for each recipe card
            card.innerHTML = `
                <div class="card-body">
                    // <h3>${recipe.label}</h3>
                        <img src="${recipe.image}" alt="${recipe.label}">
                        <p>${recipe.source}</p>
                        <p>Ingredients:</p>
                        <ul>
                            ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <a href="${recipe.url}" target="_blank">View Recipe</a>
                    
                </div>
            `;

            // Append the card to the container
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

// Get the form for breakfast search
const brekkieSearch = document.getElementById('brekkieSearch');

// Add event listener for breakfast search form submission
brekkieSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getBrekkieRecipes();
});



// Function to fetch lunch recipes
function getLunchRecipes() {
    let lunchUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=a377ae10&app_key=%20348b408601f3c104ba464dfbb2fe7dbc&mealType=Lunch'
    
    // Fetch data from the API
    fetch(lunchUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        // Loop through each recipe in the data
        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

            // Create HTML for each recipe card
            card.innerHTML = `
                <div class="card-body">
                    // <h3>${recipe.label}</h3>
                        <img src="${recipe.image}" alt="${recipe.label}">
                        <p>${recipe.source}</p>
                        <p>Ingredients:</p>
                        <ul>
                            ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <a href="${recipe.url}" target="_blank">View Recipe</a>
                    
                </div>
            `;

            // Append the card to the container
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

// Get the form for lunch search
const lunchSearch = document.getElementById('lunchSearch');

// Add event listener for lunch search form submission
lunchSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getLunchRecipes();
});



// Function to fetch dinner recipes
function getDinnerRecipes() {
    let dinnerUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=a377ae10&app_key=%20348b408601f3c104ba464dfbb2fe7dbc&mealType=Dinner'

    // Fetch data from the API
    fetch(dinnerUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        // Loop through each recipe in the data
        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

            // Create HTML for each recipe card
            card.innerHTML = `
                <div class="card-body">
                    // <h3>${recipe.label}</h3>
                        <img src="${recipe.image}" alt="${recipe.label}">
                        <p>${recipe.source}</p>
                        <p>Ingredients:</p>
                        <ul>
                            ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <a href="${recipe.url}" target="_blank">View Recipe</a>
                    
                </div>
            `;

            // Append the card to the container
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
    
}

// Get the form for dinner search
const dinnerSearch = document.getElementById('dinnerSearch');

// Add event listener for dinner search form submission
dinnerSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getDinnerRecipes();
});