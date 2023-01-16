import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
let delay = form.delay.value;

form.addEventListener('submit', event => {
  event.preventDefault();
  setTimeout(() => {
    let step = Number(form.step.value);
    for (let i = 1; i <= form.amount.value; i++) {
      if (i == 1) {
        step = Number(form.delay.value);
      }
      createPromise(i, step)
        .then(value => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${value.position} in ${value.delay}ms`
          );
        })
        .catch(value => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${value.position} in ${value.delay}ms`
          );
        });
      step = step + Number(form.step.value);
    }
  }, delay);
});
