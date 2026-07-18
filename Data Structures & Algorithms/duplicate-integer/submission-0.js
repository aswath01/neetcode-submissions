class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        try{
            const checkSet = new Set(nums);
            if (checkSet.size !== nums.length) {
                return true
            }
            return false
        }catch(error){
            console.log();
        }
    }
}
