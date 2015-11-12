var chars = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
var ret = "";
for(var i = 0; i < chars.length; i++) {
    var c = chars.charAt(i).toLowerCase();
    if(ret != "") {
        ret += ",\n";
    }
    ret += '{\t"caractere": "'+c+'",\n\t"braille": ""\n}';
}
console.log(ret);

/// Testando Modificação com GIT
