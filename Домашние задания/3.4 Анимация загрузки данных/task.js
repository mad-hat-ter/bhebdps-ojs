const loader = document.getElementById('loader');
const content = document.getElementById('items');

xhr = new XMLHttpRequest ( ); 
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses/'); 
xhr.send()
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  content.dataset.id = xhr.response.id;
  for (let i = 0; i < Object.keys(xhr.response.response.Valute).length; i++ ){
    console.log(content)
    const currency = Object.entries(xhr.response.response.Valute)[i][1];
            content.innerHTML += `
                <div class="item">
                    <div class="item__code">${currency.CharCode} </div> 
                    <div class="item_value">&nbsp ${currency.Value } </div> 
                    <div class="item_currency">&nbsp руб.</div>
                </div>
            `;
  }
  loader.classList.remove(`loader_active`)
});



