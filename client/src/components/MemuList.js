import React, { useState } from "react"


const MenuList = () => {
    const [drinks, setDrinks] = useState([
      {
        name: "Dark Chocolate Mocha",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/black-cup-coffee.jpg",
        short_description:
          "This is chocolate and coffee-lover's favorite! a great combination of espresso, chocolate and steamed milk foam",
      },

      {
        name: "Cappuccino",
        price_sm: 2,
        price_md: 3,
        price_lg: 4,
        isHotDrink: true,
        img_url: "./img/cappuccino.jpg",
        short_description:
          "The Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk and steamed cream foam on top. Espresso is typically made with a dark roasted coffee from Italy and ground finely",
      },
      {
        name: "Flat White",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/white-cup2-coffee.jpg",
        short_description:
          "An espresso-based drink with thin layer of steamed milk.",
      },
      {
        name: "Latte",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/green-cup-coffee.jpg",
        short_description:
          "Espresso-based coffee traditionally prepared with little more layer of steamed milk foam than Flat White coffee",
      },
      {
        name: "Green Tea Latte",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/green-tea-latte.jpg",
        short_description:
          "Espresso-based coffee combine in the right amount of green tea and top with steamed milk foam",
      },
      {
        name: "Mexican Coffee",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/yellow-cup-coffee.jpg",
        short_description:
          "Indulge in this flavorful drink from our neighbors to the south that pairs robust coffee with chocolate, spice, citrus and vanilla. It's magic in a cup!",
      },
      {
        name: "Hot Mocha Float",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/whithe-cup-coffee1.jpg",
        short_description:
          "Indulgent espresso based, cocoa, chocolate blended together for a creamy indulgence.",
      },
      {
        name: "Cafe au Lait",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: true,
        img_url: "./img/light-blue-cup-coffee.jpg",
        short_description:
          "Cafe au Lait(coffee with milk) consists of equal parts coffee and steamed milk and top with cream foam",
      },
      {
        name: "Cappuccino on Ice",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/white-cup-coffee.jpg",
        short_description:
          "Combination of strong espresso and sweetened condensed milk, half-and-half, a little sugar and vanilla",
      },
      {
        name: "Iced Caramel Macchiato",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/ice-green-tea-latte.jpg",
        short_description:
          "A perfect balance of espresso, vanilla, milk and caramel.",
      },
      {
        name: "Vietnamese Iced Coffee",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/nuts-coffee.jpg",
        short_description:
          "Espresso over ice with sweetened condensed milk is an unbeatable Southeast Asian treat",
      },
      {
        name: "Chocolate Iced Mocha",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/coffee-with-popcorn.jpg",
        short_description:
          "Espresso-based coffee perfectly blend with cocoa, almond milk on the ice",
      },
      {
        name: "Vanilla Iced Coffee",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/glass-coffee.jpg",
        short_description:
          "Homemade vanilla simple syrup gives a fragrant hint of sweetness to your iced Espresso coffee.",
      },
      {
        name: "Coconut Caramel Cold Brew",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/cold-coffee.jpg",
        short_description:
          "The toasted flavor of caramel pairs beautifully with coconut and cold brew espresso",
      },
      {
        name: "Toasted Coconut Shakerato",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/coffee-cream-cinnamon.jpg",
        short_description:
          "Italian iced coffee, made by shaking coffee with ice and toasted coconut syrup, top with creamy coconut milk",
      },
      {
        name: "Overnight New Orleans-Style Iced Coffee",
        price_sm: 3.5,
        price_md: 5.5,
        price_lg: 7,
        isHotDrink: false,
        cold_img_url: "./img/coffee-with-foam.jpg",
        short_description:
          "Espresso-based coffee infuse it with cinnamon and chicory (a New Orleans classic) overnight.",
      },
    ]);

    return (
        <>
            { drinks.map(drink => (
                <li>{drink.name}</li>
                <li>{ drink.price_sm }</li>
                <li>{ drink.price_md }</li> 
                <li>{ drink.price_lg  }</li> 
                <li>{ drink.isHotDrink  }</li>    
        
       

            ))}
            </>

    )
    
    


}

export default MenuList;