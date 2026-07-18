class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // termination condition

        if (n < 0) return 0;
        if (n == 0 ) return 1;

        // oss
        const ans = this.climbStairs(n-1) + this.climbStairs(n-2);
        return ans;
    }
}
