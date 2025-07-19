const licenses = {
  "DK0897294CH0874": {
    name: "AJHARUL ISLAM",
    dob: "15 JAN 1997",
    bloodGroup: "B+",
    father: "BADUL MIAH",
    issueDate: "2023-03-23",
    expiryDate: "2028-03-22",
    licenseNumber: "DK0897294CH0874",
    issuingAuthority: "DHAKA METRO 1 BRTA",
    address: "JATRAPUR, ASHUGANJ, BRAHMANBARIA"
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
