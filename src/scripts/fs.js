const fs = window.require('fs');

function readFile(file,callback) {
  fs.readFile(file.path,'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    callback(content);
  });

}

function writeFile(filename,text) {
  fs.appendFile('./uploads/'+filename,text, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
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
