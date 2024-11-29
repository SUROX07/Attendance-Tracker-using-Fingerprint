let testName= localStorage.getItem('name');

const welcome = document.querySelector('#welcome');
welcome.textContent='Welcome! '+testName;


const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.href = 'index.html';
})


window.addEventListener("load", async ()=>{
  const response = await fetch('http://localhost:3000/api/students/');
  const data = await response.json();
  console.log(data);
  const totalDays = 90 * data.length;
  let totalPresent = data.reduce((sum, student) => sum + student.days_present, 0);
  let totalAbsent = totalDays - totalPresent;
  totalPresent = (totalPresent/totalDays)*100;
  totalAbsent = (totalAbsent/totalDays)*100;


    Chart.register({
        id: 'shadowPlugin',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';  // Shadow color
          ctx.shadowBlur = 15;                      // Shadow blur amount
          ctx.shadowOffsetX = 4;                    // Horizontal offset
          ctx.shadowOffsetY = 4;                    // Vertical offset
        },
        afterDraw: (chart) => {
          chart.ctx.restore();
        }
      });

    const ctx = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Present% ', 'Absent% '],
        datasets: [{
          data: [totalPresent, totalAbsent],
          backgroundColor: ['#3b82f6', '#fbbf24'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    const admin =localStorage.getItem('admin');
    if(admin=="true"){
      document.querySelector('#profReg').classList.remove('invisible');


    }


  });
