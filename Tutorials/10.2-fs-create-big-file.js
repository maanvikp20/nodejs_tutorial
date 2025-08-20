const {writeFileSync} = require('fs');

// Every bit of data is written to the end of the file

for (let i = 0; i < 200000; i++){
  writeFileSync('./Tutorials/content/big.txt', `Hello Idiot ${i}\n`, {flag: 'a'});
}

// Every bit of data overwrites the last bit of the data

