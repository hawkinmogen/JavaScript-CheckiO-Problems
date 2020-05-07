// Link to my solution on CheckiO:
// https://js.checkio.org/mission/old-secret-message/publications/hawkinmogen/js-node/using-regex/share/57b228acb37eb367cfa634c0ecf930b1/

function findMessage(data) {
    var secretMessage='';
    var i=0;
    for (i=0; i<data.length; i++){
            // if data[i] is uppercase and alphabetical, add it to 'secretMessage'
            if (data[i] === data[i].toUpperCase() && data[i].match(/[a-z]/i))
            {
                secretMessage+=data.charAt(i);
                
            }
           
    }
    
    return secretMessage;
}
