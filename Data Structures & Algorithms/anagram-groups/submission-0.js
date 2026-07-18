class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        // check if Anagram 
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            const sortedString = strs[i].split('').sort().join('');
            console.log(sortedString)
            if (map.has(sortedString)) {
               map.get(sortedString).push(strs[i]);
            }
            else {
                map.set(sortedString, [strs[i]]);
            }
            
        }
        return Array.from(map.values());
    }
}
