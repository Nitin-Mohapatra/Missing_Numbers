# ❓ Missing Number (Python)

This repository contains a Python solution to the classic **Missing Number** problem using the **sum formula approach**.

---

## 📘 Problem Statement

You are given an array `nums` containing `n` distinct numbers in the range `[0, n]`.  
Your task is to return the **only number missing** from the range.

---

## 🧠 Approach: Sum Formula Method

- The expected sum of numbers from `0` to `n` is: sum(range(n+1))
- The actual sum is the sum of elements in the given array.
- The **missing number** is the difference between the expected sum and the actual sum.

---

## 🧾 Python Code

```python
class Solution(object):
  def missingNumber(self, nums):
      """
      :type nums: List[int]
      :rtype: int
      """
      act_sum = sum(nums)
      expected_sum = sum(range(len(nums) + 1))
      return expected_sum - act_sum

# Example usage
s = Solution()
print(s.missingNumber([3, 0, 1]))  # Output: 2
