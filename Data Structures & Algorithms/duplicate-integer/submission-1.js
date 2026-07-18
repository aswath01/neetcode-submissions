class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checkSet = new Set(nums);
        return checkSet.size === nums.length ? false : true;
    }
}
