class StringBuilder {
    #value;
    constructor(params) {
        this.#value = params;
    }
    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const pad1 = this.#value.concat(" ", str);


    }

    padStart(str) {
        let pad2 = this.#value.concat(str, " ");


    }

    padBoth(str) {
        let pad3 = this.#value.concat(str, " ", str);

    }




}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
