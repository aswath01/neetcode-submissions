class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    constructor () {
        this.checkMap = new Map();
    }
    maxLoot(index, nums) {
        // termaintion condition 

        if (index >= nums.length) return 0;

        if (this.checkMap.has(index)) return this.checkMap.get(index);

        const checkWithCurrentIndex = nums[index] + this.maxLoot(index + 2, nums);

        const excludeIndex = this.maxLoot(index + 1, nums);

        const ans = Math.max(checkWithCurrentIndex, excludeIndex);

        this.checkMap.set(index, ans);
        
        return ans;
    }
    rob(nums) {
        return this.maxLoot(0, nums)
    }
}
