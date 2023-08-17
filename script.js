function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hey,I can give the basic Information about Agriculture." ;
    res_elm.setAttribute("class","left");
 
    document.getElementById('msg').appendChild(res_elm);
}
 
 let but= document.querySelector("button");
 let input=document.getElementById("msg_send");
 input.addEventListener("keypress" ,(event) => {
    var req = document.getElementById('msg_send').value;
    if(event.key==="Enter"){
       // event.preventDefault();
        but.click();
        if (req === undefined || req === "") {
            var res="pls enter something";
            let data_req = document.createElement('div');
            let data_res = document.createElement('div');

            let container1 = document.createElement('div');
            let container2 = document.createElement('div');
            container1.setAttribute("class","msgCon1");
            container2.setAttribute("class","msgCon2");
            data_req.innerHTML = req;
            data_res.innerHTML = res;


            data_req.setAttribute("class", "right");
            data_res.setAttribute("class", "left");

            let message = document.getElementById('msg');


            message.appendChild(container1);
            message.appendChild(container2);

            container1.appendChild(data_req);
            container2.appendChild(data_res);

            document.getElementById('msg_send').value = "";
            function scroll() {
                var scrollMsg = document.getElementById('msg');
                scrollMsg.scrollTop = scrollMsg.scrollHeight;
            }
            scroll();

        }
        else {
            let x= req.toLowerCase();
            var resq ={
            "crop":"wheat,rice,blackgram,millet",
            "wheat":"wheat can produce around 2.5 to 3.5 tons per hectare of land,the profit margin can be range from a few hundred to several thousand dollars.",
            "rice":"On average, a hectare of land can produce around 5 to 8 tons of rice per season.",
            "blackgram":" black gram yield can range from 400 to 800 kg per acre of land and a selling price of Rs. 150 per kg",
             "millet":"millet can produce between 500 to 2000 kg per hectare",
             "pesticides":"Insecticides,Herbicides,Fungicides,Rodenticides,Nematicides.",
             "insecticides":"These are pesticides used to control insects that can damage crops, such as aphids, caterpillars, and beetles.",
             "herbicides":"These are pesticides used to control weeds that compete with crops for nutrients and sunlight.",
             "fungicides":"These are pesticides used to control fungal diseases that can affect crops, such as powdery mildew and rust.",
             "rodenticides":"These are pesticides used to control rodents such as rats and mice that can cause damage to crops.",
             "nematicides":"These are pesticides used to control nematodes, which are tiny worms that can cause damage to crops.",
             "fertilizers":"Nitrogen fertilizers,Phosphorus fertilizers,Potassium fertilizers,Organic fertilizer,Micronutrient fertilizers.",
             "nitrogen fertilizers":"These are fertilizers that contain nitrogen, which is essential for plant growth and development. Examples include ammonium nitrate, urea, and ammonium sulfate.",
             "phosphorus fertilizers":"These are fertilizers that contain phosphorus, which is necessary for root development and flowering. Examples include triple superphosphate, diammonium phosphate, and monoammonium phosphate.",
             "potassium fertilizers":"These are fertilizers that contain potassium, which is important for plant growth and stress tolerance. Examples include potassium chloride, potassium sulfate, and potassium nitrate.",
             "organic fertilizers":"These are fertilizers that are derived from natural sources such as animal manure, compost, and bone meal. They provide a slow release of nutrients to plants and improve soil health.",
             "micronutrient fertilizers":"These are fertilizers that contain micronutrients such as iron, zinc, and manganese, which are essential for plant growth and development. They are used in small quantities and are often added to other fertilizers."
            }
            if(resq[x]===undefined){
                var res="sorry the data is not relevent to agriculture❌";
                
            }
            else{
            var res = resq[x] ;
            }
            let data_req = document.createElement('div');
            let data_res = document.createElement('div');

            let container1 = document.createElement('div');
            let container2 = document.createElement('div');
            container1.setAttribute("class","msgCon1");
            container2.setAttribute("class","msgCon2");
            data_req.innerHTML = req;
            data_res.innerHTML = res;


            data_req.setAttribute("class", "right");
            data_res.setAttribute("class", "left");

            let message = document.getElementById('msg');


            message.appendChild(container1);
            message.appendChild(container2);

            container1.appendChild(data_req);
            container2.appendChild(data_res);

            document.getElementById('msg_send').value = "";

            function scroll() {
                var scrollMsg = document.getElementById('msg');
                scrollMsg.scrollTop = scrollMsg.scrollHeight;
            }
            scroll();

        }
    }

    });