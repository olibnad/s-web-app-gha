document.addEventListener('DOMContentLoaded', function() {     const climbHistory = document.getElementById('climb-history');
  const climbs = JSON.parse(localStorage.getItem('climbs')) || [];

  if (climbs.length === 0) {
    climbHistory.innerHTML = '<p>No climbs recorded yet.</p>';
  } else {
    climbs.forEach((climb) => {
      const climbDiv = document.createElement('div');
      climbDiv.classList.add('climb');

      const climbInfo = `
                <p><strong>Level:</strong> ${climb.level}</p>
                <p><strong>Location:</strong> ${climb.location}</p>
                <p class="climb-date"><strong>Date:</strong> ${climb.date}</p>
                <p><strong>Type of Wall:</strong> ${climb.wallType}</p>
                <p><strong>Holds:</strong> ${climb.holds.join(', ')}</p>
            `;
      climbDiv.innerHTML = climbInfo;
      climbHistory.appendChild(climbDiv);
    });
  }

});
