document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pickup = document.getElementById('pickup').value.trim();
  const drop = document.getElementById('drop').value.trim();
  const rideType = document.getElementById('rideType').value;

  if (!pickup || !drop || !rideType) {
    alert("Please fill all fields.");
    return;
  }

  const distance = Math.floor(Math.random() * 10) + 2; // 2 to 11 km
  let ratePerKm = rideType === 'Bike' ? 5 : 8;
  const fare = distance * ratePerKm;
  const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP

  const result = document.getElementById('result');
  result.innerHTML = `
    🚩 <strong>Booking Confirmed!</strong><br>
    Pickup: ${pickup}<br>
    Drop: ${drop}<br>
    Ride Type: ${rideType}<br>
    Distance: ~${distance} km<br>
    Estimated Fare: ₹${fare}<br>
    OTP for verification: <strong>${otp}</strong>
  `;
  result.style.display = 'block';
});
