function calculateDueDate() {
  const selectedMethod = document.getElementById('calcMethod').value;
  const lastPeriod = document.getElementById('lastPeriod').value;

  if (selectedMethod === 'naegele') {
      const dueDate = calculateNaegeleDueDate(lastPeriod);
      document.getElementById('dueDateBox').innerHTML = `<p style="text-align: left;"><b>${dueDate}</b></p>`;
  } else if (selectedMethod === 'parikh') {
      const dueDate = calculateParikhDueDate(lastPeriod);
      document.getElementById('dueDateBox').innerHTML = `<p style="text-align: left;"><b>${dueDate}</b></p>`;
  }


  const resultContainer = document.querySelector('.result-container');

  // Memeriksa apakah infoText1 sudah ada sebelum menambahkannya
  if (!resultContainer.querySelector('.dynamic-text')) {
    const infoText1 = "*Noted : Bila kontraksi terjadi dalam waktu kurang 4 minggu (Pre-Term) dari HPL, maka ada kemungkinan bayi terlahir prematur dan jika kontraksi belum terjadi hingga lebih dari 3 minggu (Post-Term) dari HPL, maka ada kemungkinan bayi lahir terlambat.";
    const infoText2 = "Konsultasikan ke dokter secara rutin sebagai upaya kesehatan preventif untuk meminimalisir hal yang tidak diinginkan terjadi.";

    const infoElement1 = document.createElement('p');
    infoElement1.innerHTML = infoText1;
    infoElement1.classList.add('dynamic-text'); // Assign a class
    resultContainer.appendChild(infoElement1);

    const infoElement2 = document.createElement('p');
    infoElement2.innerHTML = infoText2;
    infoElement2.classList.add('dynamic-text'); // Assign a class
    resultContainer.appendChild(infoElement2);
  }

}

function calculateNaegeleDueDate(lastPeriod) {
  const lastPeriodDate = new Date(lastPeriod);
  const gestationPeriod = 280;

  const estimatedDueDateNaegele = new Date(lastPeriodDate);
  estimatedDueDateNaegele.setDate(lastPeriodDate.getDate() + gestationPeriod);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = estimatedDueDateNaegele.toLocaleDateString('id-ID', options);

  return formattedDate;
}

function calculateParikhDueDate(lastPeriod) {
  const lastPeriodDate = new Date(lastPeriod);
  const minGestationPeriod = 269;
  const maxGestationPeriod = 291;

  const gestationPeriod = Math.floor(Math.random() * (maxGestationPeriod - minGestationPeriod + 1)) + minGestationPeriod;

  const estimatedDueDateParikh = new Date(lastPeriodDate);
  estimatedDueDateParikh.setDate(lastPeriodDate.getDate() + gestationPeriod);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = estimatedDueDateParikh.toLocaleDateString('id-ID', options);

  return formattedDate;
}

document.getElementById('lastPeriod').addEventListener('change', function () {
  const button = document.getElementById('btnHitung');
  button.disabled = !this.value;
});

