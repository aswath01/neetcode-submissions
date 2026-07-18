class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    constructor() {
        this.checkMap = new Map();

    }
    compute(index, cost) {
        if (index >= cost.length) return 0;
        
        if (this.checkMap.has(index)) return this.checkMap.get(index);
        const ans = Math.min(cost[index] + this.compute(index + 1, cost), cost[index] + this.compute(index + 2, cost));

        this.checkMap.set(index, ans)
        return ans;
    }
    minCostClimbingStairs(cost) {
        return Math.min(this.compute(0, cost), this.compute(1, cost));
    }
}
