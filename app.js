var countItem =document.getElementById("itemcount");
var cardLogo=document.getElementById("card-items");
let btn = document.querySelectorAll(".add-card");

let totalAmount = 0;
let count = 0;

var items= [
    {
        name: "This was our pact",
        quantity: 0,
        cost : 7.69,
    },
    {
        name: "The famous five",
        quantity: 0,
        cost : 4.59,
    },
    {
        name: "Matlida",
        quantity: 0,
        cost : 6.80,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        cost : 10,
    },
    {
        name: "For Young Readers",
        quantity: 0,
        cost : 7.29,
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        cost : 4.99,
    },
    {
        name: "Dart Board",
        quantity: 0,
        cost : 17.49,
    },
    {
        name: "Connect Four",
        quantity: 0,
        cost : 19.99,
    },
    {
        name: "Jenga",
        quantity: 0,
        cost : 20.99,
    },
    {
        name: "Monopoly",
        quantity: 0,
        cost: 19.49,
      },
      {
        name: "Bookmarks",
        quantity: 0,
        cost: 12.49,
      },
      {
        name: "Birthday Card",
        quantity: 0,
        cost: 12.49,
      },
      {
        name: "Stuffed toys",
        quantity: 0,
        cost: 15.99,
      },
      {
        name: "Dream catcher drawing",
        quantity: 0,
        cost: 18.49,
      },

];

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (index) {
      return function () {
        totalAmount += items[index].cost;
        items[index].quantity++;
        countItem.innerHTML = ++count;
      };
    }(i);
  }
  
  cardLogo.onclick = () => {
    for (let element of items) {
      if (element.quantity == 0) {
        continue;
      } else {
        console.log("Item name: " + element.name + " - Quantity: " + element.quantity);
      }
    }
    console.log("The Total amount is: " + Math.floor(totalAmount) + " dollars and " + Math.floor((totalAmount - Math.floor(totalAmount)) * 100) + " cents");
};