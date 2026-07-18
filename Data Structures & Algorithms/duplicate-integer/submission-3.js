class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const check = new Set(nums);
        return check.size !== nums.length
    }
}
