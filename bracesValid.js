function BracesValid (str) {
    var par = 0;
    var curl = 0;
    var brac = 0;
    for(i = 0; i < str.length; i++){
        if (str[i] == "(")
            par += 1;
        else if (str[i] == ")"){
            if(brac != 0 || curl != 0){
                return false;
            }
            par -= 1;
        }
      
        if (str[i] == "{")
            curl += 1;
        else if (str[i] == "}"){
            if(brac != 0 || par != 0){
                return false;
            }
            curl -= 1;
        }

        if (str[i] == "[")
           brac += 1;
        else if (str[i] == "]"){
            if(curl != 0 || par != 0){
                return false;
            }
            brac -= 1;
        }
    } 
    if (par == 0 && curl == 0 && brac == 0)
        return true
    
    else 
        return false
}

console.log(BracesValid("{{()}}[]"))
console.log(BracesValid("{(})"))


function bracesValid(braces){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var stack = [];
    for (var i = 0; i < braces.length; ++i)
        if(braces[i] === '(' || braces[i] === '[' || braces[i] === '{'){
            stack.push(braces[i]);
        }
        else if(stack[stack.length-1] === pairs[braces[i]]){
            stack.pop();
        }
        else{
            console.log("False")
            return false;
        }
    console.log("True")
    return stack.length === 0;
}