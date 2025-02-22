// Lista principal de nomes
let amigos = [];

/**
 * Adiciona um novo amigo à lista
 * - Impede nomes vazios, com números ou duplicados.
 */
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Verifica se há números no nome
  if (/\d/.test(nome)) {
    alert("Por favor, não insira números no nome.");
    return;
  }

  // Verifica duplicidade (case-insensitive)
  const nomeExiste = amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase());
  if (nomeExiste) {
    alert(`O nome "${nome}" já existe na lista.`);
    return;
  }

  // Adiciona ao array e exibe na lista
  amigos.push(nome);
  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nome;
  lista.appendChild(li);

  // Limpa o campo
  input.value = "";
}

/**
 * Sorteia um amigo, remove-o do array
 * e se for o último, limpa a lista e avisa que acabou.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    showNotification("Não há nomes para sortear. Adicione nomes ou limpe a lista.");
    return;
  }

  // Índice aleatório
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Remove o sorteado do array
  amigos.splice(indice, 1);

  // Se acabou a lista após remover
  if (amigos.length === 0) {
    // Limpa a lista exibida
    document.getElementById("listaAmigos").innerHTML = "";

    // Exibe notificação única
    showNotification(`O amigo secreto é: ${amigoSorteado}. Todos foram sorteados!`);
  } else {
    // Exibe notificação com o nome sorteado
    showNotification(`O amigo secreto é: ${amigoSorteado}`);
  }
}

/**
 * Mostra notificação (pop-up central)
 */
function showNotification(message) {
  const notification = document.getElementById("notification");
  const notificationText = document.getElementById("notification-text");

  notificationText.textContent = message;
  notification.classList.add("show");
}

/**
 * Fecha notificação
 */
function closeNotification() {
  const notification = document.getElementById("notification");
  notification.classList.remove("show");
}

/**
 * Limpa tudo (lista e tela)
 */
function limparLista() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  closeNotification();
}
