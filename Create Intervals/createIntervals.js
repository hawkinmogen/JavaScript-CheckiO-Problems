// Link to my solution on CheckiO:
// https://js.checkio.org/mission/old-create-intervals/publications/hawkinmogen/js-node/first/share/3a58239a23116d0f91001e34bee13a4e/

function createIntervals(data) {
    
    var bigArray = []; 
    var interval =[];
    data.sort(function(a, b){return a-b}); //sorts array from least to greatest
    
    var i=0;
    
        for(i=0; i<data.length; i++){
            
        if(data[i+1]-data[i]==1){ //if i and i+1 are consecutive digits, add i to current interval array
            interval.push(data[i]); 
            }
        
        else{interval.push(data[i]);//adds data[i] if it only occurs once
                                    
        bigArray.push([interval[0],data[i]]);//pushes interval endpoints to "bigArray" as an array
                                             
            
            interval.length=0;//resets "interval" array to empty
           }
        
        }
    
            return bigArray;
