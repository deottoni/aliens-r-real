// from data.js
let tableData = data;

// select and store table element
const tbody = d3.select("tbody").node();


// // add content from data.js to table
function renderTable(dataset) {
  tbody.innerHTML = "";
  for (let i = 0; i < dataset.length; i++) {

    // get current objects and its fields
    const data = dataset[i];
    const fields = Object.keys(data);

    // insert rows to tbody object
    const row = tbody.insertRow(i);
    for (let j = 0; j < fields.length; j++) {

      // add cells to rows and set inner text of each object as cell value
      const field = fields[j];
      const cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
};


// Select the submit button
const filter_button = d3.select("#filter-btn");
filter_button.on("click",handleSearchButtonClick)

// const $searchBtn = document.querySelector("#filter-btn");
// $searchBtn.addEventListener("click", handleSearchButtonClick);


// function to filterdata
function handleSearchButtonClick() {
  
  // get values of user input
  const 
    dateInput = d3.select("#datetime").property("value"),
    cityInput = d3.select("#city").property("value"),
    stateInput = d3.select("#state").property("value"),
    countryInput = d3.select("#country").property("value"),
    shapeInput = d3.select("#shape").property("value");
    
    // log user input for reference
    console.log(dateInput)
    console.log(cityInput)
    console.log(stateInput)
    console.log(countryInput)
    console.log(shapeInput)


  let filteredData = tableData
  if (dateInput){
    filteredData = filteredData.filter(function(row){
      let date = row.datetime.toLowerCase();
      return date === dateInput
    })
  }
  if (cityInput){
    filteredData = filteredData.filter(function(row){
      let city = row.city.toLowerCase();
      return city === cityInput
    })
  }
  if (stateInput){
    filteredData = filteredData.filter(function(row){
      let state = row.state.toLowerCase();
      return state === stateInput
    })
  }
  if (countryInput){
    filteredData = filteredData.filter(function(row){
      let country = row.country.toLowerCase();
      return country === countryInput
    })
  }
  if (shapeInput){
    filteredData = filteredData.filter(function(row){
      let shape = row.shape.toLowerCase();
      return shape === shapeInput
    })
  }

  // log filtered data for reference
  console.log(filteredData)
  renderTable(filteredData)
};


// render default table
renderTable(tableData);