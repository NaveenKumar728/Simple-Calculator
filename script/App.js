//selector
const output = document.getElementById('history-value');
const result = document.getElementById('result-value');
const keys = document.querySelectorAll('.btn');

//eventlistener
keys.forEach((key) => {
  key.addEventListener('click', calculate);
});

function calculate() {
  let buttonText = this.textContent;
  if (buttonText === 'C') {
    output.textContent = '';
    result.textContent = '';
    result.style.animation = '';
    output.style.animation = '';
    return;
  }

  if (buttonText === 'CE') {
    output.textContent = output.textContent.slice(
      0,
      output.textContent.length - 1
    );
    return;
  }

  if (buttonText === '=') {
    result.textContent = eval(output.textContent);
    result.style.animation = 'big 0.3s ease-in-out forwards';
    output.style.animation = 'small 0.3s ease-in-out forwards';
  } else {
    output.textContent += buttonText;
    result.style.animation = 'small 0.3s ease-in-out forwards';
    output.style.animation = 'big 0.3s ease-in-out forwards';
  }
}
