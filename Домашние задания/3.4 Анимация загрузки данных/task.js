const loader = document.getElementById('loader');
const content = document.querySelector('.card');
xhr = new XMLHttpRequest ( ); 
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'); 
xhr.send()
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  content.textContent = xhr.response.data.title;
  content.dataset.id = xhr.response.id;
  console.log(xhr.response.id)
  pollAnswers.innerHTML = xhr.response.data.answers.map((text, dataId) => `
    <button class="poll__answer" data-id="${dataId}">
      ${text}
    </button>
  `).join('');
  loader.classList.remove(`loader_active`)
});



