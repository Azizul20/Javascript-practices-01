const Sort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] > nums[j + 1]) {
                let temp = nums[i];
                nums[i] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

const bigNum = (nums) => {
    nums = Sort(nums);
    return nums[nums.length - 1];
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

console.log('Big number is ', bigNum(numbers));