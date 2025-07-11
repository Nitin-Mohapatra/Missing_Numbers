class Solution(object):
  def missingNumber(self, nums):
      """
      :type nums: List[int]
      :rtype: int
      """
      act_sum = sum(nums)
      expected_sum = sum(range(len(nums) + 1))
      return expected_sum - act_sum
