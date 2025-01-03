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
}

let numbers = [9, 10, 6, 7, 8, 11, 12, 1, 2, 3, 4, 5, 13, 14, 15, 16, 17, 18, 19, 20];
Sort(numbers);
console.log(numbers);