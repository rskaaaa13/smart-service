/// <reference path="../../script.ts"/>

let content = document.getElementById("content");
let btnBack = new Hyperlink("Kembali", "../../index.html", "btn btn-info");
let btnLogin = new Button("Login", "button");
let inputEmail = new InputForm("email", "Masukkan email anda", "form-control");
let inputPassword = new InputForm("password", "Masukkan password anda", "form-control");


content.innerHTML = `
    <div class="container">
        <div class="row mt-4 mb-4">
            <div class="col-md-3 p-3 m-auto my-auto">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        ${inputEmail.generate("email")}
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        ${inputPassword.generate("password")}
                    </div>
                    ${btnLogin.generate("validateLogin", "onClick")}
                    ${btnBack.generate()}
                </form>
            </div>
        </div>    
    </div>
`;


function validateLogin() {
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    let validate = new Auth(email, password);

    if(validate.validate() == true) {
        console.log("berhasil");
        window.location.href = "../pemesanan/pemesananPage.html";
    }
}

