export const getPhone = () => {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const number = document.getElementById('number').value;
      resolve(number);
      document.body.removeChild(modal);
    });

    const h3 = document.createElement('h3');
    h3.classList.add('h3-modal');
    h3.innerText = 'Necesitamos confirmar tu número de celular';
    
    const label = document.createElement('label');
    label.setAttribute('for', 'number');
    label.innerText = 'Ingrese tu celular: ';
    
    const input = document.createElement('input');
    input.classList.add('inputModal');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'number');
    // input.setAttribute('required');
    
    const submitButton = document.createElement('button');
    submitButton.classList.add('button-modal');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Aceptar';
    
    form.appendChild(h3);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitButton);
    
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);
  });
};