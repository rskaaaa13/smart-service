class Button {
    protected type: string
    protected label: string
    protected selector: string;

    constructor(label: string , type: string = "button", selector: string = "primary") {
        this.type = type;
        this.label = label;
        this.selector = selector;
    }

    generate(callback: string = null, event: string = null) {
        if(callback !== null && event !== null) {
            return `<button class="btn btn-${this.selector}" type="${this.type}" ${event}="${callback}()">${this.label}</button>`;
        } else {
            return `<button class="btn btn-${this.selector}" type="${this.type}">${this.label}</button>`;
        }
    }
}

class Hyperlink {
    protected label: string;
    protected href: string;
    protected selector: string;

    constructor(label: string , href: string = "#", selector: string = "") {
        this.label = label;
        this.href = href;
        this.selector = selector;
    }

    generate() {
        return `<a href="${this.href}" class="${this.selector}">${this.label}</a>`;
    }
}

class InputForm {
    protected type: string;
    protected placeholder: string;
    protected selector: string;

    constructor(type: string = "text", placeholder: string = "", selector: string = "") {
        this.type = type;
        this.placeholder = placeholder;
        this.selector = selector;
    }

    generate(name: string = null, readonly:boolean = false, value:string = "") {
        if(name == null) {
            return `<input class="${this.selector}" type="${this.type}" placeholder="${this.placeholder}">`;
        } else {
            if(readonly == true && value !== "") {
                return `<input class="${this.selector}" id="${name}" type="${this.type}" placeholder="${this.placeholder}" value="${value}" readonly>`;    
            }
            return `<input class="${this.selector}" id="${name}" type="${this.type}" placeholder="${this.placeholder}">`;
        }
    }
}

class Pemesanan {
    protected invoice:string;

    exportInvoice() {
        let kode = new InputForm("text", "", "form-control");
        let inputKode = kode.generate("", true, this.generateNumber());
        let btnPesanKembali = new Hyperlink("Pesan Lagi", "pemesananPage.html", "btn btn-primary").generate();
        let btnKembali = new Hyperlink("Kembali Ke Halaman Awal", "../../index.html", "btn btn-info").generate();
        this.invoice = `
        <div class="container">
            <div class="row mt-4 mb-4">
                <div class="col-md-6 p-3 m-auto my-auto">
                    <form>
                        <div class="alert alert-info" role="alert">
                            <p class="mb-2">Silahkan menyalin kode INVOICE di bawah ini, untuk kemdian ditunjukkan kepada pihak service</p>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-sm-2 col-form-label">INVOICE</label>
                            <div class="col-sm-10">
                                ${inputKode}
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                ${btnPesanKembali}
                            </div>
                            <div class="col-sm-6">
                                ${btnKembali}
                            </div>
                        </div>
        `;
        // for(let detail of details) {

        // }
        this.invoice += `
                    </form>
                </div>
            </div>
        </div>
        `;
        let result = this.invoice;
        return result;
    }

    generateNumber() {
        const list:string = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
        let result = "";
        for(let i = 0; i < list.length; i++) {
            let char = Math.floor(Math.random() * list.length);
            result = result + list.charAt(char);
        }
        return result;
    }
}


class Auth {
    protected validEmail:string = "user12@gmail.com";
    protected validPassword:string = "pwuser12";
    protected email:string;
    protected password:string;

    constructor(email:string = "", password:string = "") {
        this.email = email;
        this.password = password;
    }

    validate() {
        if(this.email !== this.validEmail || this.password !== this.validPassword) {
            alert("Email atau Password salah!");
            return;
        } else {
            return true;
        }
    }
}