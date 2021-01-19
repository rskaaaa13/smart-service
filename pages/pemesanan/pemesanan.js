/// <reference path="../../script.ts"/>
var content = document.getElementById("content");
var btnBack = new Hyperlink("Kembali", "../../index.html", "btn btn-info");
var btnSubmit = new Button("Kirim Data", "button");
var inputNama = new InputForm("text", "Nama Lengkap", "form-control");
var inputAlamat = new InputForm("text", "Alamat Lengkap", "form-control");
var inputNoTelp = new InputForm("text", "+62xx-xxxx-xxxx", "form-control");
var inputEmail = new InputForm("email", "Alamat Email", "form-control");
var inputTipeDevice = new InputForm("text", "Tipe Device", "form-control");
var inputKendala = new InputForm("text", "Deskripsikan kendala device", "form-control");
content.innerHTML = "\n    <div class=\"container\">\n        <div class=\"row mt-4 mb-4\">\n            <div class=\"col-md-6 p-3 m-auto my-auto\">\n                <h4 class=\"text-center mb-2\">Form Pemesanan Service</h4>\n                <div class=\"alert alert-info\" role=\"alert\">\n                    <p class=\"mb-2\">Isi data pada form berikut untuk melakukan pemesanan service</p>\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"nama\">Nama Lengkap</label>\n                        " + inputNama.generate("nama") + "\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"alamat\">Alamat</label>\n                        " + inputAlamat.generate("alamat") + "\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"noTelp\">No. Telepon</label>\n                        " + inputNoTelp.generate("noTelp") + "\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email Aktif</label>\n                        " + inputEmail.generate("email") + "\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"tipeDevice\">Tipe Device</label>\n                        " + inputTipeDevice.generate("tipeDevice") + "\n                        <small class=\"form-text text-muted\">Contoh: Laptop, Handphone, Monitor, dll..</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"kendala\">Deskripsi Kendala</label>\n                        " + inputKendala.generate("kendala") + "\n                        <small class=\"form-text text-muted\">Deskripsikan kendala pada device anda, untuk acuan tim kami dalam melakukan diganosa kerusakan</small>\n                    </div>\n                    " + btnSubmit.generate("prosesPesanan", "onClick") + "\n                    " + btnBack.generate() + "\n                </form>\n            </div>\n        </div>    \n    </div>\n";
function prosesPesanan() {
    var getNama = document.getElementById("email").value;
    var getAlamat = document.getElementById("alamat").value;
    var getNoTelp = document.getElementById("noTelp").value;
    var getEmail = document.getElementById("email").value;
    var getTipe = document.getElementById("tipeDevice").value;
    var getKendala = document.getElementById("kendala").value;
    var details = {
        nama: getNama,
        alamat: getAlamat,
        noTelp: getNoTelp,
        email: getEmail,
        tipe: getTipe,
        kendala: getKendala
    };
    var invoice = new Pemesanan();
    var response = invoice.exportInvoice();
    document.getElementById('content').hidden = true;
    document.getElementById('invoice').innerHTML = response;
    // if(validate.validate() == true) {
    //     console.log("berhasil");
    //     window.location.href = "../transaksi/transaksiPage.html";
    // }
}
function generateNumber() {
    var list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    var result = "";
    for (var i = 0; i < list.length; i++) {
        var char = Math.floor(Math.random() * list.length);
        result = result + list.charAt(char);
    }
    return result;
}
