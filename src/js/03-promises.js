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

form.addEventListener('submit', event => {
  event.preventDefault();
  setTimeout(() => {
    let speed = Number(form.step.value);
    for (i = 1; i <= form.amount.value; i++) {
      if (i == 1) {
        speed = 0;
      }
      let prom = createPromise(i, speed);
      prom
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
      speed = speed + Number(form.step.value);
    }
  }, form.delay.value);
});
