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
        const map = new Map();
        for (let i=0;i<s.length; i ++) {
            map.set(s[i], (map.get(s[i])|| 0) + 1)
        }

        for(let char of t) {
            if (!map.has(char)) return false;
            map.set(char, map.get(char) - 1);
            if (map.get(char) < 0) return false;
        }
        return true
    }
}

// aaab
// //bbba

// b - 2
// c - 2
