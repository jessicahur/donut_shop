function Donuts(place, avgSale, maxCus, minCus){
  this.place = place;
  this.avgSale = avgSale;
  this.maxCus = maxCus;
  this.minCus = minCus;
}

Donuts.prototype.numDonuts = function (hours){
  var sales = [];
  var total = 0;

  numHours = hours[1]-hours[0]; //opens at (hours[0]-1)

  //Generate number of customers per hour based on min and max customers
  for (var ii = 0; ii <= numHours; ii++){
      numCustomers = Math.floor(Math.random()*(this.maxCus-this.minCus+1)+this.minCus);

  //Calculate the number of donuts per hour and store them in array
  // testing if numCustomers was correctly installed: console.log(numCustomers);
    donutsPerHr = Math.floor(numCustomers*this.avgSale);
    sales.push(donutsPerHr);
    total+=donutsPerHr;
  }
  sales.push(total);
  return sales;
}

Donuts.prototype.addTableData = function(table, rowNum, hours){
  var Sales = this.numDonuts(hours);
  var Row = table.insertRow(rowNum);
  var rowHeader = this.place;
  var cell = Row.insertCell(0);
  cell.innerHTML = "<b>"+rowHeader+"<b>";
  for (var jj = 1; jj <= Sales.length; jj++){
    cell = Row.insertCell(jj);
    cell.innerHTML = Sales[jj-1];
  }
}

//Storing all chain stores in object Chain and instantiate 5 objects


function Instantiate(numShops, Chain){ //Instantiate donut location objects
  var donutsLocations = [];
  for (var ii=0; ii < numShops; ii++){
    donutsLocations.push(ii);
  }
    for (var jj=0; jj<Chain['locations'].length; jj++){
  donutsLocations[jj] = new Donuts(Chain.locations[jj], Chain.avgSale[jj], Chain.maxCus[jj], Chain.minCus[jj]);
  }
  return donutsLocations;
}

function donutSimulation(hours){
  var Chain = {
  locations: ['Down Town', 'Capitol Hill', 'South Lake Union', 'Wedgewood', 'Ballard'],
  avgSale: [4.5, 2, 6.33, 1.25, 3.75],
  maxCus: [43, 37, 23, 28, 58],
  minCus: [8, 4, 9, 2, 8]
  }
  Locations = Instantiate (5,Chain);
  table = document.getElementById("myTable");
  for (var kk = 0; kk < Locations.length; kk++){
    Locations[kk].addTableData(table, kk+1, hours);
  }
}

donutSimulation([7,18]);
/*
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
        cell.innerHTML = "<b>"+rowHeader+"<b>";
      }
      else{
        cell.innerHTML = Input[jj][kk-1];
        console.log(Input[jj][kk-1]); //Testing
      }
    }
  }
}

donutSimulation([7,18]); */
