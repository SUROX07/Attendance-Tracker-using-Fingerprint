const { response } = require("express");

  async function fetchStudentData() {
    const student_id = document.getElementById("student-id").value;
    console.log(student_id);
    
    try {
      const response = await fetch(`http://localhost:3000/api/students/${student_id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
      });

      // Ensure the response is ok
      if (!response.ok) {
          alert("Enter valid ID");
          throw new Error(`Error: ${response.status}`);
      }

      // Parse the response data and log it
      const data = await response.json();
      console.log("data:", data);
      document.getElementById("student-info").classList.remove("hidden");
      
      // Update student ID and totals
      document.getElementById("display-student-name").textContent = data.name;
      document.getElementById("display-student-id").textContent = data.student_id;
      document.getElementById("display-student-dob").textContent = data.date_of_birth.substring(0,10);
      document.getElementById("total-present").textContent = data.days_present;
      document.getElementById("total-absent").textContent   = 90 - data.days_present;

      // Handle the data as required, e.g., displaying the student info on the page
  } catch (error) {
      console.error("Error fetching student data:", error);
      
  }




    // If the student exists, display their attendance data
    // if (student) {
    //   document.getElementById("student-info").classList.remove("hidden");
      
    //   // Update student ID and totals
    //   document.getElementById("display-student-name").textContent = student.student_name;
    //   document.getElementById("display-student-id").textContent = student.student_id;
    //   document.getElementById("total-present").textContent = student.days_present;
    //   document.getElementById("total-absent").textContent   = student.days_absent;
    // } else {
    //   alert("Student ID not found. Please try again.");
    //   document.getElementById("student-info").classList.add("hidden");
    // }
  }