// MERGING 2 RESPONSES
// let arr3 = [];

// arr1.forEach((itm, i) => {
// arr3.push(Object.assign({}, itm, arr2[i]));
// });

// or

// const a1 = [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }];
// const a2 = [{ id: 1, count: '1' }, { id: 2, count: '2' }];

// const mergeArray = (source, merge, by) => source.map(item => ({
//   ...item,
//   ...(merge.find(i => i[by] === item[by]) || {}),
// }));

// console.log(mergeArray(a1, a2, 'id'));
// > ​​​​​[{ id: 1, name: 'test', count: '1' }, { id: 2, name: 'test2', count: '2' }]

// ROUND 
// function prettifyNumber(value) {
//     var thousand = 1000;
//     var million = 1000000;
//     var billion = 1000000000;
//     var trillion = 1000000000000;
//     if (value < thousand) {
//         return String(value);   
//     }
    
//     if (value >= thousand && value <= 1000000) {
//          return  Math.round(value/thousand) + 'k';   
//     }
    
//     if (value >= million && value <= billion) {
//         return Math.round(value/million) + 'M';   
//     }
    
//     if (value >= billion && value <= trillion) {
//         return Math.round(value/billion) + 'B';   
//     }
    
//     else {
//         return Math.round(value/trillion) + 'T';   
//     }
// }