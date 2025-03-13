const { readFile , writeFile } = require('fs');
const FileSystem = require('fs');

console.log('starting');
readFile('./content/first.txt','utf-8', (error,result) => {
    if(error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(error,result) => {
        if(error){
            console.log(error)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 'Hello this is from async',{  flag: 'a' } , (error,result)=>{
            if(error){
                console.log(error);
                return;
            }
            console.log('done');
        });
    })
});
console.log('Starting next');