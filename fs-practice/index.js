const { readFile, writeFile, readFileSync, writeFileSync } = require("fs");
const path = require("path");

// ---------- ASYNCHRONOUS OPERATIONS ----------

// Async read
readFile("./fs-practice/notes.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`${data} (Async)`);
  console.log("Async File Read Successfully");
});

// Async write
writeFile(
  "./fs-practice/asyncOutput.txt",
  "Written with fs.writeFile (asynchronous)",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Async File Written Successfully");
  }
);

// Async read (again, for demonstration)
// Async read (again, for demonstration)
readFile("./fs-practice/notes.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Async Content: ${data}`);
  console.log("Async File Read Successfully");
});

// Async append
writeFile(
  "./fs-practice/notes.txt",
  "\nI appended this text using fs.writeFile (asynchronous)",
  { flag: "a" },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Async File Appended Successfully");
  }
);

// Async overwrite
writeFile(
  "./fs-practice/notes.txt",
  "I overwrote this text using fs.writeFile (asynchronous)",
  { flag: "w" },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Async File Overwritten Successfully");
  }
);

// Async write with 'wx' flag (write if not exists)
writeFile(
  "./fs-practice/notes.txt",
  "I overwrote this text using fs.writeFile (asynchronous)",
  { flag: "wx" },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Async Testing File Successfully");
  }
);

// ---------- SYNCHRONOUS OPERATIONS ----------

// Sync read
const content = readFileSync(path.join(__dirname, "notes.txt"), "utf8");
console.log(`${content} (Sync)`);
console.log("Sync File Read Successfully");

// Sync write
writeFileSync(
  path.join(__dirname, "syncOutput.txt"),
  "Written with fs.writeFileSync (synchronous)",
  { flag: "w" }
);
console.log("Sync File Written Successfully");

// Note: readFileSync will block the event loop until the file is read.
// readFileSync blocks the program while readFile executes asynchronously.

// ---------- JOURNAL MINI PROJECT----------
writeFileSync(path.join(__dirname, "journal.txt"), "Journal Created\n", {
  flag: "w",
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to your journal!");

// First prompt
rl.question("Make an entry (type 'exit' to quit): ", function handleEntry(entry) {
  if (entry.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  // Append entry to journal.txt
  writeFileSync(path.join(__dirname, "journal.txt"), entry + "\n", { flag: "a" });

  // Ask again
  rl.question("Make an entry (type 'exit' to quit): ", handleEntry);
});