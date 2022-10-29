function UI(){



}


UI.prototype.addCarToUI = function(newCar){
   
  
  
  const carList = document.getElementById("cars");

  carList.innerHTML += `
  <tr>
    <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
    <td>${newCar.title}</td>
    <td>${newCar.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> `

}

UI.prototype.clearInputs = function(element1, element2, element3){
  element1.value = "";
  element2.value = "";
  element3.value = "";
}

UI.prototype.displayMessages = function(message, type){
  const cardBody = document.querySelector(".card-body");
  

  // alert divi oluşturma

  const div = document.createElement("div");

  div.className = `alert alert-${type}`;
  div.textContent = message;


  cardBody.appendChild(div);

  setTimeout (function(){

    div.remove();
  },2000);
}

UI.prototype.loadAllCars = function(cars){
  const carList = document.getElementById("cars");

  cars.forEach(function(cars){
carList.innerHTML += 
` <tr>
    <td><img src="${cars.url}" class="img-fluid img-thumbnail"></td>
    <td>${cars.title}</td>
    <td>${cars.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> `
  });
}

UI.prototype.deleteCarFromUI = function(element){
  element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI = function () {
  const carList = document.getElementById ("cars");

  //carList.innerHTML =""; diğer yöntem

  while(carList.firstElementChild !==null) {
    carList.firstElementChild.remove();
  }


}