const { Schema } = require("./metaschema");


const schema = new Schema('File', {
    size: 'number',
    ratio: (file) => file.size / 10,
});
const obj = { size: 100 };

const obj1 = schema.calc(obj);
console.log(obj1);
