let searchRecipe = document.querySelector("#searchRecipe");
let selectRecipe = document.querySelector("#selectRecipe");
let row = document.querySelector("#row");

(function () {
    const recipesList = [
        "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
        "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
        "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
        "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
        "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
        "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
        "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
        "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
        "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
        "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
        "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
        "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
        "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
        "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
        "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
        "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
        "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
        "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"
      ];
      let allOptions = "";
      for (let recipe of recipesList){
        allOptions += `
            <option value="${recipe}">${recipe}</option>
        `
      }
      selectRecipe.innerHTML= allOptions
})();

async function returnRecipe(searchRecipe = "pizza") {
  try {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchRecipe}`);
    response = await response.json();
    showAllRecipes(response.recipes);
  } catch {
          console.log("Error! something went wrong");
  }
}
returnRecipe();

function showAllRecipes(recipesList){
  let container = "";
  for (let item of recipesList){
    container += ` <div class="col-md-3 col-sm-6">
            <img src="${item.image_url}" alt="image" class="w-100">
            <h2>${item.title}</h2>
            <p>${item.publisher}</p>
            </div>`;
          }
    row.innerHTML = container;
}


selectRecipe.addEventListener ("change", function(e){
  returnRecipe(e.target.value);
})

searchRecipe.addEventListener("input", function(e){
  returnRecipe(e.target.value);
})


