
function makeItActive(id) {
  var item = document.getElementById(id);
  var items = document.getElementsByClassName("nav-item-1");
  var i;
  for ( i = 0 ; i < items.length ; i++){
    items[i].classList.remove("nav-item-1-active");
  }
  item.classList.add("nav-item-1-active")
}

function validationOfEmail() {
  var email = document.getElementById("email");
  var text = email.value;
  var patternEmail = new RegExp("^([a-zA-Z.+-_%0-9]+@[a-zA-Z.-]+\.[a-z]{2,})$");
  if (patternEmail.test(text)) {
    email.classList.remove("form-control-error1");
    email.classList.add("form-control1");
    removeAlert("emaildiv", "error-email-div");
  } else {
    email.classList.add("form-control-error1");
    removeAlert("emaildiv", "error-email-div");
    addAlert("ایمیل وارد شده نامعتبر می باشد", "emaildiv", "error-email-div");
  }
}

function addAlert(massage, idElement, id) {
  var div = document.createElement("div");
  div.classList.add("error-massage");
  div.setAttribute("id", id);
  var nodeText = document.createTextNode(massage);
  var nodeIcon = document.createElement("IMG");
  nodeIcon.setAttribute("src", "./img/error.png");
  nodeIcon.classList.add("error-icon-style");
  div.appendChild(nodeIcon);
  div.appendChild(nodeText);
  var divPar = document.getElementById(idElement);
  divPar.append(div);
}

function removeAlert(idElement, id) {
  var div = document.getElementById(id);
  if (div != null) {
    var divPar = document.getElementById(idElement);
    divPar.removeChild(div);
  }
}

function validationOfPassword() {
  var password = document.getElementById("psw");
  var text = password.value;
  var patternPassword = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$");
  if (patternPassword.test(text)) {
    password.classList.remove("form-control-error1");
    password.classList.add("form-control1");
    removeAlert("passworddiv", "error-password-div");
  } else {
    password.classList.add("form-control-error1");
    removeAlert("passworddiv", "error-password-div");
    addAlert("رمز وارد شده باید حداقل ۸ کاراکتر و حداقل یک رقم و حرف انگلیسی شامل شود", "passworddiv", "error-password-div");
  }
}

function validationOfPasswordDup() {
  var password = document.getElementById("psw");
  var passwordDup = document.getElementById("dupPsw");
  var textMain = password.value;
  var textDup = passwordDup.value;
  if (textDup == textMain) {
    passwordDup.classList.remove("form-control-error1");
    passwordDup.classList.add("form-control1");
    removeAlert("passworddupdiv", "error-passworddup-div");
  } else {
    passwordDup.classList.add("form-control-error1");
    removeAlert("passworddupdiv", "error-passworddup-div");
    addAlert("با رمز وارد شده مطابقت نمی کند", "passworddupdiv", "error-passworddup-div");

  }
}

function validationName() {
  var name = document.getElementById("name");
  var text = name.value;
  if (text === "") {
    name.classList.add("form-control-error1");
    removeAlert("namediv", "error-name-div");
    addAlert("نام خود را وارد کنید", "namediv", "error-name-div");

  } else {
    name.classList.remove("form-control-error1");
    name.classList.add("form-control1");
    removeAlert("namediv", "error-name-div");
  }
}

function openTextField() {
  var textBox = document.getElementById("select-user");
  textBox.style.display = 'block';

  var button = document.getElementById("send-btn");
  button.disabled = false;

}


function closeTextField() {
  var textBox = document.getElementById("select-user");
  textBox.style.display = 'none';

  var button = document.getElementById("send-btn");
  button.disabled = false;
}

function changeToDateTypeFrom() {
  var x = document.getElementById('from-date');
  x.type = 'date';
}

function changeToDateTypeTo() {
  var x = document.getElementById('to-date');
  x.type = 'date';
}

