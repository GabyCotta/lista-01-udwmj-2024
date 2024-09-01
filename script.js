// Lista dos integrantes do BTS
const members = [
    'RM',
    'Jin',
    'Suga',
    'J-Hope',
    'Jimin',
    'V',
    'Jungkook'
];

// Contador para o nome do integrante atual
let index = 0;

// Cria e configura o estilo da página
function setupPage() {
    document.body.style.backgroundColor = '#8A2BE2'; // Cor de fundo roxa
    document.body.style.color = '#FFFFFF'; // Texto branco
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.textAlign = 'center';

    const memberNameElement = document.createElement('div');
    memberNameElement.id = 'memberName';
    memberNameElement.style.fontSize = '2em';
    memberNameElement.style.fontWeight = 'bold';
    memberNameElement.textContent = 'Clique na página para homenagear o BTS!';
    document.body.appendChild(memberNameElement);

    document.body.addEventListener('click', showNextMember);
}

// Função para exibir o nome do próximo integrante
function showNextMember() {
    const memberNameElement = document.getElementById('memberName');
    memberNameElement.textContent = members[index];
    index = (index + 1) % members.length;
}

// Configura a página e adiciona o evento de clique quando a página é carregada
window.onload = setupPage;
