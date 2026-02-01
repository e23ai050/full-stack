let originalEmployees = [];
let currentEmployees = [];
let chart;


const originalOutput = document.getElementById("originalOutput");
const transformedOutput = document.getElementById("transformedOutput");
const deptTotalsOutput = document.getElementById("deptTotals");


async function loadEmployees() {
  try {
    const response = await fetch("employees.json"); // fetch JSON file
    const data = await response.json();             // Promise-based JSON parse

    originalEmployees = data;
    currentEmployees = [...data];

    originalOutput.textContent = JSON.stringify(originalEmployees, null, 2);
    transformedOutput.textContent = "";
    deptTotalsOutput.textContent = "";
  } catch (error) {
    alert("Error loading employees.json");
  }
}


function applyBonuses() {
  currentEmployees = currentEmployees.map(emp => ({
    ...emp,
    bonus: emp.salary * 0.1,
    totalCompensation: emp.salary * 1.1
  }));
  render();
}


function filterActive() {
  currentEmployees = currentEmployees.filter(emp => emp.active);
  render();
}


function calculateTotals() {
  return currentEmployees.reduce((acc, emp) => {
    acc[emp.dept] = (acc[emp.dept] || 0) + emp.salary;
    return acc;
  }, {});
}


function addEmployee() {
  const name = document.getElementById("name").value;
  const dept = document.getElementById("dept").value;
  const salary = Number(document.getElementById("salary").value);

  currentEmployees.push({
    id: Date.now(),
    name,
    dept,
    salary,
    active: true
  });

  render();
}

function render() {
  transformedOutput.textContent = JSON.stringify(currentEmployees, null, 2);

  const totals = calculateTotals();
  deptTotalsOutput.textContent = JSON.stringify(totals, null, 2);

  renderChart(totals);
}


function renderChart(totals) {
  const ctx = document.getElementById("deptChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(totals),
      datasets: [{
        label: "Salary by Department",
        data: Object.values(totals),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }]
    }
  });
}


function resetDashboard() {
  currentEmployees = [...originalEmployees];
  transformedOutput.textContent = "";
  deptTotalsOutput.textContent = "";
  if (chart) chart.destroy();
}


document.getElementById("loadBtn").onclick = loadEmployees;
document.getElementById("bonusBtn").onclick = applyBonuses;
document.getElementById("filterBtn").onclick = filterActive;
document.getElementById("resetBtn").onclick = resetDashboard;
document.getElementById("addBtn").onclick = addEmployee;
 