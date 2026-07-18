class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                // if (map.get(target-nums[i]) != i) {
                    res.push(i);
                    res.push(map.get(target-nums[i]))
                    return res;
                // }
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
