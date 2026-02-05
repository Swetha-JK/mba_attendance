function getAttendance() {
  var regno = document.getElementById("regno").value;
  var url = "https://script.google.com/macros/s/AKfycbwb8JsUppYeN7czBRCre9gwvUrAvrMZ9DX28A_pjMKpLIKlifQZPruKX0W7JAplkmr4/exec?regno=" + regno;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var tbody = document.querySelector("#attendanceTable tbody");
      tbody.innerHTML = "";

      if (data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='4'>No data found</td></tr>";
        return;
      }

      data.forEach(item => {
        var row = `<tr>
          <td>${item.subject}</td>
          <td>${item.attended}</td>
          <td>${item.total}</td>
          <td>${item.percentage}%</td>
        </tr>`;
        tbody.innerHTML += row;
      });
    });
}

