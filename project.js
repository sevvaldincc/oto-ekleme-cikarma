const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");



// UI Objesini Başlatma

const ui = new UI();
const storage = new Storage();

//Tüm Eventleri yükleme

eventListeners ();

function eventListeners(){
    form.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded", function(){
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);

    });

    cardbody.addEventListener("click", deleteCar);
    clear.addEventListener("click", clearAllCars);
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    console.log(title,price,url)
    e.preventDefault();
    if (title === "" || price === "" || url === ""){


ui.displayMessages("Tüm alanları doldurun.", "danger");
    }else {
        // yeni araç

        const newCar = new Car( title, price, url);

        ui.addCarToUI(newCar); //ara yüze araç ekleme
storage.addCarToStorage(newCar);

        ui.displayMessages("Araç Başarıyla Eklendi.", "success");
    }
ui.clearInputs(titleElement, urlElement, priceElement);

e.preventDefault();
}

function deleteCar(e){

    if (e.target.id === "delete-car"){
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStorage (e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme İşlemi Başarıyla Gerçekleşti", "success");

    }
}

function clearAllCars(){

    if(confirm("Tüm araçlar silinecektir. Emin misiniz?"))
    ui.clearAllCarsFromUI();
    storage.clearAllCarsFromStorage();

}