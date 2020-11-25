const max = (nums) => {
  if (nums.length == 1) return nums
  const [head, ...tail] = nums
  return head > max(tail) ? head : max(tail)
}