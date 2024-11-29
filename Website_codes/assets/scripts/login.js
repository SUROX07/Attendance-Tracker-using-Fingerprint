


const btn = document.querySelector('#login-form');
btn.addEventListener('submit', async function(e) {
    e.preventDefault();

    const id = document.getElementById('loginID').value;
    const password = document.getElementById('password').value;


    console.log('hello', id, password);
    try {
        const response = await fetch('http://localhost:3000/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, password }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        alert('Welcome! '+data.admin.name)
        localStorage.setItem('name', data.admin.name);
        localStorage.setItem('id', data.admin.id);
        localStorage.setItem('admin', data.admin.admin);
        window.location.href='dashboard.html';
      } catch (error) {
        console.error("Error:", error);
      }

    const data = await response.json();
    console.log(data);
    if (response.ok) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('id', data.id);
        localStorage.setItem('admin', data.admin);

        alert('Welcome! '+x.name);  
    } else {
        alert(data.message);
    }



});