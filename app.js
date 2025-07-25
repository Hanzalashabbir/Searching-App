var cars = [
  { name: "Honda Civic", company: "Honda", color: "White", price: 3500000, engine: "1800cc", image: "image/civic.jpg" },
  { name: "Honda City", company: "Honda", color: "Black", price: 3200000, engine: "1300cc", image: "image/city.jpg" },
  { name: "Honda Accord", company: "Honda", color: "Silver", price: 7000000, engine: "2000cc", image: "image/Accord.jpg" },
  { name: "Honda Vezel", company: "Honda", color: "Gray", price: 6000000, engine: "1500cc", image: "image/Vezel.jpg" },

  { name: "Toyota Corolla", company: "Toyota", color: "White", price: 3400000, engine: "1800cc", image: "image/corolla.jpg" },
  { name: "Toyota Rocco", company: "Toyota", color: "Black", price: 1500000, engine: "2800cc", image: "image/rocco.jpg" },
  { name: "Toyota Fortuner", company: "Toyota", color: "Black", price: 12000000, engine: "2700cc", image: "image/fortuner.jpg" },
  { name: "Toyota Prius", company: "Toyota", color: "Blue", price: 5500000, engine: "1800cc", image: "image/prius.jpg" },
  
  { name: "Suzuki Alto", company: "Suzuki", color: "White", price: 2200000, engine: "660cc", image: "image/alto.jpg" },
  { name: "Suzuki Cultus", company: "Suzuki", color: "Gray", price: 3695000, engine: "1000cc", image: "image/Cultus.jpg" },
  { name: "Suzuki Swift", company: "Suzuki", color: "Red", price: 3300000, engine: "1200cc", image: "image/Swift.jpg" },
  { name: "Suzuki Bolan", company: "Suzuki", color: "White", price: 850000, engine: "800cc", image: "image/bolan.jpg" },
  
  { name: "Kia Sportage", company: "Kia", color: "Black", price: 5000000, engine: "2000cc", image: "image/Sportage.jpg" },
  { name: "Kia Sorento", company: "Kia", color: "White", price: 7500000, engine: "2400cc", image: "image/Sorento.jpg" },
  { name: "Kia Carnival", company: "Kia", color: "Gray", price: 9000000, engine: "3500cc", image: "image/Carnival.jpg" },
  { name: "Kia Stonic", company: "Kia", color: "Red", price: 4500000, engine: "1400cc", image: "image/Stonic.jpg" }
];

function displayCars(filteredCars) {
  var resultBox = document.getElementById("carResult");
  resultBox.innerHTML = "";

  if (filteredCars.length === 0) {
    resultBox.innerHTML = `<p id="notFound">No cars found</p>`;
    return;
  }

  filteredCars.forEach(function(car) {
    resultBox.innerHTML += `
      <div class="card">
        <img src="${car.image}" class="card-img-top" alt="${car.name}">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text">Company: ${car.company}</p>
          <p class="card-text">Color: ${car.color}</p>
          <p class="card-text">Engine: ${car.engine}</p>
          <p class="card-text">Price: Rs ${car.price.toLocaleString()}</p>
        </div>
      </div>
    `;
  });
}

function searchCar() {
  var input = document.getElementById("searchBox").value.toLowerCase();
  var company = document.getElementById("companySelect").value.toLowerCase();
  var engine = document.getElementById("engineInput").value.toLowerCase();

  var filteredCars = cars.filter(function(car) {
    var nameMatch = car.name.toLowerCase().includes(input);
    var colorMatch = car.color.toLowerCase().includes(input);
    var companyMatch = company === "" || car.company.toLowerCase() === company;
    var engineMatch = engine === "" || car.engine.toLowerCase().includes(engine);

    return (nameMatch || colorMatch) && companyMatch && engineMatch;
  });

  displayCars(filteredCars);
}

window.onload = function() {
  displayCars(cars);
};
