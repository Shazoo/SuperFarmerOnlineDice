const dice1_arr = ['🐇','🐇','🐇','🐇','🐇','🐇','🐑', '🐑', '🐖', '🐖', '🐄', '🦊'];
const dice2_arr = ['🐇','🐇','🐇','🐇','🐇','🐇','🐑', '🐑', '🐑', '🐖', '🐎', '🐺'];
const runbtn = document.querySelector('#run')

function get_random_animal(arr) {
  var r = Math.floor(Math.random() * arr.length);
  return arr[r];
}

runbtn.addEventListener('click', e=> {
  var show_ele_1 = document.querySelector('#dice1');
  var show_ele_2 = document.querySelector('#dice2');
  show_ele_1.innerText = get_random_animal(dice1_arr);
  show_ele_2.innerText = get_random_animal(dice2_arr);
  runbtn.disabled  = true;
  runbtn.innerText = '等等再扔';

  setTimeout(function () {
    runbtn.disabled  = false;
    runbtn.innerText = '扔骰子';
  }, 2000)
})