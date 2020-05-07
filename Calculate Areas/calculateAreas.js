// Link to my solution on CheckiO:
// https://js.checkio.org/mission/old-simple-areas/publications/hawkinmogen/js-node/first/share/56a6309151856f74fa5300ab53ab45ab/

function simpleAreas(args) {
   
   // if one argument is given, calculate area of the circle
   if (arguments.length===1){
       args=args/2;
       var area = Math.PI*(args*args);
       area = Math.round(area*100)/100; //round to two digits if necessary
       return area;}
    
    // if two arguments are given, calculate area of the rectangle
    if(arguments.length===2){
        area =arguments[0]*arguments[1];
        area = Math.round(area*100)/100; //round to two digits if necessary
        return area;
    }
    
    // if three arguments are given, calculate area of the triangle using heron's formula
    if(arguments.length===3){
       var argumentsArray = Array.from(arguments); 
        argumentsArray.sort();
       var p = (arguments[0]+arguments[1]+arguments[2])/2;
            var area = Math.sqrt(p*(p-arguments[0])*(p-arguments[1])*(p-arguments[2]));
         area = Math.round(area*100)/100; //round to two digits if necessary
        return area;}
        
     }
