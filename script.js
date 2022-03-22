document.getElementById("name").addEventListener("keyup", getCountryFromName)
 /// name.trim()
   
function getCountryFromName(event) {
    
    if (event.keyCode === 13) {
        let name = event.target.value;
        let arrOfNames = name.split(",");
        let container = document.querySelector('.container').classList.remove('hidden');
        for (let i of arrOfNames) {
            let nameItem = i.replace(/\s/g, '');
            let URL = `https://api.nationalize.io/?name=${nameItem}`;
        
            let infoBox = document.createElement('div');
            document.querySelector('.container').appendChild(infoBox);
            infoBox.classList.add('info');
            
            let infoTit = document.createElement('h2');
            infoBox.appendChild(infoTit);
            infoTit.innerHTML = nameItem.toUpperCase();
        
        
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
            
            let infoPar = document.createElement('p');
            infoBox.appendChild(infoPar);
            
            
            

            infoPar.innerHTML = `This name is probably ${data.country[0].probability.toFixed(2)} from ${data.country[0].country_id}, ${data.country[1].probability.toFixed(2)} from ${data.country[1].country_id} and ${data.country[2].probability.toFixed(2)} from ${data.country[2].country_id}.`
                
                
            
        })
        .catch (function(err) {
            console.log(err);
        })
     
    } 
}

}
    
