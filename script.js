    // array of object for cryptocurrencies
    
const crypto = [
    {id:1, Assets:"Bitcon",  UpdatePrice:602740.4, Changes:-1.46, logo: "./images/BITCOIN.png" },
    {id:2, Assets:"ETHereum",  UpdatePrice:3496, Changes:-0.02,  logo: "./images/ETHEREM.png"},
    {id:3, Assets:"Binance coin",  UpdatePrice:389.29, Changes: +1.16 ,  logo: "./images/BINANCECOIN.png"},
    { id:4, Assets: 'LTC litecoin',  UpdatePrice:199.16, Changes:-0.11,  logo: "./images/LTC.png"}
  ]

  console.log(crypto);

let tableData = ""; 

    // for displaying table data
function loadTableData() {
    crypto.map(data => {
               tableData += `<tr>
                     <td ><img src="${data.logo}" width="18px" />${data.Assets}</td>
                     <td>$${data.UpdatePrice}</td>
                     <td>${data.Changes}</td>
                     <td><button id='Trade-btn'>Trade</button></td>
                </tr>
                `
    })
    document.getElementById("table-body").innerHTML = tableData;
}

function closebtn(id) {
    //   let closebtn = document.getElementById("ad-close");
      console.log(id);
    // document.getElementById("ads-container").style.display = "none";
    // document.getElementById("ads-col-1").style.display = "none";
    // document.getElementById("ads-col-2").style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById("banner-container").style.top = 0;
}
function viewMore() {

    alert("Pending work")
    // document.getElementById(id).alert("Pending work");
}

function playVideo(id) {
console.log(id);
    switch (id) {
        case 'vlbtn' :
            let iframe = `<div>
            <iframe width="420px" height="345px" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                            </iframe>
                            </div>`
                        
                document.getElementsByClassName("Video-left").innerHTML = iframe;
            break;
    
        case 'vmtbtn' :
            
            break;

        case 'vmbbtn' :
            
                break;
         case 'vrbtn' :
            
                    break;
        default:
            console.log("not matched");
            break;
    }

}

loadTableData()
