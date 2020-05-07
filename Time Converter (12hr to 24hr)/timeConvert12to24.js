// Link to my solution on CheckiO:
// https://js.checkio.org/mission/old-time-converter-12h-to-24h/publications/hawkinmogen/js-node/first/share/2155005508eaae0447406dac183ab7bd/

function timeConverter(dayTime) {
    
    ///////////////////////////////////code for pm times below
    if (dayTime.includes("p")){
        
            
            var hour =parseInt(dayTime);
            
            var i=dayTime.indexOf(":");
            var minute =dayTime[i+1]+dayTime[i+2];
            
            if(hour<12){
                hour+=12;}
            
            return hour+":"+minute;}
   //////////////////////////////////////////// code for am times below         
    if(dayTime.includes("a")){
         var hour =parseInt(dayTime);
         
         if (dayTime[0]!=0 && dayTime[0]!=1){
             hour="0"+hour;}
             
        if(dayTime[0]==1 && dayTime[1]==2){
            hour="00";}
           
           var i=dayTime.indexOf(":");
            var minute =dayTime[i+1]+dayTime[i+2];
            
            return hour+":"+minute;}
        
    
}
