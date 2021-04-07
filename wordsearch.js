const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let col = 0; col < letters.length; col++) {
    let verticalString = '';
    for (let row = 0; row <= letters[col].length; row++) {
      verticalString += letters[row][col];
    }
    if (verticalString === word) {
      return true;
    }
  }
  return false;
};
  
module.exports = wordSearch;