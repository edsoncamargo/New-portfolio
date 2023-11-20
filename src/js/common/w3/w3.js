export class W3 {
  constructor() { }

  start() {
    this.#applyAllHTMLByAttr();
  }

  #applyAllHTMLByAttr() {
    let z, i, element, file, xhttp;
    z = document.getElementsByTagName('*');

    for (i = 0; i < z.length; i++) {
      element = z[i];
      file = element.getAttribute('w3-include-html');

      if (file) {
        xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              element.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              element.innerHTML = 'Page not found.';
            }

            element.removeAttribute('w3-include-html');
            this.applyAllHTMLByAttr(); // Use "this" to refer to the current instance of the class
          }
        }.bind(this); // Bind the function to the current instance

        xhttp.open('GET', file, true);
        xhttp.send();
        return;
      }
    }
  }
}
