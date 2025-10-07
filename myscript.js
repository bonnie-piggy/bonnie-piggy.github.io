document.addEventListener('DOMContentLoaded', () => {
  console.log('myscript.js connected');
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.item');
  items.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  //---------------------------
  // setup show hide all button
  //---------------------------
  const showHideButton = document.getElementById('showhide');
  showHideButton.addEventListener('click', function() {
    items.forEach(function(item) {
      item.classList.toggle('active');
    });
  });

  //------------------------------------
  // adds a darkmode class to the body
  //------------------------------------
  const darkModeButton = document.getElementById('darkmode');
  darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });

});

  // Toggle class on a span
  const span = document.querySelector('span.toggle-class');
  if (span) {
    span.addEventListener('click', () => {
      const added = span.classList.toggle('c');
      span.textContent = `'c' ${added ? 'added' : 'removed'}; classList is now "${[...span.classList].join(' ')}".`;
    });
  }

  // Sky button + Moon / Sun behavior
  // Expected:
  // 1. Sky button press: show moon (if clear)
  // 2. Sky button press again: clear (hide both)
  // 3. Click moon: hide moon, show sun
  // 4. Click sun: hide sun, show moon
  const moon = document.getElementById('moon');
  const sun = document.getElementById('sun');
  const skyBtn = document.getElementById('sky-btn'); // add a button with id="sky-btn"
  const darkModeButton = document.getElementById('darkmode');
  darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
  });

  if (moon && sun) {
    // Start with clear sky
    moon.style.display = 'none';
    sun.style.display = 'none';

    const showMoon = () => {
      moon.style.display = 'block';
      sun.style.display = 'none';
    };
    const showSun = () => {
      moon.style.display = 'none';
      sun.style.display = 'block';
    };
    const clearSky = () => {
      moon.style.display = 'none';
      sun.style.display = 'none';
    };

    // Moon -> Sun
    moon.addEventListener('click', showSun);
    // Sun -> Moon
    sun.addEventListener('click', showMoon);

    // Sky button toggles: clear <-> moon
    if (skyBtn) {
      skyBtn.addEventListener('click', () => {
        const noneVisible = moon.style.display === 'none' && sun.style.display === 'none';
        if (noneVisible) {
          showMoon();
        } else {
          clearSky();
        }
      });
    }
  }

  // Button -> group show/hide
  const buttons = document.querySelectorAll('.button[data-target]');
  const groups = document.querySelectorAll('.group');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      buttons.forEach(b => b.classList.toggle('active', b === btn));
      groups.forEach(g => {
        g.style.display = (g.id === targetId) ? 'block' : 'none';
      });
    });
  });
});
