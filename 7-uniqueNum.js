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

const uniqueNum = (nums) => {
    nums = Sort(nums);
    let unique = [];
    unique.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (unique[unique.length - 1] != nums[i]) {
            unique.push(nums[i]);
        }
    }
    return unique;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

console.log(uniqueNum(numbers));