// Handle form submission with validation and user feedback
document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const interests = document.getElementById("interests").value.trim();
  const extracurricular = document.getElementById("extracurricular").value.trim();

  // Validation checks
  let valid = true;
  if (name === "") {
      alert("Please enter your full name.");
      valid = false;
  }
  if (dob === "") {
      alert("Please enter your date of birth.");
      valid = false;
  }
  if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      valid = false;
  }
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      valid = false;
  }
  if (department === "") {
      alert("Please select a department.");
      valid = false;
  }

  if (!valid) return;

  // Display collected data as a confirmation message
  alert("Registration Successful!\n\n" +
        "Full Name: " + name + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Phone Number: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Department: " + department + "\n" +
        "Interests: " + interests + "\n" +
        "Extracurricular Activities: " + extracurricular);

  // Optionally log data to console
  console.log("Student Details:", { name, dob, phone, email, department, interests, extracurricular });

  // Reset form after successful submission
  document.getElementById("registration-form").reset();
  
});

