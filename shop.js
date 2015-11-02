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
  for (var ii=0; ii<=numHours; ii++){
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
//Storing all chain stores in object Chain and instantiate 5 objects
var Chain = {
  locations: ['Down Town', 'Capitol Hill', 'South Lake Union', 'Wedgewood', 'Ballard'],
  avgSale: [4.5, 2, 6.33, 1.25, 3.75],
  maxCus: [43, 37, 23, 28, 58],
  minCus: [8, 4, 9, 2, 8]
}

function Instantiate(){ //Instantiate donut location objects
  var donutsLocations = [0,0,0,0,0];
  for (var jj=0; jj<Chain['locations'].length; jj++){
  donutsLocations[jj] = new Donuts(Chain.locations[jj], Chain.avgSale[jj], Chain.maxCus[jj], Chain.minCus[jj]);
  }
  return donutsLocations;
}
function donutSimulation(hours){
  //Instantiate donut locations and calculate the number of donuts at each location
  var Locations = Instantiate();
  console.log("Locations: "+Locations); //testing
  var Input = [];
  for (var ii = 0; ii < Locations.length; ii++){
    Input.push(Locations[ii].numDonuts([7,18]));
  }
  console.log(Input);
  //Adding rows to table and data to table
  var myTable = document.getElementById("myTable");
  for (var jj = 0; jj < Input.length; jj++){
    var row = myTable.insertRow(jj+1); //Input row 1 thru 6 bc row 0 is occupied by the operating time
    if (jj < Input.length){ //Make sure we don't get Locations[5].place, which is undefined
    var rowHeader = Locations[jj].place;
    }

    for (var kk = 0; kk <= Input[jj].length; kk++){
      var cell = row.insertCell(kk);
      if (kk===0){
        cell.innerHTML = rowHeader;
      }
      else{
        cell.innerHTML = Input[jj][kk-1];
        console.log(Input[jj][kk-1]); //Testing
      }
    }
  }
}
donutSimulation([7,18]);
