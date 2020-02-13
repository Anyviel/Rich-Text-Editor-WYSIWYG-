const richEditor = richTextEditor.document;
let isInEditMode = true;

// Permite a Edição da caixa de texto
function enableEditMode () {
  richTextEditor.document.designMode = 'On';
}
// Executa os comandos passados através da função onclick
function exeCom (evt) {
  richEditor.execCommand(evt, false, null)
}
// Executa os argumentos passados através da função onclick/onchange
function execArg (evt, arg) {
  richEditor.execCommand(evt, false, arg);
}
// Faz a modificação de fonte, tamanho,
function toggleSource () {
  const richText = richTextEditor.document.getElementByTagName('body')[0];
  let showSource = false
  if (showSource) {
    richText.innerHTML = richText.textContent;
    showSource = false;
  } else {
    richText.textContent = richText.innerHTML;
    showSource = true;
  }
}
// Ativa/Desativa a edição de texto
function toggleEdit () {
  if (isInEditMode) {
    richEditor.designMode = 'Off'
    isInEditMode = false;
  } else {
    richEditor.designMode = 'On'
    isInEditMode = true;
  }
}
