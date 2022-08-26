function attachCode(n) {
  var editor = document.currentScript.parentNode.getElementsByClassName('editor')[0];
  var outputText = document.currentScript.parentNode.getElementsByClassName('outputText')[0];
  var myCodeMirror = CodeMirror.fromTextArea(editor, {
    lineNumbers: true
  });
  var executeButton = document.currentScript.parentNode.getElementsByClassName('executeButton')[0];
  executeButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    executeLua(myCodeMirror, true, outputText);
  });
}

function executeLua(codeMirror, clear, outputElement) {
  var code = codeMirror.getValue();
  emscripten.print = function(x) {
    outputElement.textContent = (outputElement.textContent ? outputElement.textContent + '\n' : '') + x;
  }

  if (clear) {
    outputElement.style.color = null;
    outputElement.textContent = '';
  }
  try {
    L.execute(code);
  } catch(e) {
    outputElement.style.color = "red";
    outputElement.textContent = e.toString();
  }
}

