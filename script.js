document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const licenceNumber = urlParams.get('licence');

  if (licenceNumber) {
    const licenceDatabase = [
      {
        licenceNo: "DK0897294CH0874",
        name: "Ajharul Islam",
        dob: "10 March 1996",
        bloodGroup: "O+",
        father: "Abdul Khalek",
        issueDate: "15 June 2023",
        validTill: "15 June 2033",
        issuingAuthority: "BRTA Dhaka Metro",
        address: "Bagerhat, Khulna, Bangladesh",
        class: "Non-Professional"
      }
    ];

    const found = licenceDatabase.find(item => item.licenceNo === licenceNumber);

    if (found) {
      document.getElementById('result').innerHTML = `
        <h3>Licence Details</h3>
        <p><strong>Name:</strong> ${found.name}</p>
        <p><strong>Date of Birth:</strong> ${found.dob}</p>
        <p><strong>Blood Group:</strong> ${found.bloodGroup}</p>
        <p><strong>Father:</strong> ${found.father}</p>
        <p><strong>Issue Date:</strong> ${found.issueDate}</p>
        <p><strong>Validity:</strong> ${found.validTill}</p>
        <p><strong>Licence No:</strong> ${found.licenceNo}</p>
        <p><strong>Issuing Authority:</strong> ${found.issuingAuthority}</p>
        <p><strong>Address:</strong> ${found.address}</p>
        <p><strong>Class(es):</strong> ${found.class}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = `<p style="color:red;">Licence not found</p>`;
    }
  }
});
