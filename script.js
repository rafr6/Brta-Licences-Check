const licenses = {
  "DK0897294CH0874": {
    name: "Md. Rahim Uddin",
    dob: "1990-01-01",
    bloodGroup: "B+",
    father: "Abdul Karim",
    issueDate: "2020-01-01",
    expiryDate: "2030-01-01",
    licenseNumber: "DK0897294CH0874",
    issuingAuthority: "BRTA, Dhaka",
    address: "123, Mirpur Road, Dhaka"
  }
};

function searchLicense() {
  const input = document.getElementById('licenseInput').value.trim();
  const resultBox = document.getElementById('result');
  if (licenses[input]) {
    const d = licenses[input];
    resultBox.innerHTML = `
      <h3>License Status: ACTIVE ✅</h3>
      <p><strong>Name:</strong> ${d.name}</p>
      <p><strong>Date of Birth:</strong> ${d.dob}</p>
      <p><strong>Blood Group:</strong> ${d.bloodGroup}</p>
      <p><strong>Father:</strong> ${d.father}</p>
      <p><strong>Issue Date:</strong> ${d.issueDate}</p>
      <p><strong>Validity:</strong> ${d.expiryDate}</p>
      <p><strong>Licence No:</strong> ${d.licenseNumber}</p>
      <p><strong>Issuing Authority:</strong> ${d.issuingAuthority}</p>
      <p><strong>Address:</strong> ${d.address}</p>
    `;
  } else {
    resultBox.innerHTML = `<p style="color:red;">License not found ❌</p>`;
  }
}