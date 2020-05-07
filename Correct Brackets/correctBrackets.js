// Link to my solution on CheckiO:
// https://js.checkio.org/mission/old-brackets/publications/hawkinmogen/js-node/first/share/b32789e1b09a6bd8ea486d0659dd3cf1/

function brackets(expression){

  var  openBracketCount = 0;
  var closeBracketCount=0;
    var brackets = [];
 
 const matchLookup = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
      };
    
    for(let i=0; i<expression.length; i++){
       
       // add all opening brackets to 'brackets' in the order they appear
        if(expression[i]==="[" || expression[i]=="{" ||  expression[i]==="("){
            brackets.push(expression[i]);
            openBracketCount++;
            }
         
         // if expression[i] is a closing bracket, make sure it is the same type as the last opening bracket
         if(expression[i]==="]" || expression[i]=="}" ||  expression[i]===")"){
             closeBracketCount++;
            
            // remove the last element in 'brackets' and set it equal to 'lastBracket'
             const lastBracket = brackets.pop();
             
             //use the 'matchLookup' dictionary to check if closing bracket appear in reverse order of opening brackets
             //if not, return false
             if(matchLookup[lastBracket] !== expression[i] ){return false;}
            
             
         }
           
}
// make sure the number of opening brackets is equal to the number of closing brackets
if(openBracketCount==closeBracketCount){return true;}
else return false;

}
