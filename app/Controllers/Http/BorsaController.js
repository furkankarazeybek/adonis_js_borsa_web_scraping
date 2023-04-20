'use strict'
const axios = require('axios');
const fs = require('fs');
const cheerio = require("cheerio");
const { stringify } = require("querystring");

class BorsaController {

 

    async BanTicBorsa () {
        
        try{
            let resp = await axios ({
             url: "https://borsa.tobb.org.tr/fiyat_borsa.php?borsakod=5BA20",
             method: "GET",

            });
     
            if(resp.status == 200) {
             let $ = cheerio.load(resp.data);


            let currencies = [];
            for (let k=2; k<13 ; k++){

               let r1 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(1) > a > font`).text();

              
                    
               let r2 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(2) > font`).text();


               let r3 = $($(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(3) > font`)).text();
               
               let r4 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(4) > font`).text();

               let r5 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(5) > font`).text();

               let r6 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(6) > font`).text();

               let r7 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(7) > font`).text();

               let r8 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(8) > font`).text();

               let r9 = $(`body > center > table > tbody > tr:nth-child(2) > td > center > center> table > tbody > tr:nth-child(${k}) >  td:nth-child(9) > font`).text();

           

                let item = {
                   urun_adi : r1,
                   birim : r2,
                   son_islem_tarihi : r3,
                   en_az: r4,
                   en_cok: r5,
                   ortalama: r6,
                   islem_miktari: r7,
                   islem_adedi: r8,
                   islem_tutari: r9,  

                 
              
                }; 
                console.log(item);
                currencies.push(item);
              
            }

             
    
             return (currencies); 
            /* fs.writeFileSync("resp.json",JSON.stringify(currencies,null,4),"UTF-8"); */
     
            }
            else {
             console.warn("RESP DOESNT SUCCESFUL",resp.status, resp.statusText);
            }
         }
         catch{
          return "error";
         }

    }

    async EdirneTicBorsa () {
        try{
            let resp = await axios ({
             url: "https://www.online.etb.org.tr/son-islemler.html",
             method: "GET",

            });
     
            if(resp.status == 200) {
             let $ = cheerio.load(resp.data);


            let currencies = [];
            for (let k=1; k<65 ; k++){

               let r1 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.product_name`).text();

               let r2 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_datetime`).text();

               let r3 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_volume`).text();

               let r4 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_piece`).text();

               let r5 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_quantity`).text();

               let r6 =  $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_average`).text();

               let r7 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_highest`).text();

               let r8 = $(`body > div.main_category_today > a:nth-child(${k}) > div > div.list_lowest`).text();


              
                    
              

           

                let item = {
                   urun_adi : r1,
                   tarih : r2,
                   islem_hacmi: r3,
                   islem_adedi: r4,
                   islem_miktari: r5,
                   ortalama : r6,
                   en_yuksek: r7,
                   en_dusuk : r8


                   

                   

                 
              
                }; 
                console.log(item);
                currencies.push(item);
              
            }

             
    
             return (currencies); 
            /* fs.writeFileSync("resp.json",JSON.stringify(currencies,null,4),"UTF-8"); */
     
            }
            else {
             console.warn("RESP DOESNT SUCCESFUL",resp.status, resp.statusText);
            }
         }
         catch{
          return "error";
         }

    }

    async PolatliTicBorsa () {
        try{
            let resp = await axios ({
             url: "https://www.polatliborsa.org.tr/satis-salonu-bulteni/",
             method: "GET",

            });
     
            if(resp.status == 200) {
             let $ = cheerio.load(resp.data);


            let currencies = [];
            for (let k=1; k<9 ; k++){

               let r1 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(1) > b`).text();

               let r2 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(2)`).text();

               let r3 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(3)`).text();

               let r4 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(4)`).text();

               let r5 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(5)`).text();

               let r6 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(6)`).text();

               let r7 = $(`.table_green > tbody > tr:nth-child(${k}) > td:nth-child(7)`).text();

             



                let item = {
                   urun_adi : r1,
                   min_fiyat : r2,
                   max_fiyat : r3,
                   ortalama_fiyat : r4,
                   miktar : r5,
                   islem_tutari : r6,
                   islem_adedi: r7,
                 
 

                   

                   

                 
              
                }; 
                console.log(item);
                currencies.push(item);
              
            }

             
    
             return (currencies); 
            /* fs.writeFileSync("resp.json",JSON.stringify(currencies,null,4),"UTF-8"); */
     
            }
            else {
             console.warn("RESP DOESNT SUCCESFUL",resp.status, resp.statusText);
            }
         }
         catch{
          return "error";
         }

    }
}

module.exports = BorsaController;
