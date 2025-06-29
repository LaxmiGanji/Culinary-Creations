const recipeData = {
  // Single Ingredient Recipes
  "eggs": [{
    author: "Classic Scrambled Eggs",
    title: "3 eggs, butter, salt, pepper",
    content: `
1. Crack eggs into a bowl and whisk
2. Add salt and pepper
3. Heat butter in pan over medium heat
4. Pour eggs and stir gently
5. Cook until just set but still creamy
6. Serve immediately
    `,
    date_posted: "scrambled_eggs.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Perfect Hard Boiled Eggs",
    title: "6 eggs, water, pinch of salt",
    content: `
1. Place eggs in pot with cold water
2. Bring to boil
3. Remove from heat, cover
4. Let sit for 10-12 minutes
5. Transfer to ice bath
6. Peel and serve
    `,
    date_posted: "boiled_eggs.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Sunny Side Up Eggs",
    title: "3 eggs, butter, salt, pepper",
    content: `
1. Heat pan on medium-low
2. Add butter to melt
3. Crack eggs carefully
4. Cover pan with lid
5. Cook until whites set
6. Season and serve
    `,
    date_posted: "sunny_eggs.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread": [{
    author: "Garlic Toast",
    title: "4 bread slices, butter, garlic, herbs",
    content: `
1. Mix softened butter with minced garlic
2. Spread on bread slices
3. Sprinkle with herbs
4. Toast until golden
5. Serve hot
    `,
    date_posted: "garlic_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cinnamon Toast",
    title: "4 bread slices, butter, cinnamon, sugar",
    content: `
1. Toast bread lightly
2. Spread with butter
3. Mix cinnamon and sugar
4. Sprinkle mixture on toast
5. Broil for 1 minute
    `,
    date_posted: "cinnamon_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Herb Croutons",
    title: "4 bread slices, olive oil, herbs, garlic powder",
    content: `
1. Cut bread into cubes
2. Toss with oil and seasonings
3. Spread on baking sheet
4. Bake at 375°F for 10-15 minutes
5. Cool and store
    `,
    date_posted: "croutons.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice": [{
    author: "Perfect Steamed Rice",
    title: "1 cup rice, water, salt",
    content: `
1. Rinse rice until water runs clear
2. Add 1.5 cups water per cup of rice
3. Add pinch of salt
4. Bring to boil
5. Reduce heat, simmer 18 minutes
6. Let rest 5 minutes
7. Fluff with fork
    `,
    date_posted: "steamed_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Coconut Rice",
    title: "1 cup rice, coconut milk, water, salt",
    content: `
1. Rinse rice thoroughly
2. Combine with coconut milk and water
3. Add salt
4. Bring to boil
5. Simmer 15-18 minutes
6. Let stand 10 minutes
7. Fluff and serve
    `,
    date_posted: "coconut_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "water": [{
    author: "Boiled Water",
    title: "2 cups water",
    content: `
1. Pour water into a pot
2. Bring to a boil
3. Use as needed for tea, coffee, or cooking
    `,
    date_posted: "boiled_water.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "ice": [{
    author: "Ice Cubes",
    title: "Water, ice tray",
    content: `
1. Fill ice tray with water
2. Place in freezer
3. Wait until frozen
4. Use cubes in drinks
    `,
    date_posted: "ice_cubes.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "milk": [{
    author: "Warm Milk",
    title: "1 cup milk",
    content: `
1. Pour milk into saucepan
2. Heat gently until warm
3. Pour into cup and serve
    `,
    date_posted: "warm_milk.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cold Milk",
    title: "1 cup milk, ice (optional)",
    content: `
1. Pour milk into glass
2. Add ice if desired
3. Serve chilled
    `,
    date_posted: "cold_milk.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "mutton": [{
    author: "Simple Boiled Mutton",
    title: "500g mutton, water, salt",
    content: `
1. Add mutton and water to pot
2. Add salt
3. Boil until tender
4. Use in curries or serve with rice
    `,
    date_posted: "boiled_mutton.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "paneer": [{
    author: "Grilled Paneer Cubes",
    title: "200g paneer, oil, salt",
    content: `
1. Cut paneer into cubes
2. Brush with oil and salt
3. Grill until golden
4. Serve hot
    `,
    date_posted: "grilled_paneer.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "spinach": [{
    author: "Sautéed Spinach",
    title: "2 cups spinach, oil, salt",
    content: `
1. Heat oil in pan
2. Add spinach and salt
3. Sauté until wilted
4. Serve warm
    `,
    date_posted: "sauteed_spinach.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "corn": [{
    author: "Boiled Corn on the Cob",
    title: "2 corn cobs, water, salt",
    content: `
1. Boil water in a pot
2. Add corn and salt
3. Cook until tender
4. Serve with butter
    `,
    date_posted: "boiled_corn.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "beans": [{
    author: "Steamed Green Beans",
    title: "200g green beans, water, salt",
    content: `
1. Trim beans
2. Steam with water and salt
3. Serve as a side dish
    `,
    date_posted: "steamed_beans.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "fish": [{
    author: "Pan-Seared Fish",
    title: "1 fish fillet, oil, salt, pepper",
    content: `
1. Heat oil in pan
2. Season fish
3. Sear on both sides until cooked
4. Serve hot
    `,
    date_posted: "seared_fish.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "tofu": [{
    author: "Crispy Tofu Cubes",
    title: "200g tofu, oil, salt",
    content: `
1. Cut tofu into cubes
2. Pat dry and season
3. Fry in oil until crispy
4. Serve with sauce
    `,
    date_posted: "crispy_tofu.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Two Ingredient Recipes
  "eggs bread": [{
    author: "French Toast",
    title: "4 bread slices, 2 eggs, milk, cinnamon, vanilla (optional)",
    content: `
1. Beat eggs with milk and cinnamon
2. Dip bread in mixture
3. Heat butter in pan
4. Cook until golden
5. Flip and repeat
6. Serve with maple syrup
    `,
    date_posted: "french_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Egg in a Basket",
    title: "2 bread slices, 2 eggs, butter, salt, pepper",
    content: `
1. Cut holes in bread slices
2. Butter both sides
3. Place in hot pan
4. Crack egg into hole
5. Cook until white sets
6. Flip and finish
    `,
    date_posted: "egg_basket.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Savory French Toast",
    title: "4 bread slices, 3 eggs, herbs, salt, pepper",
    content: `
1. Beat eggs with herbs and seasonings
2. Soak bread slices
3. Heat pan with butter
4. Cook until golden
5. Serve with hot sauce
    `,
    date_posted: "savory_french_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs cheese": [{
    author: "Classic Cheese Omelette",
    title: "3 eggs, 1/2 cup cheese, butter, salt, pepper",
    content: `
1. Beat eggs with salt and pepper
2. Melt butter in pan
3. Pour eggs and let set
4. Add cheese on one half
5. Fold and finish cooking
6. Serve hot
    `,
    date_posted: "cheese_omelette.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Scrambled Eggs",
    title: "3 eggs, 1/4 cup cheese, butter, salt, pepper",
    content: `
1. Whisk eggs with salt and pepper
2. Melt butter in pan
3. Add eggs and stir gently
4. When almost set, add cheese
5. Stir until melted
6. Serve immediately
    `,
    date_posted: "cheesy_scrambled.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheese Frittata",
    title: "6 eggs, 1 cup cheese, milk, salt, pepper",
    content: `
1. Beat eggs with milk and seasonings
2. Heat oven-safe pan
3. Pour egg mixture
4. Top with cheese
5. Finish in oven
6. Cut into wedges
    `,
    date_posted: "frittata.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato cheese": [{
    author: "Cheesy Mashed Potatoes",
    title: "4 potatoes, 1 cup cheese, butter, milk, salt",
    content: `
1. Boil peeled potatoes
2. Mash with butter and milk
3. Add cheese while hot
4. Stir until melted
5. Season to taste
6. Serve immediately
    `,
    date_posted: "cheesy_mash.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Potato Wedges",
    title: "2 potatoes, 1 cup cheese, garlic powder, paprika",
    content: `
1. Cut potatoes into wedges
2. Season with spices
3. Bake at 400°F for 25 minutes
4. Top with cheese
5. Bake until melted
6. Serve hot with sauce
    `,
    date_posted: "cheese_wedges.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Potato Cheese Balls",
    title: "3 potatoes, 1 cup cheese, breadcrumbs, herbs",
    content: `
1. Mash boiled potatoes
2. Mix with grated cheese
3. Form into balls
4. Coat with breadcrumbs
5. Deep fry until golden
6. Serve with dip
    `,
    date_posted: "cheese_balls.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Three Ingredient Recipes
  "eggs cheese tomato": [{
    author: "Tomato Cheese Omelette",
    title: "3 eggs, 1 tomato, 1/2 cup cheese, salt, pepper",
    content: `
1. Dice tomato
2. Beat eggs with salt and pepper
3. Cook tomatoes briefly
4. Add eggs to pan
5. Top with cheese
6. Fold and serve
    `,
    date_posted: "tomato_omelette.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Breakfast Scramble",
    title: "3 eggs, 1 tomato, 1/2 cup cheese, herbs",
    content: `
1. Sauté diced tomatoes
2. Beat eggs with herbs
3. Add eggs to pan
4. Stir gently
5. Top with cheese
6. Serve hot
    `,
    date_posted: "breakfast_scramble.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Italian Frittata",
    title: "6 eggs, 2 tomatoes, 1 cup cheese, basil, garlic",
    content: `
1. Sauté tomatoes with garlic
2. Beat eggs with basil
3. Pour over tomatoes
4. Add cheese on top
5. Bake until set
6. Slice and serve
    `,
    date_posted: "italian_frittata.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread butter jam": [{
    author: "Classic Jam Toast",
    title: "2 bread slices, butter, favorite jam",
    content: `
1. Toast bread until golden
2. Spread butter while hot
3. Add jam layer
4. Cut diagonally
5. Serve immediately
    `,
    date_posted: "jam_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Mixed Berry Jam Toast",
    title: "2 bread slices, butter, mixed berry jam",
    content: `
1. Toast bread golden brown
2. Spread butter generously
3. Add mixed berry jam
4. Cut into triangles
5. Serve warm
    `,
    date_posted: "berry_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "French Jam Toast",
    title: "2 bread slices, butter, strawberry jam, honey",
    content: `
1. Toast bread lightly
2. Spread butter
3. Add jam layer
4. Drizzle honey
5. Serve immediately
    `,
    date_posted: "french_jam_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato": [{
    author: "Crispy Potato Wedges",
    title: "2 large potatoes, olive oil, salt, pepper, paprika, garlic powder",
    content: `
1. Cut potatoes into wedges
2. Toss with olive oil and seasonings
3. Arrange on baking sheet
4. Bake at 425°F for 30-35 minutes
5. Flip halfway through
6. Serve hot with ketchup
    `,
    date_posted: "potato_wedges.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Mashed Potatoes",
    title: "3 potatoes, butter, milk, salt, pepper",
    content: `
1. Boil potatoes until tender
2. Drain well
3. Add butter and warm milk
4. Mash until smooth
5. Season to taste
6. Serve hot
    `,
    date_posted: "mashed_potato.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Roasted Herb Potatoes",
    title: "4 potatoes, olive oil, rosemary, thyme, garlic",
    content: `
1. Cut potatoes into chunks
2. Toss with oil and herbs
3. Spread on baking sheet
4. Roast at 425°F
5. Turn halfway through
6. Serve crispy
    `,
    date_posted: "herb_potatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken": [{
    author: "Simple Grilled Chicken",
    title: "2 chicken breasts, olive oil, salt, pepper, herbs",
    content: `
1. Season chicken with salt and pepper
2. Brush with olive oil
3. Heat grill or pan
4. Cook 6-7 minutes per side
5. Let rest for 5 minutes
6. Slice and serve
    `,
    date_posted: "grilled_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Herb Roasted Chicken",
    title: "2 chicken breasts, herbs, garlic, lemon, oil",
    content: `
1. Mix herbs and oil
2. Marinate chicken
3. Preheat oven to 400°F
4. Roast for 25-30 minutes
5. Rest for 5 minutes
6. Slice and serve
    `,
    date_posted: "herb_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Pan-Seared Chicken",
    title: "2 chicken breasts, butter, garlic, thyme",
    content: `
1. Season chicken well
2. Heat pan with butter
3. Sear 6-7 minutes each side
4. Add garlic and thyme
5. Baste with butter
6. Rest before serving
    `,
    date_posted: "seared_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta": [{
    author: "Buttered Pasta",
    title: "1 pack pasta, butter, salt, pepper, parmesan (optional)",
    content: `
1. Boil pasta in salted water
2. Reserve 1/2 cup pasta water
3. Drain pasta
4. Add butter and stir
5. Season with salt and pepper
6. Add pasta water if needed
7. Top with parmesan if desired
    `,
    date_posted: "butter_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Garlic Butter Pasta",
    title: "1 pack pasta, garlic, butter, parsley",
    content: `
1. Cook pasta al dente
2. Melt butter in pan
3. Sauté minced garlic
4. Toss with pasta
5. Add chopped parsley
6. Season and serve
    `,
    date_posted: "garlic_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Lemon Herb Pasta",
    title: "1 pack pasta, lemon, olive oil, herbs",
    content: `
1. Cook pasta until done
2. Mix olive oil and lemon
3. Add fresh herbs
4. Toss with hot pasta
5. Season to taste
6. Serve immediately
    `,
    date_posted: "lemon_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Two Ingredient Recipes
  "chicken rice": [{
    author: "Simple Chicken Rice Bowl",
    title: "2 chicken breasts, 1 cup rice, salt, pepper, soy sauce",
    content: `
1. Cook rice according to package
2. Season and cook chicken
3. Slice chicken
4. Serve over rice
5. Drizzle with soy sauce
    `,
    date_posted: "chicken_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato onion": [{
    author: "Sautéed Potatoes and Onions",
    title: "3 potatoes, 1 large onion, oil, salt, pepper, herbs",
    content: `
1. Dice potatoes and onions
2. Heat oil in pan
3. Add potatoes, cook 10 minutes
4. Add onions
5. Cook until golden
6. Season and serve
    `,
    date_posted: "sauteed_potato.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Hash Browns",
    title: "2 potatoes, 1 onion, oil, salt, pepper",
    content: `
1. Grate potatoes and onion
2. Squeeze out moisture
3. Season mixture
4. Heat oil in pan
5. Cook until crispy
6. Flip and finish
    `,
    date_posted: "hash_browns.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Roasted Potato and Onion",
    title: "4 potatoes, 2 onions, olive oil, rosemary, salt",
    content: `
1. Cut vegetables into chunks
2. Toss with oil and herbs
3. Spread on baking sheet
4. Roast at 400°F
5. Stir halfway through
6. Serve hot
    `,
    date_posted: "roasted_potato_onion.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Three Ingredient Recipes
  "chicken potato carrot": [{
    author: "One-Pan Roasted Chicken and Vegetables",
    title: "2 chicken breasts, 2 potatoes, 2 carrots, olive oil, herbs, salt, pepper",
    content: `
1. Cut vegetables into chunks
2. Season everything with oil and herbs
3. Arrange on baking sheet
4. Roast at 400°F for 25-30 minutes
5. Check chicken temperature
6. Rest and serve
    `,
    date_posted: "roasted_chicken_veg.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice beans corn": [{
    author: "Mexican Rice Bowl",
    title: "1 cup rice, 1 can black beans, 1 cup corn, spices, lime",
    content: `
1. Cook rice
2. Heat beans and corn
3. Season with Mexican spices
4. Combine in bowl
5. Squeeze lime juice
6. Top with optional garnishes
    `,
    date_posted: "mexican_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "tomato potato onion rice": [
    {
      author: "Vegetable Pulao",
      title: "1 cup rice, 1 tomato (chopped), 1 potato (diced), 1 onion (sliced), 2 tbsp oil, 1 tsp cumin seeds, Salt and spices to taste",
      content: `
1. Wash and soak rice for 15 minutes.
2. Heat oil in a pan and add cumin seeds.
3. Add sliced onions and sauté until golden brown.
4. Add diced potatoes and cook for 5 minutes.
5. Stir in chopped tomatoes and spices (turmeric, garam masala, salt).
6. Add soaked rice and 2 cups water.
7. Cook covered on medium heat for 12–15 minutes or until rice is done.
8. Fluff with a fork and serve hot.
      `,
      date_posted: "vegetable_pulao.jpg",
      isFavorite: "false",
      classname: "heart",
    }
  ],

  // New Three Ingredient Combinations
  "eggs potato onion": [{
    author: "Breakfast Hash",
    title: "2 potatoes, 3 eggs, 1 onion, oil, salt, pepper",
    content: `
1. Dice potatoes and onion
2. Fry potatoes until crispy
3. Add onions and cook
4. Create wells in mixture
5. Crack eggs into wells
6. Cover and cook until set
    `,
    date_posted: "breakfast_hash.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice vegetables egg": [{
    author: "Classic Fried Rice",
    title: "2 cups cooked rice, 1 cup mixed vegetables, 2 eggs",
    content: `
1. Scramble eggs and set aside
2. Stir-fry vegetables
3. Add cold rice
4. Mix in eggs
5. Season with soy sauce
6. Serve hot
    `,
    date_posted: "fried_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Rice Bowl with Fried Egg",
    title: "2 cups rice, 1 cup vegetables, 2 eggs",
    content: `
1. Steam rice
2. Sauté vegetables
3. Fry eggs sunny side up
4. Arrange in bowl
5. Add sauce
6. Serve immediately
    `,
    date_posted: "rice_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Egg Rice Casserole",
    title: "3 cups rice, 2 cups vegetables, 4 eggs",
    content: `
1. Layer rice in baking dish
2. Add cooked vegetables
3. Beat eggs with seasonings
4. Pour over rice
5. Bake until set
6. Rest before serving
    `,
    date_posted: "rice_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Additional Single Ingredient Recipes
  "tomato": [{
    author: "Roasted Tomatoes",
    title: "4 tomatoes, olive oil, garlic, herbs, salt",
    content: `
1. Cut tomatoes in half
2. Drizzle with olive oil
3. Add garlic and herbs
4. Roast at 400°F
5. Cook 20-25 minutes
6. Serve warm
    `,
    date_posted: "roasted_tomatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Marinated Tomatoes",
    title: "4 tomatoes, olive oil, basil, garlic",
    content: `
1. Slice tomatoes
2. Mix marinade
3. Pour over tomatoes
4. Let sit 30 minutes
5. Garnish with basil
6. Serve room temperature
    `,
    date_posted: "marinated_tomatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Tomato Bruschetta",
    title: "3 tomatoes, garlic, basil, olive oil",
    content: `
1. Dice tomatoes finely
2. Mix with garlic and basil
3. Add olive oil
4. Season well
5. Let flavors meld
6. Serve on bread
    `,
    date_posted: "bruschetta_mix.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "onion": [{
    author: "Caramelized Onions",
    title: "3 onions, butter, salt, sugar",
    content: `
1. Slice onions thinly
2. Melt butter in pan
3. Add onions and salt
4. Cook on low heat
5. Stir occasionally
6. Cook 30-40 minutes until golden
    `,
    date_posted: "caramelized_onions.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Crispy Onion Rings",
    title: "2 onions, flour, milk, seasonings",
    content: `
1. Slice onions into rings
2. Dip in seasoned flour
3. Then in milk mixture
4. Coat again in flour
5. Fry until golden
6. Season and serve
    `,
    date_posted: "onion_rings.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "French Onion Soup",
    title: "4 onions, beef broth, butter, bread",
    content: `
1. Slice onions thinly
2. Caramelize in butter
3. Add beef broth
4. Simmer 30 minutes
5. Top with bread
6. Broil with cheese
    `,
    date_posted: "onion_soup.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // More Two Ingredient Combinations
  "bread cheese": [{
    author: "Grilled Cheese",
    title: "2 bread slices, 2 cheese slices, butter",
    content: `
1. Butter bread slices
2. Place cheese between slices
3. Heat pan on medium
4. Grill until golden
5. Flip and repeat
6. Serve hot
    `,
    date_posted: "grilled_cheese.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato onion": [{
    author: "Hash Browns",
    title: "2 potatoes, 1 onion, oil, salt, pepper",
    content: `
1. Grate potatoes and onion
2. Squeeze out moisture
3. Season mixture
4. Heat oil in pan
5. Cook until crispy
6. Flip and finish
    `,
    date_posted: "hash_browns.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // More Three Ingredient Combinations
  "bread eggs milk": [{
    author: "Basic Bread Pudding",
    title: "4 bread slices, 2 eggs, 1 cup milk, sugar, vanilla",
    content: `
1. Cut bread into cubes
2. Whisk eggs and milk
3. Add sugar and vanilla
4. Pour over bread
5. Bake at 350°F
6. Serve warm
    `,
    date_posted: "bread_pudding.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato cheese onion": [{
    author: "Loaded Baked Potato",
    title: "2 potatoes, 1 cup cheese, 1 onion",
    content: `
1. Bake potatoes until tender
2. Sauté chopped onions
3. Split potatoes
4. Add cheese and onions
5. Broil until melted
6. Top with chives
    `,
    date_posted: "loaded_potato.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Potato Casserole",
    title: "4 potatoes, 2 cups cheese, 2 onions",
    content: `
1. Layer sliced potatoes
2. Add sautéed onions
3. Sprinkle cheese between layers
4. Pour cream over top
5. Bake until bubbly
6. Let rest before serving
    `,
    date_posted: "potato_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Potato Cheese Croquettes",
    title: "3 potatoes, 1 cup cheese, 1 onion",
    content: `
1. Mash cooked potatoes
2. Mix with cheese and onion
3. Form into cylinders
4. Coat with breadcrumbs
5. Fry until golden
6. Drain and serve
    `,
    date_posted: "croquettes.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice tomato onion": [{
    author: "Spanish Rice",
    title: "2 cups rice, 2 tomatoes, 1 onion",
    content: `
1. Sauté diced onion
2. Add rice and toast
3. Add chopped tomatoes
4. Pour in broth
5. Simmer until done
6. Fluff and serve
    `,
    date_posted: "spanish_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Tomato Rice Pilaf",
    title: "1 cup rice, 3 tomatoes, 1 onion",
    content: `
1. Purée tomatoes
2. Cook onions until soft
3. Add rice and toast
4. Pour tomato purée
5. Cook until absorbed
6. Rest 5 minutes
    `,
    date_posted: "tomato_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "One-Pot Rice",
    title: "2 cups rice, 2 tomatoes, 2 onions",
    content: `
1. Layer rice and vegetables
2. Add seasonings
3. Pour hot water
4. Bring to boil
5. Simmer until done
6. Let stand covered
    `,
    date_posted: "one_pot_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs milk butter": [{
    author: "Creamy Scrambled Eggs",
    title: "3 eggs, 1/4 cup milk, 1 tbsp butter, salt, pepper",
    content: `
1. Whisk eggs with milk
2. Melt butter in pan
3. Pour egg mixture
4. Stir gently
5. Cook until just set
6. Season and serve
    `,
    date_posted: "creamy_eggs.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread tomato cheese": [{
    author: "Quick Pizza Toast",
    title: "2 bread slices, 1 tomato, 1/2 cup cheese",
    content: `
1. Toast bread lightly
2. Top with tomato slices
3. Add seasonings
4. Sprinkle cheese
5. Broil until melted
6. Serve hot
    `,
    date_posted: "pizza_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Grilled Tomato Cheese",
    title: "2 bread slices, 2 tomato slices, 2 cheese slices",
    content: `
1. Butter bread slices
2. Layer cheese and tomato
3. Close sandwich
4. Grill until golden
5. Flip and finish
6. Cut diagonally
    `,
    date_posted: "tomato_cheese.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Bruschetta with Cheese",
    title: "4 bread slices, 2 tomatoes, 1/2 cup cheese",
    content: `
1. Toast bread
2. Dice tomatoes with herbs
3. Top bread with tomatoes
4. Add cheese
5. Broil briefly
6. Serve immediately
    `,
    date_posted: "bruschetta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // Additional Two Ingredient Combinations
  "tomato onion": [{
    author: "Quick Tomato Sauce",
    title: "4 tomatoes, 1 onion, oil, salt, herbs",
    content: `
1. Chop tomatoes and onion
2. Sauté onion until soft
3. Add tomatoes
4. Simmer 15 minutes
5. Season to taste
6. Use as desired
    `,
    date_posted: "tomato_sauce.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs vegetables": [{
    author: "Vegetable Omelette",
    title: "3 eggs, 1 cup mixed vegetables, oil, salt, pepper",
    content: `
1. Chop vegetables finely
2. Beat eggs with seasonings
3. Cook vegetables briefly
4. Pour in eggs
5. Fold when set
6. Serve hot
    `,
    date_posted: "veg_omelette.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice beans": [{
    author: "Simple Rice and Beans",
    title: "1 cup rice, 1 can beans, seasonings",
    content: `
1. Cook rice
2. Heat beans with spices
3. Combine in bowl
4. Season to taste
5. Add hot sauce if desired
6. Serve warm
    `,
    date_posted: "rice_beans.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  // More Three Ingredient Combinations
  "potato tomato cheese": [{
    author: "Cheesy Potato Bake",
    title: "3 potatoes, 2 tomatoes, 1 cup cheese, herbs, salt",
    content: `
1. Slice potatoes and tomatoes
2. Layer in baking dish
3. Add seasonings
4. Top with cheese
5. Bake until bubbly
6. Let rest before serving
    `,
    date_posted: "potato_bake.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs spinach cheese": [{
    author: "Spinach and Cheese Frittata",
    title: "6 eggs, 2 cups spinach, 1 cup cheese, seasonings",
    content: `
1. Wilt spinach
2. Beat eggs with seasonings
3. Add spinach to pan
4. Pour in eggs
5. Top with cheese
6. Finish under broiler
    `,
    date_posted: "frittata.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread garlic butter": [{
    author: "Garlic Bread",
    title: "1 bread loaf, 4 garlic cloves, 1/2 cup butter, herbs",
    content: `
1. Soften butter
2. Mix with minced garlic
3. Add herbs
4. Spread on bread
5. Bake until crispy
6. Serve warm
    `,
    date_posted: "garlic_bread.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice mushroom onion": [{
    author: "Mushroom Rice Pilaf",
    title: "1 cup rice, 8 oz mushrooms, 1 onion, butter, broth",
    content: `
1. Sauté mushrooms and onion
2. Add rice and toast
3. Pour in broth
4. Simmer until done
5. Fluff with fork
6. Season and serve
    `,
    date_posted: "mushroom_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta garlic oil": [{
    author: "Aglio e Olio",
    title: "1 pack pasta, 4 garlic cloves, 1/2 cup olive oil, red pepper",
    content: `
1. Cook pasta al dente
2. Slice garlic thinly
3. Heat oil with garlic
4. Add red pepper flakes
5. Toss with pasta
6. Serve with parsley
    `,
    date_posted: "aglio_olio.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "carrot": [{
    author: "Glazed Carrots",
    title: "4 carrots, butter, honey, herbs",
    content: `
1. Slice carrots evenly
2. Melt butter in pan
3. Add carrots and honey
4. Cook until tender
5. Season with herbs
6. Serve hot
    `,
    date_posted: "glazed_carrots.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Roasted Carrots",
    title: "6 carrots, olive oil, thyme, garlic",
    content: `
1. Cut carrots into batons
2. Toss with oil and herbs
3. Spread on baking sheet
4. Roast at 400°F
5. Turn halfway through
6. Garnish and serve
    `,
    date_posted: "roasted_carrots.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "cucumber": [{
    author: "Quick Cucumber Salad",
    title: "2 cucumbers, vinegar, dill, salt",
    content: `
1. Slice cucumbers thinly
2. Mix with vinegar
3. Add chopped dill
4. Season with salt
5. Chill 30 minutes
6. Serve fresh
    `,
    date_posted: "cucumber_salad.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cucumber Yogurt Dip",
    title: "1 cucumber, yogurt, garlic, mint",
    content: `
1. Grate cucumber
2. Drain excess water
3. Mix with yogurt
4. Add minced garlic
5. Stir in mint
6. Chill before serving
    `,
    date_posted: "cucumber_dip.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "mushroom garlic": [{
    author: "Garlic Mushrooms",
    title: "8 oz mushrooms, 4 garlic cloves, butter, parsley",
    content: `
1. Clean mushrooms well
2. Slice garlic thinly
3. Sauté in butter
4. Add mushrooms
5. Cook until golden
6. Garnish with parsley
    `,
    date_posted: "garlic_mushrooms.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Mushroom Bruschetta",
    title: "6 oz mushrooms, 3 garlic cloves, bread, herbs",
    content: `
1. Chop mushrooms finely
2. Sauté with garlic
3. Toast bread slices
4. Top with mixture
5. Add fresh herbs
6. Serve immediately
    `,
    date_posted: "mushroom_bruschetta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "spinach cheese": [{
    author: "Cheesy Spinach Dip",
    title: "2 cups spinach, cream cheese, garlic, mozzarella",
    content: `
1. Wilt spinach
2. Mix with cream cheese
3. Add minced garlic
4. Top with mozzarella
5. Bake until bubbly
6. Serve with bread
    `,
    date_posted: "spinach_dip.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Spinach Cheese Rolls",
    title: "2 cups spinach, ricotta, mozzarella, pastry",
    content: `
1. Mix cheeses
2. Add chopped spinach
3. Roll in pastry
4. Brush with egg
5. Bake until golden
6. Cool slightly
    `,
    date_posted: "spinach_rolls.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken rice vegetables": [{
    author: "One-Pot Chicken Rice",
    title: "2 chicken breasts, 1 cup rice, mixed vegetables",
    content: `
1. Season chicken
2. Cook in pot
3. Add rice and veggies
4. Pour in broth
5. Simmer until done
6. Fluff and serve
    `,
    date_posted: "one_pot_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken Vegetable Rice Bowl",
    title: "2 chicken breasts, 2 cups rice, seasonal vegetables",
    content: `
1. Cook rice
2. Grill chicken
3. Sauté vegetables
4. Assemble bowls
5. Add sauce
6. Serve hot
    `,
    date_posted: "chicken_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta tomato basil": [{
    author: "Fresh Tomato Pasta",
    title: "1 pack pasta, 4 tomatoes, fresh basil, garlic",
    content: `
1. Cook pasta
2. Chop tomatoes
3. Mix with basil
4. Add garlic
5. Toss with pasta
6. Serve warm
    `,
    date_posted: "tomato_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Bruschetta Pasta",
    title: "1 pack pasta, 3 tomatoes, basil, olive oil",
    content: `
1. Prepare bruschetta mix
2. Cook pasta al dente
3. Combine while hot
4. Add fresh basil
5. Drizzle olive oil
6. Toss and serve
    `,
    date_posted: "bruschetta_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato onion garlic": [{
    author: "Roasted Root Vegetables",
    title: "3 potatoes, 2 onions, 4 garlic cloves, herbs",
    content: `
1. Cut vegetables
2. Toss with oil
3. Add herbs
4. Roast at 425°F
5. Turn occasionally
6. Serve hot
    `,
    date_posted: "roasted_roots.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Garlic Mashed Potatoes",
    title: "4 potatoes, 1 onion, 6 garlic cloves, cream",
    content: `
1. Boil potatoes
2. Roast garlic
3. Sauté onion
4. Mash together
5. Add cream
6. Season well
    `,
    date_posted: "garlic_mash.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice vegetables soy": [{
    author: "Vegetable Fried Rice",
    title: "2 cups rice, mixed vegetables, soy sauce",
    content: `
1. Cook rice
2. Stir-fry vegetables
3. Add cold rice
4. Season with soy
5. Mix well
6. Serve hot
    `,
    date_posted: "veg_fried_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Asian Rice Bowl",
    title: "2 cups rice, seasonal vegetables, soy sauce",
    content: `
1. Steam rice
2. Prepare vegetables
3. Make sauce
4. Combine in bowl
5. Add toppings
6. Serve immediately
    `,
    date_posted: "asian_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken potato carrot": [{
    author: "Sheet Pan Chicken",
    title: "2 chicken breasts, 2 potatoes, 2 carrots",
    content: `
1. Cut vegetables
2. Season chicken
3. Arrange on pan
4. Drizzle with oil
5. Roast at 400°F
6. Rest before serving
    `,
    date_posted: "sheet_pan.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "One-Pan Roast",
    title: "4 chicken thighs, 3 potatoes, 3 carrots",
    content: `
1. Season all ingredients
2. Layer in pan
3. Add herbs
4. Roast until done
5. Baste occasionally
6. Serve hot
    `,
    date_posted: "one_pan_roast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread cheese garlic": [{
    author: "Cheesy Garlic Bread",
    title: "1 bread loaf, cheese blend, 4 garlic cloves",
    content: `
1. Mix butter and garlic
2. Slice bread
3. Spread mixture
4. Add cheese
5. Bake until melted
6. Serve warm
    `,
    date_posted: "cheese_garlic_bread.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Garlic Cheese Toast",
    title: "4 bread slices, mozzarella, 3 garlic cloves",
    content: `
1. Toast bread lightly
2. Rub with garlic
3. Add cheese
4. Broil until bubbly
5. Cut into triangles
6. Serve immediately
    `,
    date_posted: "cheese_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta mushroom cream": [{
    author: "Creamy Mushroom Pasta",
    title: "1 pack pasta, 8 oz mushrooms, heavy cream",
    content: `
1. Cook pasta
2. Sauté mushrooms
3. Add cream
4. Combine with pasta
5. Season well
6. Garnish and serve
    `,
    date_posted: "mushroom_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Mushroom Alfredo",
    title: "1 pack pasta, 6 oz mushrooms, cream sauce",
    content: `
1. Prepare sauce
2. Cook mushrooms
3. Boil pasta
4. Combine all
5. Add parmesan
6. Serve hot
    `,
    date_posted: "mushroom_alfredo.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs cheese spinach": [{
    author: "Spinach Quiche",
    title: "4 eggs, cheese blend, 2 cups spinach",
    content: `
1. Prepare crust
2. Wilt spinach
3. Mix with eggs
4. Add cheese
5. Bake until set
6. Cool slightly
    `,
    date_posted: "spinach_quiche.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Breakfast Casserole",
    title: "6 eggs, 1 cup cheese, 1 cup spinach",
    content: `
1. Layer ingredients
2. Beat eggs
3. Pour over
4. Top with cheese
5. Bake until golden
6. Rest 5 minutes
    `,
    date_posted: "breakfast_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken mushroom cream": [{
    author: "Creamy Mushroom Chicken",
    title: "2 chicken breasts, 8 oz mushrooms, cream",
    content: `
1. Cook chicken
2. Sauté mushrooms
3. Make cream sauce
4. Combine all
5. Simmer until thick
6. Serve over rice
    `,
    date_posted: "creamy_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken in Mushroom Sauce",
    title: "4 chicken thighs, 6 oz mushrooms, cream",
    content: `
1. Brown chicken
2. Remove chicken
3. Cook mushrooms
4. Add cream
5. Return chicken
6. Simmer until done
    `,
    date_posted: "mushroom_sauce.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato cheese bacon": [{
    author: "Loaded Potato Skins",
    title: "4 potatoes, cheese, 4 bacon strips",
    content: `
1. Bake potatoes
2. Scoop out center
3. Add fillings
4. Top with cheese
5. Bake until melted
6. Garnish and serve
    `,
    date_posted: "potato_skins.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Bacon Cheese Potatoes",
    title: "3 potatoes, 1 cup cheese, 6 bacon strips",
    content: `
1. Slice potatoes
2. Layer in dish
3. Add bacon bits
4. Cover with cheese
5. Bake until bubbly
6. Let rest briefly
    `,
    date_posted: "bacon_potatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice beans corn": [{
    author: "Mexican Rice Bowl",
    title: "2 cups rice, black beans, corn",
    content: `
1. Cook rice
2. Heat beans
3. Add corn
4. Season well
5. Mix together
6. Top with cilantro
    `,
    date_posted: "mexican_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Southwest Rice",
    title: "2 cups rice, pinto beans, corn",
    content: `
1. Prepare rice
2. Mix in beans
3. Add corn
4. Season with spices
5. Heat through
6. Garnish and serve
    `,
    date_posted: "southwest_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta cheese garlic": [{
    author: "Mac and Cheese",
    title: "1 pack pasta, cheese blend, 3 garlic cloves",
    content: `
1. Cook pasta
2. Make cheese sauce
3. Add roasted garlic
4. Combine all
5. Bake until bubbly
6. Let rest 5 minutes
    `,
    date_posted: "mac_cheese.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Garlic Parmesan Pasta",
    title: "1 pack pasta, parmesan, 4 garlic cloves",
    content: `
1. Boil pasta
2. Sauté garlic
3. Add pasta
4. Mix in cheese
5. Add pasta water
6. Toss and serve
    `,
    date_posted: "garlic_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken vegetables sauce": [{
    author: "Stir-Fry Chicken",
    title: "2 chicken breasts, mixed vegetables, stir-fry sauce",
    content: `
1. Cut chicken
2. Prepare vegetables
3. Make sauce
4. Stir-fry chicken
5. Add vegetables
6. Combine with sauce
    `,
    date_posted: "stir_fry.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken Vegetable Skillet",
    title: "3 chicken thighs, seasonal vegetables, pan sauce",
    content: `
1. Season chicken
2. Cook until golden
3. Remove chicken
4. Cook vegetables
5. Make pan sauce
6. Combine and serve
    `,
    date_posted: "chicken_skillet.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice shrimp vegetables": [{
    author: "Shrimp Fried Rice",
    title: "2 cups rice, 1 lb shrimp, mixed vegetables",
    content: `
1. Cook rice
2. Prepare shrimp
3. Stir-fry vegetables
4. Add rice
5. Mix well
6. Season and serve
    `,
    date_posted: "shrimp_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Shrimp Rice Bowl",
    title: "2 cups rice, 12 shrimp, seasonal vegetables",
    content: `
1. Steam rice
2. Grill shrimp
3. Sauté vegetables
4. Assemble bowls
5. Add sauce
6. Garnish and serve
    `,
    date_posted: "shrimp_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato carrot onion": [{
    author: "Root Vegetable Soup",
    title: "2 potatoes, 3 carrots, 1 onion, broth",
    content: `
1. Chop vegetables
2. Sauté onion
3. Add potatoes and carrots
4. Pour in broth
5. Simmer until tender
6. Season and serve
    `,
    date_posted: "root_soup.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Roasted Root Medley",
    title: "3 potatoes, 4 carrots, 2 onions, herbs",
    content: `
1. Cut vegetables evenly
2. Toss with oil
3. Add herbs
4. Roast at 400°F
5. Turn occasionally
6. Serve hot
    `,
    date_posted: "root_medley.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta tomato cheese": [{
    author: "Baked Pasta",
    title: "1 pack pasta, 3 tomatoes, cheese blend",
    content: `
1. Cook pasta
2. Make tomato sauce
3. Layer in dish
4. Top with cheese
5. Bake until bubbly
6. Rest before serving
    `,
    date_posted: "baked_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Tomato Pasta",
    title: "1 pack pasta, 4 tomatoes, mozzarella",
    content: `
1. Prepare sauce
2. Cook pasta
3. Combine both
4. Add fresh cheese
5. Toss gently
6. Serve immediately
    `,
    date_posted: "cheese_tomato_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken rice sauce": [{
    author: "Teriyaki Chicken Rice",
    title: "2 chicken breasts, 2 cups rice, teriyaki sauce",
    content: `
1. Cook rice
2. Grill chicken
3. Make sauce
4. Slice chicken
5. Serve over rice
6. Pour sauce over
    `,
    date_posted: "teriyaki_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken Rice Casserole",
    title: "3 chicken thighs, 2 cups rice, cream sauce",
    content: `
1. Cook rice
2. Prepare chicken
3. Make sauce
4. Combine all
5. Bake until hot
6. Let rest briefly
    `,
    date_posted: "rice_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs potato cheese": [{
    author: "Breakfast Hash",
    title: "4 eggs, 2 potatoes, 1 cup cheese",
    content: `
1. Dice potatoes
2. Cook until crispy
3. Make wells
4. Crack eggs in
5. Top with cheese
6. Cover until set
    `,
    date_posted: "breakfast_hash.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Potato Frittata",
    title: "6 eggs, 2 potatoes, cheese blend",
    content: `
1. Cook potatoes
2. Beat eggs
3. Combine in pan
4. Add cheese
5. Finish in oven
6. Cut into wedges
    `,
    date_posted: "potato_frittata.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "bread tomato mozzarella": [{
    author: "Caprese Sandwich",
    title: "2 bread slices, 1 tomato, fresh mozzarella",
    content: `
1. Slice tomato
2. Layer ingredients
3. Add basil
4. Drizzle oil
5. Close sandwich
6. Serve fresh
    `,
    date_posted: "caprese_sandwich.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Italian Toast",
    title: "4 bread slices, 2 tomatoes, mozzarella",
    content: `
1. Toast bread
2. Add tomatoes
3. Top with cheese
4. Broil until melted
5. Add fresh basil
6. Serve hot
    `,
    date_posted: "italian_toast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken pasta cream": [{
    author: "Creamy Chicken Pasta",
    title: "2 chicken breasts, 1 pack pasta, cream sauce",
    content: `
1. Cook pasta
2. Sauté chicken
3. Make sauce
4. Combine all
5. Heat through
6. Garnish and serve
    `,
    date_posted: "creamy_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken Alfredo",
    title: "3 chicken breasts, 1 pack pasta, alfredo sauce",
    content: `
1. Prepare sauce
2. Cook chicken
3. Boil pasta
4. Mix together
5. Add parmesan
6. Serve hot
    `,
    date_posted: "chicken_alfredo.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice curry vegetables": [{
    author: "Vegetable Curry Rice",
    title: "2 cups rice, curry sauce, mixed vegetables",
    content: `
1. Cook rice
2. Prepare curry sauce
3. Cook vegetables
4. Combine all
5. Simmer briefly
6. Serve hot
    `,
    date_posted: "curry_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Curry Rice Bowl",
    title: "2 cups rice, curry paste, seasonal vegetables",
    content: `
1. Steam rice
2. Make curry sauce
3. Cook vegetables
4. Layer in bowl
5. Pour sauce over
6. Garnish and serve
    `,
    date_posted: "curry_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken lemon herbs": [{
    author: "Lemon Herb Chicken",
    title: "2 chicken breasts, 1 lemon, fresh herbs",
    content: `
1. Season chicken
2. Heat pan
3. Cook chicken
4. Add lemon juice
5. Sprinkle herbs
6. Rest before serving
    `,
    date_posted: "lemon_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Herb Roasted Chicken",
    title: "4 chicken thighs, 2 lemons, herb mix",
    content: `
1. Marinate chicken
2. Preheat oven
3. Place in dish
4. Add lemon slices
5. Roast until done
6. Let rest briefly
    `,
    date_posted: "herb_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta vegetables olive oil": [{
    author: "Mediterranean Pasta",
    title: "1 pack pasta, mixed vegetables, olive oil",
    content: `
1. Cook pasta
2. Roast vegetables
3. Combine in bowl
4. Drizzle oil
5. Add herbs
6. Toss and serve
    `,
    date_posted: "med_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Summer Pasta Salad",
    title: "1 pack pasta, fresh vegetables, olive oil dressing",
    content: `
1. Cook and cool pasta
2. Chop vegetables
3. Make dressing
4. Combine all
5. Chill 1 hour
6. Serve cold
    `,
    date_posted: "pasta_salad.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato herbs butter": [{
    author: "Herb Butter Potatoes",
    title: "4 potatoes, herb butter, garlic",
    content: `
1. Boil potatoes
2. Make herb butter
3. Toss together
4. Season well
5. Garnish with herbs
6. Serve hot
    `,
    date_posted: "herb_potatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Buttered New Potatoes",
    title: "12 new potatoes, butter, fresh herbs",
    content: `
1. Clean potatoes
2. Boil until tender
3. Drain well
4. Add butter
5. Toss with herbs
6. Season and serve
    `,
    date_posted: "new_potatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "eggs vegetables herbs": [{
    author: "Garden Omelette",
    title: "3 eggs, mixed vegetables, fresh herbs",
    content: `
1. Chop vegetables
2. Beat eggs
3. Cook vegetables
4. Add eggs
5. Fold and cook
6. Garnish with herbs
    `,
    date_posted: "garden_omelette.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Herb Scrambled Eggs",
    title: "4 eggs, vegetables, herb mix",
    content: `
1. Prep vegetables
2. Whisk eggs
3. Cook vegetables
4. Add eggs
5. Stir gently
6. Add fresh herbs
    `,
    date_posted: "herb_eggs.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken broccoli cheese": [{
    author: "Cheesy Chicken Broccoli",
    title: "2 chicken breasts, 2 cups broccoli, cheese sauce",
    content: `
1. Steam broccoli
2. Cook chicken
3. Make cheese sauce
4. Combine all
5. Bake until bubbly
6. Serve hot
    `,
    date_posted: "chicken_broccoli.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Broccoli Chicken Casserole",
    title: "3 chicken thighs, broccoli florets, cheese blend",
    content: `
1. Prepare chicken
2. Cook broccoli
3. Layer in dish
4. Add cheese
5. Bake through
6. Rest 5 minutes
    `,
    date_posted: "broccoli_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "salmon rice vegetables": [{
    author: "Teriyaki Salmon Bowl",
    title: "2 salmon fillets, 2 cups rice, mixed vegetables",
    content: `
1. Cook rice
2. Steam vegetables
3. Grill salmon
4. Make sauce
5. Assemble bowls
6. Garnish and serve
    `,
    date_posted: "salmon_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Salmon Rice Skillet",
    title: "2 salmon fillets, 1 cup rice, seasonal vegetables",
    content: `
1. Prepare rice
2. Cook vegetables
3. Add salmon
4. Season well
5. Cover and cook
6. Serve immediately
    `,
    date_posted: "salmon_skillet.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pesto chicken": [{
    author: "Pesto Chicken Pasta",
    title: "1 pack pasta, pesto sauce, 2 chicken breasts",
    content: `
1. Cook pasta
2. Grill chicken
3. Mix with pesto
4. Combine all
5. Add parmesan
6. Serve warm
    `,
    date_posted: "pesto_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Creamy Pesto Chicken",
    title: "1 pack pasta, 3 chicken thighs, creamy pesto",
    content: `
1. Boil pasta
2. Cook chicken
3. Make sauce
4. Mix together
5. Heat through
6. Garnish and serve
    `,
    date_posted: "creamy_pesto.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "quinoa vegetables beans": [{
    author: "Quinoa Buddha Bowl",
    title: "1 cup quinoa, mixed vegetables, black beans",
    content: `
1. Cook quinoa
2. Roast vegetables
3. Heat beans
4. Assemble bowls
5. Add dressing
6. Top with seeds
    `,
    date_posted: "quinoa_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Mexican Quinoa",
    title: "2 cups quinoa, beans, corn, peppers",
    content: `
1. Prepare quinoa
2. Mix vegetables
3. Add beans
4. Season well
5. Heat through
6. Garnish and serve
    `,
    date_posted: "mexican_quinoa.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "shrimp garlic butter": [{
    author: "Garlic Butter Shrimp",
    title: "1 lb shrimp, 6 garlic cloves, butter sauce",
    content: `
1. Clean shrimp
2. Make garlic butter
3. Heat pan
4. Cook shrimp
5. Add sauce
6. Serve hot
    `,
    date_posted: "garlic_shrimp.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Shrimp Scampi",
    title: "1 lb shrimp, 4 garlic cloves, white wine butter",
    content: `
1. Prepare sauce
2. Sauté garlic
3. Add shrimp
4. Pour wine
5. Finish with butter
6. Garnish with parsley
    `,
    date_posted: "shrimp_scampi.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "tofu vegetables sauce": [{
    author: "Stir-Fried Tofu",
    title: "1 block tofu, mixed vegetables, stir-fry sauce",
    content: `
1. Press tofu
2. Cut vegetables
3. Make sauce
4. Fry tofu
5. Add vegetables
6. Combine with sauce
    `,
    date_posted: "tofu_stirfry.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Glazed Tofu Bowl",
    title: "1 block tofu, seasonal vegetables, teriyaki sauce",
    content: `
1. Drain tofu
2. Prepare glaze
3. Bake tofu
4. Cook vegetables
5. Assemble bowl
6. Drizzle sauce
    `,
    date_posted: "tofu_bowl.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "sweet potato maple": [{
    author: "Maple Glazed Sweet Potatoes",
    title: "3 sweet potatoes, maple syrup, butter",
    content: `
1. Cut potatoes
2. Make glaze
3. Toss together
4. Arrange in pan
5. Bake until tender
6. Glaze again
    `,
    date_posted: "maple_potatoes.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Roasted Maple Chunks",
    title: "2 sweet potatoes, maple syrup, pecans",
    content: `
1. Cube potatoes
2. Mix with syrup
3. Add pecans
4. Roast at 400°F
5. Turn halfway
6. Serve hot
    `,
    date_posted: "maple_chunks.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "cauliflower cheese garlic": [{
    author: "Cheesy Cauliflower Bake",
    title: "1 cauliflower, cheese sauce, 3 garlic cloves",
    content: `
1. Cut cauliflower
2. Make cheese sauce
3. Add roasted garlic
4. Combine all
5. Bake until golden
6. Let rest briefly
    `,
    date_posted: "cauli_cheese.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Garlic Parmesan Cauliflower",
    title: "1 cauliflower, parmesan, 4 garlic cloves",
    content: `
1. Break into florets
2. Season well
3. Roast in oven
4. Add cheese
5. Broil briefly
6. Serve immediately
    `,
    date_posted: "garlic_cauli.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "beef onion mushroom": [{
    author: "Beef Stroganoff",
    title: "1 lb beef strips, 2 onions, 8 oz mushrooms",
    content: `
1. Slice beef thin
2. Sauté onions
3. Add mushrooms
4. Cook beef
5. Make sauce
6. Combine all
    `,
    date_posted: "stroganoff.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Beef Stir-Fry",
    title: "1 lb beef, 1 onion, 6 oz mushrooms",
    content: `
1. Cut beef chunks
2. Prep vegetables
3. Make sauce
4. Stir-fry beef
5. Add vegetables
6. Mix with sauce
    `,
    date_posted: "beef_stirfry.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "zucchini tomato cheese": [{
    author: "Zucchini Gratin",
    title: "3 zucchini, 2 tomatoes, cheese blend",
    content: `
1. Slice vegetables
2. Layer in dish
3. Add cheese
4. Season well
5. Bake until bubbly
6. Rest 5 minutes
    `,
    date_posted: "zucchini_gratin.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Zucchini Bake",
    title: "4 zucchini, 3 tomatoes, mozzarella",
    content: `
1. Prepare vegetables
2. Arrange in pan
3. Top with cheese
4. Add herbs
5. Bake until done
6. Serve hot
    `,
    date_posted: "zucchini_bake.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken spinach mushroom": [{
    author: "Stuffed Chicken Breast",
    title: "2 chicken breasts, spinach, mushrooms",
    content: `
1. Butterfly chicken
2. Sauté filling
3. Stuff chicken
4. Secure with picks
5. Bake until done
6. Rest then slice
    `,
    date_posted: "stuffed_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Chicken Florentine",
    title: "3 chicken breasts, spinach, mushroom sauce",
    content: `
1. Cook chicken
2. Make sauce
3. Wilt spinach
4. Combine all
5. Heat through
6. Serve over pasta
    `,
    date_posted: "florentine.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta shrimp garlic": [{
    author: "Garlic Shrimp Pasta",
    title: "1 pack pasta, 1 lb shrimp, 4 garlic cloves",
    content: `
1. Cook pasta
2. Sauté garlic
3. Add shrimp
4. Toss with pasta
5. Add parsley
6. Serve hot
    `,
    date_posted: "shrimp_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Lemon Garlic Shrimp",
    title: "1 pack pasta, 12 shrimp, 6 garlic cloves",
    content: `
1. Boil pasta
2. Cook garlic
3. Add shrimp
4. Mix with pasta
5. Add lemon
6. Garnish and serve
    `,
    date_posted: "lemon_shrimp.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "beef potato carrot": [{
    author: "Classic Beef Stew",
    title: "1 lb beef chunks, 3 potatoes, 4 carrots",
    content: `
1. Brown beef
2. Add vegetables
3. Pour in broth
4. Simmer 2 hours
5. Season well
6. Serve hot
    `,
    date_posted: "beef_stew.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Pot Roast",
    title: "2 lb beef roast, 4 potatoes, 6 carrots",
    content: `
1. Sear beef
2. Add vegetables
3. Season all
4. Cook slowly
5. Make gravy
6. Rest before serving
    `,
    date_posted: "pot_roast.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "fish lemon herbs": [{
    author: "Herb Baked Fish",
    title: "2 fish fillets, 1 lemon, fresh herbs",
    content: `
1. Season fish
2. Add herb crust
3. Slice lemon
4. Bake in oven
5. Check doneness
6. Serve with sauce
    `,
    date_posted: "herb_fish.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Lemon Herb Fish",
    title: "4 fish fillets, 2 lemons, herb mix",
    content: `
1. Prepare herb mix
2. Season fish
3. Heat pan
4. Cook fish
5. Add lemon
6. Garnish and serve
    `,
    date_posted: "lemon_fish.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "rice mushroom parmesan": [{
    author: "Mushroom Risotto",
    title: "2 cups rice, 8 oz mushrooms, parmesan",
    content: `
1. Sauté mushrooms
2. Toast rice
3. Add broth slowly
4. Stir often
5. Finish with cheese
6. Rest 5 minutes
    `,
    date_posted: "risotto.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Cheesy Mushroom Rice",
    title: "2 cups rice, 6 oz mushrooms, parmesan",
    content: `
1. Cook rice
2. Prepare mushrooms
3. Combine both
4. Add cheese
5. Stir well
6. Serve hot
    `,
    date_posted: "mushroom_rice.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "chicken honey mustard": [{
    author: "Honey Mustard Chicken",
    title: "4 chicken breasts, honey, Dijon mustard",
    content: `
1. Mix sauce
2. Season chicken
3. Cook chicken
4. Glaze with sauce
5. Finish cooking
6. Rest then serve
    `,
    date_posted: "honey_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Glazed Chicken Thighs",
    title: "6 chicken thighs, honey, whole grain mustard",
    content: `
1. Prepare glaze
2. Season chicken
3. Sear chicken
4. Add sauce
5. Bake through
6. Garnish and serve
    `,
    date_posted: "glazed_chicken.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "pasta spinach ricotta": [{
    author: "Spinach Ricotta Pasta",
    title: "1 pack pasta, 2 cups spinach, ricotta",
    content: `
1. Cook pasta
2. Wilt spinach
3. Mix with ricotta
4. Combine all
5. Season well
6. Serve immediately
    `,
    date_posted: "spinach_pasta.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Creamy Spinach Pasta",
    title: "1 pack pasta, fresh spinach, ricotta blend",
    content: `
1. Boil pasta
2. Prepare sauce
3. Cook spinach
4. Mix together
5. Add cheese
6. Toss and serve
    `,
    date_posted: "creamy_spinach.jpg",
    isFavorite: "false",
    classname: "heart",
  }],

  "potato bacon cheese": [{
    author: "Loaded Baked Potato",
    title: "4 potatoes, 6 bacon strips, cheese blend",
    content: `
1. Bake potatoes
2. Cook bacon
3. Prepare toppings
4. Split potatoes
5. Add fillings
6. Top with cheese
    `,
    date_posted: "loaded_potato.jpg",
    isFavorite: "false",
    classname: "heart",
  },
  {
    author: "Bacon Potato Casserole",
    title: "6 potatoes, 8 bacon strips, cheddar cheese",
    content: `
1. Slice potatoes
2. Layer in dish
3. Add bacon bits
4. Cover with cheese
5. Bake until done
6. Let rest briefly
    `,
    date_posted: "potato_casserole.jpg",
    isFavorite: "false",
    classname: "heart",
  }]
};

/**
 * Get recipes by ingredients
 * @param {string} ingredients - Space-separated ingredients
 * @returns {Array} Array of 2-3 matching recipes
 */
export const getRecipesByIngredients = (ingredients) => {
  const normalizedIngredients = ingredients.toLowerCase().trim();
  const ingredientArray = normalizedIngredients.split(' ').filter(i => i.length > 0);
  
  // First try exact match
  const exactMatch = recipeData[normalizedIngredients];
  if (exactMatch) {
    return exactMatch;
  }

  // If no exact match, find recipes that use these ingredients (plus possibly others)
  let matchingRecipes = [];
  
  // Search through all recipes
  Object.entries(recipeData).forEach(([key, recipes]) => {
    const recipeIngredients = key.split(' ');
    
    // Check if all user ingredients are in this recipe
    const hasAllIngredients = ingredientArray.every(ing => 
      recipeIngredients.includes(ing)
    );

    // Check if recipe doesn't have too many extra ingredients
    const extraIngredients = recipeIngredients.length - ingredientArray.length;

    if (hasAllIngredients && extraIngredients <= 2) {
      matchingRecipes.push(...recipes);
    }
  });

  // Sort by relevance (recipes with fewer extra ingredients first)
  matchingRecipes.sort((a, b) => {
    const aIngredients = a.title.toLowerCase().split(',').length;
    const bIngredients = b.title.toLowerCase().split(',').length;
    return aIngredients - bIngredients;
  });

  // Return 2-3 best matches
  return matchingRecipes.slice(0, Math.min(3, Math.max(2, matchingRecipes.length)));
};

export default recipeData; 