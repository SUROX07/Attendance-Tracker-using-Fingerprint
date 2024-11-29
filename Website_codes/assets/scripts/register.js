async function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission
  
    // Get form values
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const adminYes = document.getElementById('adminYes').checked;
    const adminNo = document.getElementById('adminNo').checked;
  
    // Check if admin option is selected
    const admin = adminYes ? 'true' : (adminNo ? 'false' : null);
  
    // Validate that all fields are filled
    if (!studentId || !name || !password || admin === null) {
      alert('Please fill out all fields.');
      return;
    }
  
  
    try {
      // Send data to the server
      const response = await fetch('http://localhost:3000/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({studentId, name, password, admin}),  // Send form data as JSON
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Success - handle success message
        alert(data.message);  // Alert success message from API response
        // Optionally redirect to login or another page
        window.location.href = 'dashboard.html'; // Redirect to login page after successful registration
      } else {
        // Error - handle error message
        alert(data.message);  // Alert error message from API response
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
  // Attach the handleSubmit function to the form submission
  document.querySelector('form').addEventListener('submit', handleSubmit);