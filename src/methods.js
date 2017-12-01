const builtFun  = () => {


/**
 * Built in methods in ES6
 */

  // 1. String.repeat()

  let str = "Sunita Shivansh".repeat(3) + '';
  console.log("repeated str=>" ,str);  // repeated str=> Sunita ShivanshSunita ShivanshSunita Shivansh
  console.log("repeated str=>" ,str + ''.repeat(2) +'Somnath Sumbe');  // rrepeated str=> Sunita ShivanshSunita ShivanshSunita ShivanshSomnath Sumbe

  // 2- method using literal syntax

   let newstr = `Shivansh Sunita ${'Somnath'.repeat(2) + 'Sumbe'}`;
   console.log("newstr" , newstr);  // newstr Shivansh Sunita SomnathSomnathSumbe

  // .endsWith & .startsWith

  console.log(newstr.endsWith('Sumbe'));  // true
  console.log(newstr.endsWith('Somnath '));  // false
  console.log(newstr.startsWith('Shivansh'));  // true
  console.log(newstr.startsWith('Somnath '));  // false

  // .includes
  console.log(newstr.includes('van'));  // true
  console.log(newstr.includes('Somnath'));  // true
  console.log(newstr.includes('ar'));  // false

  // checking numbers
 //1. .isFinite()
}
export default  builtFun;