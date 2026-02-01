const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

const calculateFee = () => {
    const tuition = document.getElementById("tuition").value;
    const semester = document.getElementById("semester").value;
    const hostel = document.getElementById("hostel").checked;
    const bus = document.getElementById("bus").checked;
    const exam = document.getElementById("exam").checked;

    const errorDiv = document.getElementById("error");
    const resultDiv = document.getElementById("result");

    errorDiv.textContent = "";

    if (tuition === "" || tuition <= 0) {
        errorDiv.textContent = "Please enter a valid tuition fee.";
        resultDiv.textContent = "";
        return;
    }

    let total = Number(tuition);
    let breakdown = `Base Tuition Fee: ₹${tuition}<br>`;

    if (hostel) {
        total += 30000;
        breakdown += "Hostel Fee: ₹30,000<br>";
    }

    if (bus) {
        total += 8000;
        breakdown += "Bus Fee: ₹8,000<br>";
    }

    if (exam) {
        total += 2000;
        breakdown += "Exam Fee: ₹2,000<br>";
    }

    breakdown += `<strong>Semester:</strong> ${semester}<br><br>`;
    breakdown += `<strong>Total Payable Amount: ₹${total}</strong>`;

    resultDiv.innerHTML = breakdown;
};

const resetForm = () => {
    document.getElementById("tuition").value = "";
    document.getElementById("semester").selectedIndex = 0;
    document.getElementById("hostel").checked = false;
    document.getElementById("bus").checked = false;
    document.getElementById("exam").checked = false;

    document.getElementById("result").textContent =
        "Please calculate to see the result.";
    document.getElementById("error").textContent = "";
};

calculateBtn.addEventListener("click", calculateFee);
resetBtn.addEventListener("click", resetForm);
