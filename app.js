var bike = document.getElementById('bike');
bike.addEventListener('click', pedal, false);
///animation
function pedal() {
  let bike = document.getElementById('bike');
  let backWheel = document.getElementById('backwheel');
  let frontWheel = document.getElementById('frontwheel');
  //check if bike classname exists
  if (bike.className) {
    console.log(bike.className);
    bike.className = '';
    backWheel.className = '';
    frontWheel.className = '';
  } else {
    bike.className = 'move';
    backWheel.className = 'spin';
    frontWheel.className = 'spin';
  }
}
