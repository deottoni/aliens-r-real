// from data.js
const tableData = data;

// select and store table element
const tbody = d3.select("tbody");


// add content from data to table
tableData.forEach(function(report) {
    //  console.log(report);
    const row = tbody.append("tr");
     Object.entries(report).forEach(function([key, value]) {
    //  console.log(key, value);
       const cell = tbody.append("td");
       cell.text(value);
     });
   });


// set variables to search types
const inputType = ["#datetime","#city","#state","#country","#shape"];


// Select the submit button
const filter_button = d3.select("#filter-btn");


// function to filter based on given input
filter_button.on("click",function(){

    d3.event.preventDefault();
    
    for(let i=0; i < inputType.length; i++){ 
        const inputElement = d3.select(inputType[i]);
        const inputValue = inputElement.property("value")

        const filteredData = tableData.filter(x => x.inputValue === inputType[i]);
        console.log(filteredData)
}});
