function kilometerToMeter(km) {
  var meter;
  // check if kilometer is positve and not a string
  if (km < 0 || typeof km != "number") {
    return "Please enter a valid number.";
  } else {
    meter = km * 1000;
    return meter;
  }
}

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;
  var totalPrice;

  if (numberOfLaptop >= 0 && numberOfWatch >= 0 && numberOfPhone >= 0) {
    // Calculate total cost
    totalPrice =
      numberOfLaptop * laptopPrice +
      numberOfWatch * watchPrice +
      numberOfPhone * phonePrice;
    return totalPrice;
  } else {
    return "Number of product can not be negative.";
  }
}

function hotelCost(days) {
  var fare;

  if (days < 0) {
    return "Days can't be negative";
  }
  if (days <= 10) {
    // Calculate fare for days less than 11
    fare = days * 100;
  } else if (days <= 20) {
    // Calculate fare for days longer than 10 but less than 21
    fare = 100 * 10 + (days - 10) * 80;
  } else {
    // Calculate fare for days longer than 20
    fare = 100 * 10 + 10 * 80 + (days - 20) * 50;
  }

  return fare;
}

function megaFriend(friends) {
  // Check if input is a valid array and it's not empty
  if (friends.length && typeof friends != "string") {
    var megaFriendName = friends[0];
    for (var i = 0; i < friends.length; i++) {
      if (megaFriendName.length < friends[i].length) {
        megaFriendName = friends[i]; // Find mega friend
      }
    }
    return megaFriendName;
  } else {
    return "Enter a valid array of Friends";
  }
}
