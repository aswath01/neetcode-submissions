class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (!nums.length) return false;

        if (new Set(nums).size === nums.length) return false;

        return true;
    }
}
