// from data.js
let tableData = data;

// select and store table element
const tbody = d3.select("tbody").node();


// // add content from data.js to table
function renderTable() {
  tbody.innerHTML = "";
  for (let i = 0; i < tableData.length; i++) {

    // Get the current object and its fields
    const data = tableData[i];
    const fields = Object.keys(data);

    // Create a new row in the tbody, set the index to be i + startingIndex
    const row = tbody.insertRow(i);
    for (let j = 0; j < fields.length; j++) {

      // For every field in the table object, create a new cell at set its inner text to be the current value at the current field
      const field = fields[j];
      const cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
};


// get elements of search types
const dateInput = d3.select("#datetime");
const cityInput = d3.select("#city");
const stateInput = d3.select("#state");
const countryInput = d3.select("#country");
const shapeInput = d3.select("#shape");

// Select the submit button
// const filter_button = d3.select("#filter-btn");


const $searchBtn = document.querySelector("#filter-btn");
$searchBtn.addEventListener("click", handleSearchButtonClick);


// function to filter based on given input
// filter_button.on("click",function(){

//     d3.event.preventDefault();
    
//     for(let i=0; i < inputType.length; i++){ 
//         const inputElement = d3.select(inputType[i]);
//         const inputValue = inputElement.property("value")

//         const filteredData = tableData.filter(x => x.inputType[i] === inputValue);
//         console.log(filteredData)
// }});


function handleSearchButtonClick() {

  // set tableData to an array of the data that matches the user's input
  tableData = data.filter(function(data) {
    
    const 
      dateField = data.datetime,
      cityField = data.city,
      stateField = data.state,
      countryField = data.country,
      shapeField = data.shape;
    
    const returnedData = 
      (dateInput.property("value") === "" || dateInput.property("value") === dateField) &&
      (cityInput.property("value") === "" || cityInput.property("value") === cityField) &&
      (stateInput.property("value") === "" || stateInput.property("value") === stateField) &&
      (countryInput.property("value") === "" || countryInput.property("value") === countryField) &&
      (shapeInput.property("value") === "" || shapeInput.property("value") === shapeField);
    return returnedData;
  });
  renderTable();
};


// print default table
renderTable();