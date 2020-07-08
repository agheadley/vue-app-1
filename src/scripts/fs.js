const fs = window.require('fs');


/*
// https://javascript.info/file
function readFile(file) {
  //let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}
*/
function readFile(file) {


fs.readFile(file.path,'utf8', function (err, data) {
  if (err) {
      throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  console.log(content);   // Put all of the code here (not the best solution)
});

}

function writeFile(filename,text) {
  fs.appendFile('./uploads/'+filename,text, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}


function downloadFile(filename, text,parentElement) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  console.log('here');
  parentElement.appendChild(element);

  element.click();

  parentElement.removeChild(element);
}

export {readFile,writeFile,downloadFile}
