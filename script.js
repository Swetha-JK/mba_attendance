function getAttendance() {
  var regno = document.getElementById("regno").value;
  var url = "https://script.google.com/u/0/home/projects/1pz7XcZrFGWi-51tXVd4vQNW1INtTv5u2dkGloolKbFGa_e1V7bnIFCJL/edit?regno=" + regno;

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
