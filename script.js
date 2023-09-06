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
            var data;
            let x= req.toLowerCase();
            fet();
            async function fet(){
                let dataToSend={"key":`${x}`};
                let response = await fetch('http://localhost:5000/getvalues', {
                method: 'POST', // Use the HTTP method you need (e.g., POST)
                headers: {
                  'Content-Type': 'application/json' // Set the appropriate content type
                },
                body: JSON.stringify(dataToSend) // Convert the data to JSON and send it in the body
              });
          
                data= await response.json();
                 console.log(data[0].value);
            if(!data[0].value){
                var res="sorry the data is not relevent to agriculture❌";
            }
            else{
            var res = data[0].value ;
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
    }

    });
