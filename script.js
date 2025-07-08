const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price cells
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Sum the prices
  priceElements.forEach(cell => {
    total += Number(cell.textContent);
  });

  // Create new row and cell
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;
  newCell.textContent = `Total Price: Rs ${total}`;
  newCell.style.fontWeight = "bold";
  newRow.appendChild(newCell);

  // Append to the table
  table.appendChild(newRow);

  // Disable the button after adding total (optional)
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
