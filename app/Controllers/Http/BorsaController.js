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
            for (let k=2; k<1000 ; k++){

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
               /*  console.log(item); */
                if(r1.length > 1) {                
                  currencies.push(item);
                }
              
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
             url: "https://borsa.tobb.org.tr/fiyat_borsa.php?borsakod=5ED10",
             method: "GET",

            });
     
            if(resp.status == 200) {
             let $ = cheerio.load(resp.data);


            let currencies = [];
            for (let k=2; k<1000 ; k++){

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
               /*  console.log(item); */
                if(r1.length > 1) {                
                  currencies.push(item);
                }
              
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
            for (let k=1; k<1000 ; k++){

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
                if(r1.length > 1) {                
                  currencies.push(item);
                }
                /* console.log(item); */
              
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

    async UzunkopruTicBorsa () {

      
      try{
         let resp = await axios ({
          url: "https://borsa.tobb.org.tr/fiyat_borsa.php?borsakod=5UZ10",
          method: "GET",

         });
  
         if(resp.status == 200) {
          let $ = cheerio.load(resp.data);

         let currencies = [];
         for (let k=2; k<1000 ; k++){

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
            /*  console.log(item); */
             if(r1.length > 1) {                
               currencies.push(item);
             }
           
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

     async KonyaILGINTicBorsa() {
      try{
         let resp = await axios ({
          url: "https://borsa.tobb.org.tr/fiyat_borsa.php?borsakod=5IL10",
          method: "GET",

         });
  
         if(resp.status == 200) {
          let $ = cheerio.load(resp.data);

//body > div > div > div.ıslem-ozet-tse.ilkdiv > table   //bugday_2 satildi
         let currencies = [];
         for (let k=2; k<1000 ; k++){

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
            /*  console.log(item); */
             if(r1.length > 1) {                
               currencies.push(item);
             }
           
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
