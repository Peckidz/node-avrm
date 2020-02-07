const fs = require('fs');
fs.readFile('lorem.txt', 'utf8', (err, data) => {
        if(err){
            console.log('could not read the file');
            return;
        }   
        const nOs = () => {
            let str = data;
            let str1 = str.split(".");
            let sentences = str1.length;
                console.log ('The text has ' + sentences + ' senteces');
        }

        const nOw = () => {
            let str = data;
            let str1 = str.split(" ");
            let words = str1.length;
                 console.log ('The text has ' + words + ' words');
        }
        const nOc = () => {
            let str = data;
            let str1 = str.split("");
            let characters = str1.length;
                console.log ('The text has ' + characters + ' characters');
        }
        const lT7 = () => {
            let count=0;
            let str = data;
            let str1 = str.split(" ");
                for(let i=0; i<str1.length; i++){
                    if(str1[i].length<7){
                        count++;
                    }
                }
        
                console.log ('The text has ' + count + ' words with less than 7 characters');
        }
        const mT7 = () => {
            let count=0;
            let str = data;
            let str1 = str.split(" ");
                for(let i=0; i<str1.length; i++){
                    if(str1[i].length>7){
                        count++;
                    }
                }
        
                console.log ('The text has ' + count + ' words with more than 7 characters');
        }   
        const j7c = () => {
            let count=0;
            let str = data;
            let str1 = str.split(" ");
                for(let i=0; i<str1.length; i++){
                    if(str1[i].length==7){
                        count++;
                    }
                }
        
                console.log ('The text has ' + count + ' words with 7 characters');
        }

    
nOs();
nOw();
nOc();
lT7();
mT7();
j7c();
})
