const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

console.log('Winter Is Here')
/*
Synchronous(fs.readFileSync and fs.writeFileSync)..etc)
Is considering a blocking event.
Blocks the event loop until the operation finishes
NO other code runs during that time
Simple to write but can freeze the server if the file is large or disk is low

Performance: slow when handling many requests because each operation halts all code execution
Uses: Best of one of programs like utilities or back-ups or large database changes
*/

const first = readFileSync(path.join(__dirname, '/content/first.txt'), "utf8");
const second = readFileSync(path.join(__dirname, '/content/second.txt'), "utf8");
const third = readFileSync(path.join(__dirname, '/content/third.txt'), "utf8");
console.log(third);
/* 
Charset options:
ascii
base64
base64url (Node v14+)
hex
usc2/usc-2/utf16le/utf-16le
utf8/utf-8
binary/latin1 (ISO859-1, latin1 only in node)
*/

writeFileSync(path.join(__dirname, "/content/beyblade.txt"), `Here is the result: ${first}, ${second}, ${third}`, {flag: 'a'});

/* Flags:

w(default): Opens the file for writing. If the file does not exist it is created. If the file exists, its contents are overwritten before new data is written

wx: Simular to 'w' but if failes to error is the path exists. This ensures that a new file is created without overwriting the exisitng one

a: Opens the file for appending. If the files does not exist it is created. If the file exists the new data is appended to the end of the exisitng content

ax: Similar to a but is fails if the path exists. This ensures that data is only appended to a files if it is newly created

w+: opens the file for reading and writing. If the file does not exist it is created. If the file exists its contexts are overwritten

a+: Opens a file for reading and appending: if the files doesn not exist it is created. If the file exists the new data is appended to the end of its existing content

rs+: Opens the file for reading and writing synchronously. This flag should be usd with caution as it can block nodejs event loop
*/

