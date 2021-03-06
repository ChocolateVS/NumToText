let single = [
    "",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN"
];

let double = [
    "",
    "TWENTY",
    "THIRTY",
    "FORTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY"
]

let abr = [
    "HUNDRED",
    "THOUSAND",
    "MILLION"
];

let and = " "

function id(id){return document.getElementById(id)}

let input = id("numInput");
let out = id("output");

function convert() {
    let value = input.value;
    go(value, 0);
}
function go(val, type) {
    let value = val.toString();
    let string = value.split("");
    output = "";
    if (value >= 1 && value <= 19) { // 1 - 19
        output = single[value];
    }
    else if (value > 19 && string.length == 2) { // 20 - 99
        add(double[string[0] - 1]);
        if (string[1] != 0) {
            add(" " + single[string[1]]); 
        }
    }
    else if (string.length == 3) { // 100 - 999
        output = single[string[0]] + " " + abr[0];
        if (string[1] == 1) {
            let temp = string[1] + string[2];
            add(and + single[temp]);
        }
            else {
                if (string[1] != 0) {
                add(and + double[string[1] - 1]);
            }
            if (string[2] != 0) {
                add(" " + single[string[2]]);
            }  
        }
    }
    else if (string.length == 4) { // 1000 - 9999
        output = single[string[0]] + " " + abr[1];
        if (string[1] != 0) {
            add(" " + single[string[1]] + " " + abr[0]);
        }
        if (string[2] != 0) {
            add(and + double[string[2] - 1]);
        } 
        if (string[2] == 1) {
            let temp = string[2] + string[3];
            add(single[temp]);
        }
        else {
            if (string[3] != 0) {
                add(" " + single[string[3]]);
            } 
        }
    }
    else if (string.length == 5) { // 10000 - 99999
        let tem = string[0] + string[1];
        if (tem >= 1 && tem <= 19) {
            output = single[tem] + " " + abr[1];
        }
        else if (tem > 19) {
            add(" " +   double[string[0] - 1]);
            if (string[1] != 0) {
                add(" " + single[string[1]]); 
            }
            add(" " + abr[1])
        }
        if (string[2] != 0) {
            add(" " + single[string[2]] + " " + abr[0]);
        }
        if (string[3] != 0) {
            add(and + double[string[3] - 1]);
        } 
        if (string[3] == 1) {
            let temp = string[3] + string[4];
            add("" + single[temp]);
        }
        else {
            if (string[4] != 0) {
                add(" " + single[string[4]]);
            } 
        }
    }
    else if (string.length == 6) { // 10000 - 99999
        output = single[string[0]] + " " + abr[0];
        let tem = string[1] + string[2];
        if (string[1] == 0) tem = string[2];
        if (tem >= 1 && tem <= 19) {
            add(" " + single[tem] + " " + abr[1]);
        }
        else if (tem > 19) {
            add(" " + double[string[1] - 1]);
            if (string[2] != 0) {
                add(" " + single[string[2]]); 
            }
            add(" " + abr[1]);
        }
        else {
            add(" " + abr[1]);
        }
        if (string[3] != 0) {
            add(" " + single[string[3]] + " " + abr[0]);
        }
        if (string[4] != 0) {
            add(and + double[string[4] - 1]);
        } 
        if (string[4] == 1) {
            let temp = string[4] + string[5];
            add("" + single[temp]);
        }
        else {
            if (string[5] != 0) {
                add(" " + single[string[5]]);
            } 
        }
    }
    
    else if (value == 1000000) {
        output = "ONE MILLION";
    }
    else {
        output = "UNKNOWN/INVALID INPUT";
    }
    if (type == 0) {
        out.innerHTML = output + ", Length: " + output.length;
    }
    else if (type == 1) {
        return output;   
    }
}

function add (data) {
    output += data;
}

function getLong() {
    let range = input.value;
    let longest = [];
    let object = {
        num: 0,
        word: "",
        length: 0   
    };
    
    for (let i = 1; i <= range; i++) {
        let val = go(i, 1);
        //console.log(val);
        if (val.length > object.length) {
            longestNum = val.length;
            object = {
                num: i,
                word: val,
                length: val.length
            }
        }
        if (val.length == 64) {
            let obj = {
                num: i,
                word: val,
                length: val.length
            }
            longest.push(obj);
        }
    }
    out.innerHTML = "Longest: " + object.word + ", Length: " + object.length + "<br>" + "Alternative numbers with equal length: " + longest.length;
    console.log(longest);
    console.log(object);
}
