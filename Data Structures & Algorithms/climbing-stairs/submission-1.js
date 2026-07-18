class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    constructor () {
        this.checkMap = new Map();

    }
    climbStairs(n) {
        // termination condition

        if (n < 0) return 0;
        if (n == 0 ) return 1;

        if (this.checkMap.has(n)) return this.checkMap.get(n);


        // oss
        const ans = this.climbStairs(n-1) + this.climbStairs(n-2);

        this.checkMap.set(n, ans);
        return ans;
    }
}
