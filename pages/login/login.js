/// <reference path="../../script.ts"/>
var content = document.getElementById("content");
var btnBack = new Hyperlink("Kembali", "../../index.html", "btn btn-info");
var btnLogin = new Button("Login", "button");
var inputEmail = new InputForm("email", "Masukkan email anda", "form-control");
var inputPassword = new InputForm("password", "Masukkan password anda", "form-control");
content.innerHTML = "\n    <div class=\"container\">\n        <div class=\"row mt-4 mb-4\">\n            <div class=\"col-md-3 p-3 m-auto my-auto\">\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        " + inputEmail.generate("email") + "\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        " + inputPassword.generate("password") + "\n                    </div>\n                    " + btnLogin.generate("validateLogin", "onClick") + "\n                    " + btnBack.generate() + "\n                </form>\n            </div>\n        </div>    \n    </div>\n";
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var validate = new Auth(email, password);
    if (validate.validate() == true) {
        console.log("berhasil");
        window.location.href = "../pemesanan/pemesananPage.html";
    }
}
