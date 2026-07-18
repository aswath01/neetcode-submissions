class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const map = new Map();
      for (let i=0; i< nums.length; i++) {
        map.set(nums[i], (map.get(nums[i])|| 0) + 1);
      }
    //   return Array.from(map.keys()).sort((a,b)=> b - a).slice(0, k)
     return Array.from(map.entries())  // [num, freq]
            .sort((a, b) => b[1] - a[1])  // sort by freq desc
            .slice(0, k)                  // take top k
            .map(([num]) => num); 
    }
}
