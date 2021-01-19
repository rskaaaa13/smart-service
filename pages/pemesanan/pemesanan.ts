/// <reference path="../../script.ts"/>

let content = document.getElementById("content");
let btnBack = new Hyperlink("Kembali", "../../index.html", "btn btn-info");
let btnSubmit = new Button("Kirim Data", "button");
let inputNama = new InputForm("text", "Nama Lengkap", "form-control");
let inputAlamat = new InputForm("text", "Alamat Lengkap", "form-control");
let inputNoTelp = new InputForm("text", "+62xx-xxxx-xxxx", "form-control");
let inputEmail = new InputForm("email", "Alamat Email", "form-control");
let inputTipeDevice = new InputForm("text", "Tipe Device", "form-control");
let inputKendala = new InputForm("text", "Deskripsikan kendala device", "form-control");


content.innerHTML = `
    <div class="container">
        <div class="row mt-4 mb-4">
            <div class="col-md-6 p-3 m-auto my-auto">
                <h4 class="text-center mb-2">Form Pemesanan Service</h4>
                <div class="alert alert-info" role="alert">
                    <p class="mb-2">Isi data pada form berikut untuk melakukan pemesanan service</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="nama">Nama Lengkap</label>
                        ${inputNama.generate("nama")}
                    </div>
                    <div class="form-group">
                        <label for="alamat">Alamat</label>
                        ${inputAlamat.generate("alamat")}
                    </div>
                    <div class="form-group">
                        <label for="noTelp">No. Telepon</label>
                        ${inputNoTelp.generate("noTelp")}
                    </div>
                    <div class="form-group">
                        <label for="email">Email Aktif</label>
                        ${inputEmail.generate("email")}
                    </div>
                    <div class="form-group">
                        <label for="tipeDevice">Tipe Device</label>
                        ${inputTipeDevice.generate("tipeDevice")}
                        <small class="form-text text-muted">Contoh: Laptop, Handphone, Monitor, dll..</small>
                    </div>
                    <div class="form-group">
                        <label for="kendala">Deskripsi Kendala</label>
                        ${inputKendala.generate("kendala")}
                        <small class="form-text text-muted">Deskripsikan kendala pada device anda, untuk acuan tim kami dalam melakukan diganosa kerusakan</small>
                    </div>
                    ${btnSubmit.generate("prosesPesanan", "onClick")}
                    ${btnBack.generate()}
                </form>
            </div>
        </div>    
    </div>
`;


function prosesPesanan() {
    let getNama = (<HTMLInputElement>document.getElementById("email")).value;
    let getAlamat = (<HTMLInputElement>document.getElementById("alamat")).value;
    let getNoTelp = (<HTMLInputElement>document.getElementById("noTelp")).value;
    let getEmail = (<HTMLInputElement>document.getElementById("email")).value;
    let getTipe = (<HTMLInputElement>document.getElementById("tipeDevice")).value;
    let getKendala = (<HTMLInputElement>document.getElementById("kendala")).value;

    let details = {
        nama: getNama,
        alamat: getAlamat,
        noTelp: getNoTelp,
        email: getEmail,
        tipe: getTipe,
        kendala: getKendala
    };

    let invoice = new Pemesanan();
    let response = invoice.exportInvoice();

    document.getElementById('content').hidden = true;
    document.getElementById('invoice').innerHTML = response;
    // if(validate.validate() == true) {
    //     console.log("berhasil");
    //     window.location.href = "../transaksi/transaksiPage.html";
    // }
}

function generateNumber() {
    const list:string = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    let result = "";
    for(let i = 0; i < list.length; i++) {
        let char = Math.floor(Math.random() * list.length);
        result = result + list.charAt(char);
    }
    return result;
}

