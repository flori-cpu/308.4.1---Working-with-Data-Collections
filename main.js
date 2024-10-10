// Part 1 
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
const rows = csvString.split('\n');
const columnCount = rows[0].split(',').length;
let csvArray = [];
for (let row of rows) {
    csvArray.push(row.split(','));
}
console.log(csvArray);

// Part 2
const headings = rows[0].split(',');
let objectsArray = [];
for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(',');
    let rowObject = {};
    for (let j = 0; j < headings.length; j++) {
        rowObject[headings[j].toLowerCase()] = rowData[j];
    }
    objectsArray.push(rowObject);
}
console.log(objectsArray);

// Part 3
objectsArray.pop();
console.log(objectsArray);

objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(objectsArray);

objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectsArray);

let totalAge = 0;
for (let person of objectsArray) {
    totalAge += parseInt(person.age);
}
let averageAge = totalAge / objectsArray.length;
console.log("Average Age:", averageAge);

// Part 4
let csvOutput = 'ID,Name,Occupation,Age\n';
for (let person of objectsArray) {
    csvOutput += `${person.id},${person.name},${person.occupation},${person.age}\n`;
}
console.log(csvOutput);

