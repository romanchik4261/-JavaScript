//1 задание
let number = 0;
  while (number < 100) {
    if (simple(number)) {
      console.log(number);
    }
    number++;
  }

  function simple(number) {
      if (number < 2) {
          return false;
      }

      for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
              return false;
          }
      }
      return true;
      
  }

  // 2 задание

  const cart = [
      ["Платье", 2000, 2],
      ["Юбка", 1000, 2],
      ["Футболка", 500, 2],
      ["Штаны", 2000, 2],
      ["Жакет", 1500, 2]
  ]

  let count = cart.map(function(num) {
      return num[1] * [2];
  });
  alert(count);
    
  cart[0].splice(1, 2, (count[0]));
  cart[1].splice(1, 2, (count[1]));
  cart[2].splice(1, 2, (count[2]));
  cart[3].splice(1, 2, (count[3]));
  cart[4].splice(1, 2, (count[4]));
  alert(cart);
  
  const result = cart.reduce(function(sum, current) {
      return sum + current[1];
    }, 0);
    
    alert("Итого в корзине " + cart.length + " товаров на сумму " + result + " рублей.");