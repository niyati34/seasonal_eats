const seasonalProduce = {
  fruits: [
    {
      name: "Apple",
      emoji: "🍎",
      months: ["June", "July", "August"], 
      image: 'apple.jpg',
      nutritionalFacts: {
        calories: 52,
        carbohydrates: 14,
        fiber: 2.4,
        protein: 0.3,
        vitamins: ["Vitamin C", "Vitamin K"],
      },
      recipes: [
        {
          name: "Apple Pie",
          description: "Classic apple pie made with fresh apples, cinnamon, and a buttery crust.",
        },
        {
          name: "Apple Salad",
          description: "Refreshing salad featuring crisp apples, mixed greens, walnuts, and a tangy vinaigrette.",
        },
        // Add more recipes for apples
      ],
      healthBenefits: "Apples are rich in antioxidants and dietary fiber, which can help improve digestion and support heart health.",
      preparationTips: "Wash the apple thoroughly before eating. You can eat it raw or use it in various recipes like salads, pies, or juices.",
      bestTimeToEat: "It's best to eat apples in the morning or as a mid-day snack to boost energy levels.",
      buyingTips: "Choose apples that are firm and free from bruises or blemishes. Look for a bright color and a fresh scent.",
      storageInfo: "Store apples in the refrigerator to maintain freshness. They can last for several weeks when stored properly.",
      funFacts: "There are thousands of varieties of apples, each with its own unique flavor and texture.",
    },
    {
      name: "Mango",
      emoji: "🥭",
      months: ["June", "July", "August"],
      image: 'mango.jpg',
      nutritionalFacts: {
        calories: 60,
        carbohydrates: 15,
        fiber: 1.6,
        protein: 0.8,
        vitamins: ["Vitamin A", "Vitamin C", "Vitamin E"],
      },
      recipes: [
        {
          name: "Mango Smoothie",
          description: "Refreshing smoothie made with ripe mangoes, yogurt, and a splash of orange juice.",
        },
        {
          name: "Mango Salsa",
          description: "Tangy salsa with diced mangoes, tomatoes, onions, cilantro, and lime juice, perfect for dipping chips or topping grilled fish.",
        },
        // Add more recipes for mangoes
      ],
      healthBenefits: "Mangoes are packed with vitamins and antioxidants, supporting immune function and promoting healthy skin and hair.",
      preparationTips: "Choose ripe mangoes that yield slightly to pressure when gently squeezed. Peel and slice for snacking, salads, or desserts.",
      bestTimeToEat: "Enjoy mangoes as a refreshing snack or dessert during hot summer months.",
      buyingTips: "Look for mangoes with a fragrant aroma and firm, unblemished skin. Avoid mangoes with soft spots or wrinkled skin.",
      storageInfo: "Ripe mangoes can be stored in the refrigerator for a few days. Unripe mangoes can be stored at room temperature until ripe.",
      funFacts: "Mangoes are known as the 'king of fruits' and are one of the most popular tropical fruits worldwide.",
    },
    {
      name: "Banana",
      emoji: "🍌",
      months: ["January", "February", "March"],
      image: 'banana.jpeg',
      nutritionalFacts: {
        calories: 89,
        carbohydrates: 23,
        fiber: 2.6,
        protein: 1.3,
        vitamins: ["Vitamin B6", "Vitamin C", "Potassium"],
      },
      recipes: [
        {
          name: "Banana Bread",
          description: "Moist and delicious banana bread made with ripe bananas, cinnamon, and a hint of vanilla.",
        },
        {
          name: "Banana Smoothie",
          description: "Creamy and satisfying smoothie made with bananas, milk, yogurt, and a drizzle of honey.",
        },
        // Add more recipes for bananas
      ],
      healthBenefits: "Bananas are a good source of potassium and fiber, which can help regulate digestion and support heart health.",
      preparationTips: "Peel and eat bananas raw as a quick and convenient snack. They can also be used in baking, smoothies, and desserts.",
      bestTimeToEat: "Bananas make a great on-the-go snack any time of day. They are particularly energizing when eaten in the morning.",
      buyingTips: "Choose bananas with vibrant yellow skins and no signs of bruising or blemishes. Green bananas will ripen over time.",
      storageInfo: "Store bananas at room temperature until ripe, then transfer them to the refrigerator to extend their shelf life.",
      funFacts: "Bananas are berries botanically classified as berries. They grow on large herbaceous plants rather than trees.",
    },
    {
      name: "Orange",
      emoji: "🍊",
      months: ["November", "December", "January"],
      image: 'orange.jpeg',
      nutritionalFacts: {
        calories: 47,
        carbohydrates: 12,
        fiber: 2.4,
        protein: 0.9,
        vitamins: ["Vitamin C", "Thiamine", "Folate"],
      },
      recipes: [
        {
          name: "Orange Chicken",
          description: "Tangy and flavorful chicken dish made with orange juice, soy sauce, and ginger.",
        },
        {
          name: "Orange Salad",
          description: "Refreshing salad with mixed greens, sliced oranges, red onions, and a citrus vinaigrette.",
        },
        // Add more recipes for oranges
      ],
      healthBenefits: "Oranges are an excellent source of vitamin C, which supports immune function and promotes healthy skin.",
      preparationTips: "Peel oranges and eat them fresh, or use them in salads, desserts, juices, and marinades.",
      bestTimeToEat: "Oranges are refreshing any time of day, but they can be particularly energizing when eaten in the morning.",
      buyingTips: "Choose oranges that feel heavy for their size and have firm, smooth skins. Avoid oranges with soft spots or wrinkled skin.",
      storageInfo: "Store oranges at room temperature for a few days or in the refrigerator to extend their shelf life.",
      funFacts: "Orange trees are evergreen and can produce fruit for up to 50 years!",
    },
    {
      name: "Grapes",
      emoji: "🍇",
      months: ["August", "September", "October"],
      image: 'grapes.jpeg',
      nutritionalFacts: {
        calories: 69,
        carbohydrates: 18,
        fiber: 0.9,
        protein: 0.7,
        vitamins: ["Vitamin C", "Vitamin K", "Potassium"],
      },
      recipes: [
        {
          name: "Grape Salad",
          description: "Light and refreshing salad with mixed greens, sliced grapes, feta cheese, and a balsamic vinaigrette.",
        },
        {
          name: "Grape Sorbet",
          description: "Cool and fruity sorbet made with fresh grapes, sugar, and a splash of lemon juice.",
        },
        // Add more recipes for grapes
      ],
      healthBenefits: "Grapes are rich in antioxidants and polyphenols, which may help protect against heart disease and improve brain function.",
      preparationTips: "Wash grapes thoroughly and remove any stems or spoiled grapes before eating. Grapes can also be frozen for a refreshing snack.",
      bestTimeToEat: "Enjoy grapes as a snack any time of day, or incorporate them into salads, desserts, and smoothies.",
      buyingTips: "Look for grapes that are plump, firm, and well-colored. Avoid grapes that are wrinkled, soft, or have moldy spots.",
      storageInfo: "Store unwashed grapes in the refrigerator for up to one week. Wash grapes just before eating to prevent spoilage.",
      funFacts: "Grapes come in a variety of colors, including green, red, and purple. They are botanically classified as berries!",
    },    // Add more fruits here
  ],
  vegetables: [
    {
      name: "Carrot",
      emoji: "🥕",
      months: ["October", "November", "December", "January"],
      image: 'carrot.jpeg',
      nutritionalFacts: {
        calories: 41,
        carbohydrates: 10,
        fiber: 2.8,
        protein: 0.9,
        vitamins: ["Vitamin A", "Vitamin K", "Potassium"],
      },
      recipes: [
        {
          name: "Carrot Soup",
          description: "Warm and comforting soup made with fresh carrots, onions, garlic, and vegetable broth.",
          videoURL: "your-carrot-soup-recipe-video-url.mp4",
        },
        {
          name: "Carrot Cake",
          description: "Delicious and moist cake made with shredded carrots, spices, and cream cheese frosting.",
          videoURL: "your-carrot-cake-recipe-video-url.mp4",
        },
        // Add more recipes for carrots
      ],
      healthBenefits: "Carrots are rich in beta-carotene, which is converted into vitamin A in the body and essential for vision health.",
      preparationTips: "Scrub carrots thoroughly under running water to remove dirt and debris. Peel and slice for snacking, salads, or cooking.",
      bestTimeToEat: "Include carrots in your meals as a side dish or snack throughout the day to boost your vitamin intake.",
      buyingTips: "Choose carrots that are firm, smooth, and brightly colored. Avoid carrots that are limp, cracked, or have soft spots.",
      storageInfo: "Store carrots in the refrigerator in a plastic bag or container to keep them crisp and fresh for up to two weeks.",
      funFacts: "Carrots were originally purple, white, and yellow, with orange carrots appearing later through selective breeding.",
    },
    {
      name: "Spinach",
      emoji: "🍃",
      months: ["February", "March", "April"],
      image: 'spinach.jpeg',
      nutritionalFacts: {
        calories: 23,
        carbohydrates: 3.6,
        fiber: 2.2,
        protein: 2.9,
        vitamins: ["Vitamin A", "Vitamin C", "Iron"],
      },
      recipes: [
        {
          name: "Spinach Salad",
          description: "Fresh and vibrant salad with baby spinach, strawberries, goat cheese, and balsamic vinaigrette.",
          videoURL: "your-spinach-salad-recipe-video-url.mp4",
        },
        {
          name: "Creamed Spinach",
          description: "Rich and creamy side dish made with fresh spinach, butter, garlic, and heavy cream.",
          videoURL: "your-creamed-spinach-recipe-video-url.mp4",
        },
        // Add more recipes for spinach
      ],
      healthBenefits: "Spinach is packed with vitamins and minerals, including vitamin A, vitamin C, and iron, which are essential for overall health and well-being.",
      preparationTips: "Wash spinach thoroughly to remove any dirt or grit. Remove any tough stems and wilted leaves before cooking or serving.",
      bestTimeToEat: "Incorporate spinach into your meals as a nutritious side dish or add it to salads, soups, sandwiches, and smoothies.",
      buyingTips: "Choose fresh spinach with crisp, vibrant leaves. Avoid spinach with yellowing or wilting leaves, as this indicates age or spoilage.",
      storageInfo: "Store unwashed spinach in a plastic bag or container in the refrigerator. Use it within a few days for best flavor and texture.",
      funFacts: "Spinach is believed to have originated in ancient Persia (modern-day Iran) and was introduced to Europe in the 12th century.",
    },
    {
      name: "Broccoli",
      emoji: "🥦",
      months: ["January", "February", "March"],
      image: 'broccoli.jpeg',
      nutritionalFacts: {
        calories: 34,
        carbohydrates: 6.6,
        fiber: 2.4,
        protein: 2.8,
        vitamins: ["Vitamin C", "Vitamin K", "Folate"],
      },
      recipes: [
        {
          name: "Broccoli Salad",
          description: "Crunchy and flavorful salad with fresh broccoli, bacon, raisins, and a tangy dressing.",
          videoURL: "your-broccoli-salad-recipe-video-url.mp4",
        },
        {
          name: "Roasted Broccoli",
          description: "Tender and caramelized broccoli florets roasted with olive oil, garlic, and Parmesan cheese.",
          videoURL: "your-roasted-broccoli-recipe-video-url.mp4",
        },
        // Add more recipes for broccoli
      ],
      healthBenefits: "Broccoli is a nutritional powerhouse, rich in vitamin C, vitamin K, and folate. It also contains antioxidants and fiber, which may help reduce the risk of chronic diseases.",
      preparationTips: "Trim broccoli florets from the stalk and cut them into bite-sized pieces. Steam, roast, or stir-fry broccoli for optimal flavor and texture.",
      bestTimeToEat: "Enjoy broccoli as a side dish or incorporate it into main courses, such as stir-fries, soups, casseroles, and salads.",
      buyingTips: "Choose broccoli with firm, tightly packed florets and vibrant green color. Avoid broccoli with yellowing florets or signs of wilting.",
      storageInfo: "Store broccoli in the refrigerator in a plastic bag or container. Use it within a few days to maintain freshness and flavor.",
      funFacts: "Broccoli belongs to the Brassica oleracea species, which also includes cabbage, cauliflower, kale, and Brussels sprouts.",
    },
    {
      name: "Cabbage",
      emoji: "🥬",
      months: ["September", "October", "November"],
      image: 'cabbage.jpeg',
      nutritionalFacts: {
        calories: 25,
        carbohydrates: 6,
        fiber: 2.5,
        protein: 1.3,
        vitamins: ["Vitamin C", "Vitamin K", "Folate"],
      },
      recipes: [
        {
          name: "Coleslaw",
          description: "Classic side dish made with shredded cabbage, carrots, and a creamy dressing.",
          videoURL: "your-coleslaw-recipe-video-url.mp4",
        },
        {
          name: "Stuffed Cabbage Rolls",
          description: "Savory and satisfying dish featuring cabbage leaves stuffed with a flavorful mixture of ground meat and rice.",
          videoURL: "your-stuffed-cabbage-rolls-recipe-video-url.mp4",
        },
        // Add more recipes for cabbage
      ],
      healthBenefits: "Cabbage is low in calories and high in fiber, making it a great choice for weight management and digestive health. It also contains antioxidants and vitamins that support overall well-being.",
      preparationTips: "Remove any tough outer leaves from the cabbage head and rinse it under cold water. Shred or chop cabbage for salads, slaws, stir-fries, and soups.",
      bestTimeToEat: "Incorporate cabbage into your meals as a crunchy salad, a side dish, or a main course. It pairs well with a variety of flavors and cuisines.",
      buyingTips: "Choose cabbage heads that are firm, heavy for their size, and free from blemishes or cracks. Avoid cabbage with wilted or yellowing leaves.",
      storageInfo: "Store cabbage in the refrigerator in a plastic bag or wrap it in damp paper towels. It will keep for several weeks when stored properly.",
      funFacts: "Cabbage is one of the oldest vegetables, with records of its cultivation dating back thousands of years. It is widely used in cuisines around the world.",
    },
    {
      name: "Potato",
      emoji: "🥔",
      months: ["November", "December", "January"],
      image: 'potato.jpeg',
      nutritionalFacts: {
        calories: 77,
        carbohydrates: 17,
        fiber: 2.2,
        protein: 2,
        vitamins: ["Vitamin C", "Vitamin B6", "Potassium"],
      },
      recipes: [
        {
          name: "Mashed Potatoes",
          description: "Creamy and indulgent side dish made with boiled potatoes, butter, and milk.",
          videoURL: "your-mashed-potatoes-recipe-video-url.mp4",
        },
        {
          name: "Roasted Potatoes",
          description: "Crispy and golden potatoes roasted with olive oil, garlic, and herbs.",
          videoURL: "your-roasted-potatoes-recipe-video-url.mp4",
        },
        // Add more recipes for potato
      ],
      healthBenefits: "Potatoes are a good source of carbohydrates, vitamins, and minerals. They provide energy, support digestion, and contribute to overall health and well-being.",
      preparationTips: "Scrub potatoes clean under cold water to remove dirt and debris. Peel or leave the skin on depending on your preference. Cut potatoes into cubes, slices, or wedges for cooking.",
      bestTimeToEat: "Enjoy potatoes as a versatile ingredient in a wide range of dishes, including soups, salads, casseroles, and main courses.",
      buyingTips: "Choose firm, smooth potatoes without soft spots, sprouts, or green patches. Different varieties of potatoes have unique flavors and textures, so experiment with different types.",
      storageInfo: "Store potatoes in a cool, dark place with good ventilation, such as a pantry or cellar. Avoid storing potatoes near onions, as onions can cause potatoes to sprout.",
      funFacts: "Potatoes are one of the world's most widely consumed vegetables and are a staple food in many cultures. They originated in South America and were introduced to Europe in the 16th century.",
    },
    {
      name: "Tomato",
      emoji: "🍅",
      months: ["June", "July", "August"],
      image: 'tomato.jpeg',
      nutritionalFacts: {
        calories: 18,
        carbohydrates: 3.9,
        fiber: 1.2,
        protein: 0.9,
        vitamins: ["Vitamin C", "Vitamin K", "Potassium"],
      },
      recipes: [
        {
          name: "Caprese Salad",
          description: "Refreshing salad made with ripe tomatoes, fresh mozzarella, basil leaves, and balsamic glaze.",
          videoURL: "your-caprese-salad-recipe-video-url.mp4",
        },
        {
          name: "Tomato Sauce",
          description: "Homemade sauce crafted from tomatoes, garlic, onions, and herbs, perfect for pasta or pizza.",
          videoURL: "your-tomato-sauce-recipe-video-url.mp4",
        },
        // Add more recipes for tomato
      ],
      healthBenefits: "Tomatoes are rich in antioxidants, vitamins, and minerals, making them beneficial for heart health, skin health, and immune function. They also contain lycopene, a compound linked to reduced risk of certain diseases.",
      preparationTips: "Select ripe tomatoes with bright red color and firm texture. Wash tomatoes thoroughly under cold water and remove any stems or blemishes. Slice, dice, or chop tomatoes for use in salads, sauces, sandwiches, and more.",
      bestTimeToEat: "Enjoy tomatoes when they are in season for the freshest flavor and juiciness. Incorporate them into your meals as a topping, garnish, or main ingredient.",
      buyingTips: "Look for tomatoes that are heavy for their size and free from bruises or wrinkles. Tomatoes continue to ripen after harvest, so choose slightly underripe tomatoes if you plan to store them for a few days.",
      storageInfo: "Store ripe tomatoes at room temperature away from direct sunlight. Avoid refrigerating tomatoes, as it can affect their flavor and texture. Use tomatoes within a few days for optimal freshness.",
      funFacts: "Tomatoes are botanically classified as fruits but are commonly considered vegetables in culinary contexts. They are one of the most versatile ingredients, used in cuisines around the world.",
    },
        // Add more vegetables here
  ],
};

export default seasonalProduce;
