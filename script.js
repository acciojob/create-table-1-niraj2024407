function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");

  // Insert a new row at the top (index 0)
  let newRow = table.insertRow(0);

  // Insert two new cells
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // Add text to the new cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}


