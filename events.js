// events.js
// Use and implement Events. Use OnClick Property & implement addEventListener.
// Use & add Keyboard events & Event Object according to requirement 18.

// Example usage:
// Click event
document.getElementById('myButton').onclick = function() {
    console.log('Button clicked');
  };
  
  // Click event with addEventListener
  document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked with addEventListener');
  });
  
  // Keyboard events
  document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
  });
  