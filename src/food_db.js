const foodItems = {
  Beverages: [
    {
      id: "papaya-king-tropical-drink",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Papaya King",
      dsc: "Papaya King - Tropical Drink",
      price: 6.9,
      rate: 4,
      country: "New York, NY",
      type: "Beverages",
    },
    {
      id: "woodford-reserve-mint-julep-syrup-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Woodford Reserve",
      dsc: "Woodford Reserve Mint Julep Syrup - 2 Pack",
      price: 59,
      rate: 5,
      country: "Louisville, KY",
      type: "Beverages",
    },
    {
      id: "unicorn-parade-milkshake-kit-for-8",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "New Territories",
      dsc: "Unicorn Parade Milkshake Kit for 8",
      price: 10.9,
      rate: 5,
      country: "New York, NY",
      type: "Beverages",
    },
  ],

  Appetizer: [
    {
      id: "original-garlic-cream-cheese-bread-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105205/original-garlic-cream-cheese-bread-2-pack.7cb55509860ca0311b97222aae4eb0b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Calic Bread",
      dsc: "Original Garlic Cream Cheese Bread - 2 Pack",
      price: 7.9,
      rate: 5,
      country: "Los Angeles, CA",
      type: "Appetizer",
    },
  ],
  mainCourse: [
    {
      id: "ribs-brisket-and-burnt-ends",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Joe's KC BBQ",
      dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
      price: 11.99,
      rate: 4,
      country: "Kansas City, KS",
      type: "Main course",
    },
    {
      id: "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113814/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Blue Smoke",
      dsc: "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
      price: 12.9,
      rate: 4,
      country: "New York, NY",
      type: "Main course",
    },
    {
      id: "california-reserve-ribeye-steak",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132850/california-reserve-ribeye-steaks-gift-box.87b8f6acf5851abe58778d3017105edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "California Reserve Ribeye Steak",
      price: 9.9,
      rate: 4,
      country: "San Rafael, CA",
      type: "Main course",
    },
    {
      id: "dry-aged-usda-prime-black-angus-porterhouse-steak",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124865/usda-prime-black-angus-filet-mignon-barrel-cut.6ee213799e7d1848763d12edca18e3b1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pat LaFrieda Meats",
      dsc: "Dry-Aged USDA Prime Black Angus Porterhouse Steak",
      price: 96.7,
      rate: 4,
      country: "North Bergen, NJ",
      type: "Main course",
    },
    {
      id: "legendary-seafood-gumbo",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Commander's Palace",
      dsc: "Legendary Seafood Gumbo",
      price: 89,
      rate: 4,
      country: "New Orleans, LA",
      type: "Main course",
    },
    {
      id: "commanders-palace-three-course-dinner-for-2-shrimp-and-grits",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104768/commanders-palace-three-course-shrimp-and-grits-dinner-for-2.984253533e589547e834420efccc174a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Commander's Palace",
      dsc: "Commander's Palace Three-Course Shrimp & Grits Dinner for 2",
      price: 16.9,
      rate: 4,
      country: "New Orleans, LA",
      type: "Main course",
    },
    {
      id: "classic-clam-chowder-and-bread-bowls-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98280/classic-clam-chowder-and-bread-bowls-4-pack.ce07ef6072a276e55bb2924f56d74ebb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Boudin Bakery",
      dsc: "Classic Clam Chowder and Bread Bowls Kit - 4 Pack",
      price: 49,
      rate: 4,
      country: "San Francisco, CA",
      type: "Main course",
    },
    {
      id: "double-stack-burger",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Holeman & Finch",
      dsc: "Double Stack Burger",
      price: 79,
      rate: 4,
      country: "Atlanta, GA",
      type: "Main course",
    },
    {
      id: "burger-bomb",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Homestead Steakhouse",
      dsc: "Burger Bomb",
      price: 12.9,
      rate: 5,
      country: "New York, NY",
      type: "Main course",
    },
    {
      id: "goldbelly-burger-blend-4-lbs",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "Goldbelly Burger Blend - 4 lbs.",
      price: 7.9,
      rate: 5,
      country: "San Rafael, CA",
      type: "Main course",
    },
  ],

  Desserts: [
    {
      id: "chocolate-passion-layer-cake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97605/chocolate-passion-layer-cake.0562eb95df61a64486764db7f3ab4ddf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Blue Owl Bakery",
      dsc: "Chocolate Passion Layer Cake",
      price: 6.9,
      rate: 5,
      country: "Kimmswick, MO",
      type: "Desserts",
    },
    {
      id: "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Brooklyn Blackout Company",
      dsc: "Cookie + Brownie Combo Pack - 2 Tins",
      price: 8.9,
      rate: 5,
      country: "Brooklyn, NY",
      type: "Desserts",
    },
  ],
};
//   pagination: {
//     ribs: 2,
//     seafood: 3,
//     breads: 1,
//     burgers: 3,
//     Desserts: 2,
//     drink: 2,
//     steak: 2,
//   },
// };
