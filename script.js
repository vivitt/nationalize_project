document.getElementById("name").addEventListener("keyup", getCountryFromName)
    
function getCountryFromName(event) {
    
    if (event.keyCode === 13) {
    
        let name = event.target.value;
        let URL = `https://api.nationalize.io/?name=${name}`;
        let container = document.querySelector('.container').classList.remove('hidden');
        let infoTit = document.querySelector('.info-title');
        infoTit.innerHTML = name.toUpperCase();
        
        
        fetch(URL) 
        .then (function(response) {
        if (response.ok) {
            return response.json();
        } else {
            return promise.reject('Failed!');
            }
        }) 
        .then (function(data) {
            console.log(data);
            
            
            let infoPar = document.querySelector('.info-text');
            
            
            

            infoPar.innerHTML = `This name is probably ${data.country[0].probability.toFixed(2)} from ${data.country[0].country_id}, ${data.country[1].probability.toFixed(2)} from ${data.country[1].country_id} and ${data.country[2].probability.toFixed(2)} from ${data.country[2].country_id}.`
                
                
            
        })
        .catch (function(err) {
            console.log(err);
        })
     
    } 
}


    
