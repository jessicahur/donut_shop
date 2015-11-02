function Donuts(place, avgSale, maxCus, minCus){
  this.place = place;
  this.avgSale = avgSale;
  this.maxCus = maxCus;
  this.minCus = minCus;
}

Donuts.prototype.numDonuts = function (hours){
  var sales = [];
  var total = 0;

  numHours = hours[1]-hours[0];

  //Generate number of customers per hour based on min and max customers
  for (ii=0; ii<=numHours; ii++){
      numCustomers = Math.floor(Math.random()*(this.maxCus-this.minCus+1)+this.minCus);

  //Calculate the number of donuts per hour and store them in array
  // testing if numCustomers was correctly installed: console.log(numCustomers);
    donutsPerHr = Math.round(numCustomers*this.avgSale);
    sales.push(donutsPerHr);
    total+=donutsPerHr;
  }
  sales.push(total);
  return sales;
}
