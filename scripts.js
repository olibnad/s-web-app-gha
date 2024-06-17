document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('climb-form');
  const gymButtons = document.querySelectorAll('.gym-button');
  const gymLocation = document.getElementById('gym-location');

  gymButtons.forEach((button) => {
    button.addEventListener('click', function() {
      gymButtons.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
      gymLocation.value = this.innerText;
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const level = form.level.value;
    const location = gymLocation.value;
    const date = form.date.value;
    const wallType = form.wallType.value;
    const holds = Array.from(form.holds)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const climb = { level, location, date, wallType, holds };
    let climbs = JSON.parse(localStorage.getItem('climbs')) || [];
    climbs.push(climb);
    localStorage.setItem('climbs', JSON.stringify(climbs));

    form.reset();
    gymButtons.forEach((btn) => btn.classList.remove('active'));
    alert('Climb added successfully!');
  });
});
