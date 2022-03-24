document.getElementById("name").addEventListener("keyup", getCountryFromName)

   
function getCountryFromName(event) {
    
    if (event.keyCode === 13) {

        let container = document.querySelector('.container');
   
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }





        let name = event.target.value;
        let arrOfNames = name.split(",");
        
        document.querySelector('.container').classList.remove('hidden');
     
        
        
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
            
            
            let infoPar = document.createElement('p');
            infoBox.appendChild(infoPar);
            
         

            
            let countryLetters = data.country[1].country_id;
            
            let countryName = countries[countryLetters];
            
            

            function getName(obj, countryId) {
                    return (obj[countryId]);
                }

            function toPercent(num) {
                return (num * 100) + "%"
            }


            infoPar.innerHTML = `This name is probably ${toPercent(data.country[0].probability.toFixed(2))} from ${getName(countries, data.country[0].country_id)}, ${toPercent(data.country[1].probability.toFixed(2))} from ${getName(countries, data.country[1].country_id)} and ${toPercent(data.country[2].probability.toFixed(2))} from ${getName(countries, data.country[2].country_id)}.`
                
                
            
        })
        .catch (function(err) {
            console.log(err);
        })
     
    } 
}

}
    
