class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let val = '';
    strs.forEach((str) => {
        val += `${str}Aswath`;
  });
  return val;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split("Aswath").slice(0,-1)
    }
}
