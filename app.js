document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
    fetch("http://localhost:3000/web")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("webData", JSON.stringify(data));
            displayData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayData(data) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = JSON.stringify(data);
}
