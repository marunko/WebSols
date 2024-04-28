console.log("Hello ");


let a = function (params) {
    
    let nstring = new String();
    
    for(let i =0; i < params.length/2; i++){
        let a = params.charAt(i);
        nstring[params.length-i-1] = a;
        nstring[i] = params.charAt(params.length -1-i);
        console.log();
    }

    console.log(nstring);
}
a("adf;ljnt");