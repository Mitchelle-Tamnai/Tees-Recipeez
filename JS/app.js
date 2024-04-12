document.addEventListener('DOMContentLoaded', () => {
    // Code to execute when the DOM content is fully loaded
    console.log('DOM content loaded');
});


function getBrekkieRecipes() {
    let breakfastUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=a377ae10&app_key=348b408601f3c104ba464dfbb2fe7dbc&mealType=Breakfast';

    fetch(breakfastUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

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
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

const brekkieSearch = document.getElementById('brekkieSearch');

brekkieSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getBrekkieRecipes();
});


function getLunchRecipes() {
    let lunchUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=a377ae10&app_key=%20348b408601f3c104ba464dfbb2fe7dbc&mealType=Lunch'
    
    fetch(lunchUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

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
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

const lunchSearch = document.getElementById('lunchSearch');

lunchSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getLunchRecipes();
});



function getDinnerRecipes() {
    let dinnerUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=a377ae10&app_key=%20348b408601f3c104ba464dfbb2fe7dbc&mealType=Dinner'

    fetch(dinnerUrl)
    .then(resp => resp.json())
    .then (data => {
        const cards = document.querySelector('.card-body');
        // Clear existing content
        cards.innerHTML = '';

        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const card = document.createElement('div');
            card.classList.add('card');

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
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
    
}

const dinnerSearch = document.getElementById('dinnerSearch');

dinnerSearch.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    getDinnerRecipes();
});