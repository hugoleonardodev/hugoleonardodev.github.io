const states = [
  'Nenhum',
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

const stateSelector = document.querySelector('.select-state');

for (let index = 0; index < states.length; index += 1) {
  const stateElement = document.createElement('option');
  stateElement.innerHTML = states[index];
  stateSelector.appendChild(stateElement);
}

const allInputs = document.querySelectorAll('input[type=text], .select-state, input[type=radio], .text-area');

const generateButton = document.getElementById('generate-curriculum');

const invalidFields = document.querySelector('.invalid-fields');

function showInvalid () {
  invalidFields.style.display = 'flex';
}

generateButton.addEventListener('click', function (event) {
	for (let index = 0; index < allInputs.length-1; index += 1) {
		if (allInputs[index].value === '') {
      showInvalid ();
      event.preventDefault();
		} else if (allInputs[index].value === 'Nenhum') {
		  showInvalid ();
		  event.preventDefault();
		} else if (allInputs[index].checked === false) {
		  showInvalid ();
		  event.preventDefault();
		} else {
      const fullName = document.createElement('p');
			fullName.innerHTML = `Nome: ${allInputs[0].value}`;
			const email = document.createElement('p');
			email.innerHTML = `Email: ${allInputs[1].value}`;
			const cpf = document.createElement('p');
			cpf.innerHTML = `Cpf: ${allInputs[2].value}`;
			const endereço = document.createElement('p');
			endereço.innerHTML = `Endereço: ${allInputs[3].value}`;
			const cidade = document.createElement('p');
			cidade.innerHTML = `Cidade: ${allInputs[4].value}`;
			const estado = document.createElement('p');
			estado.innerHTML = allInputs[5].value;
			const tipo = document.createElement('p');
      tipo.innerHTML = document.querySelector('input[type="radio"]:checked').value;
      const validationContainer = document.querySelector('.validation-curriculum');
			validationContainer.innerHTML = '';
			validationContainer.appendChild(fullName);
			validationContainer.appendChild(email);
			validationContainer.appendChild(cpf);
			validationContainer.appendChild(endereço);
			validationContainer.appendChild(cidade);
			validationContainer.appendChild(estado);
			validationContainer.appendChild(tipo);
			document.querySelector('body').innerHTML = document.querySelector('.validation-curriculum').innerHTML;
    }
  }
});
