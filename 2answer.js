const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]

//1.Filter and show the product that will be bought when you don't have much money I mean Cheap one
const  cheapproduct = item.filter(
    (item) => {
      const price = Number(item.price.replace("$",""));
      return price <=10;
    });
    console.log(cheapproduct);
    //2. Filter and show the product that will be expensive in the array
    const  expensiveproduct = item.filter(
        (item) => {
          const price = Number(item.price.replace("$",""));
          return price <=1000;
        });
        console.log(expensiveproduct);

        //3.Calculate the full price of all product combined
        let totalPrice = item.reduce(function (accumulator, item) {
            return accumulator + item.price;
          }, 0);

          //4.Calculate the full price of all product combined and remove product that are under the 10 dollar
          let totalPricelessthan = item.reduce(function (accumulator, item) {
            return accumulator + item.price>=10;
          }, 0);
