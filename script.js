    // array of object for cryptocurrencies
    
const crypto = [
    {id:1, Assets:"Bitcon",  UpdatePrice:602740.4, Changes:-1.46, logo: "./images/BITCOIN.png" },
    {id:2, Assets:"ETHereum",  UpdatePrice:3496, Changes:-0.02,  logo: "./images/BITCOIN.png"},
    {id:3, Assets:"Binance coin",  UpdatePrice:389.29, Changes: +1.16 ,  logo: "./images/BITCOIN.png"},
    { id:4, Assets: 'LTC litecoin',  UpdatePrice:199.16, Changes:-0.11,  logo: "./images/BITCOIN.png"}
  ]

  console.log(crypto);

let tableData = ""; 

    // for displaying table data
function loadTableData() {
    crypto.map(data => {
               tableData += `<tr>
                     <td><img src="${data.logo}" width="30px" />${data.Assets}</td>
                     <td>${data.UpdatePrice}</td>
                     <td>${data.Changes}</td>
                     <td><button id='Trade-btn'>Trade</button></td>
                </tr>`
    })
    document.getElementById("table-body").innerHTML = tableData;
}

function closebtn() {
    //   let closebtn = document.getElementById("ad-close");
    //   console.log(closebtn);
    document.getElementById("ads-container").style.display = "none";
}

loadTableData()
