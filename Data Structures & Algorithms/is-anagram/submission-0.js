class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const len = s.length;
        const sMap = new Map();
        const tMap = new Map();
        for (let i = 0; i<len; i ++ ){
            if (sMap.has(s[i])) {
                sMap.set(s[i], parseInt(sMap.get(s[i])) + 1);
            }
            else {
                sMap.set(s[i], 1);
            }
            if (tMap.has(t[i])) {
                tMap.set(t[i], parseInt(tMap.get(t[i])) + 1);
            }
            else {
                tMap.set(t[i], 1);
            }
        }
        for (const [key, value] of sMap.entries()) {
            if(tMap.get(key) != value) {
                return false
            }
        }
        return true
     }
}
