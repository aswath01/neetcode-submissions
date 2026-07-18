class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    constructor () {
        this.checkMap1 = new Map();

        this.checkMap2 = new Map();
    }
    maxLoot(index, nums, endIndex, checkMap) {
        if (index >= nums.length) return 0;

        if (index > endIndex) return 0;

        if (checkMap.has(index)) return checkMap.get(index);

        const inclueIndex = nums[index] + this.maxLoot(index + 2, nums, endIndex, checkMap);

        const excludeIndex = this.maxLoot(index + 1, nums, endIndex, checkMap);

        const ans = Math.max(inclueIndex, excludeIndex);

        checkMap.set(index, ans);

        return ans;
    }
    rob(nums) {

        if (nums.length == 1) return nums[0];
        this.checkMap1.clear()
        this.checkMap2.clear()
        return Math.max(this.maxLoot(0, nums, nums.length-2, this.checkMap1), this.maxLoot(1, nums, nums.length-1,this.checkMap2 ));
    }
}
