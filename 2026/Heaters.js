function lowerBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let answer = nums.length; // No qualifying element found yet

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] >= target) {
            answer = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return answer;
}

function minHeaterRadius(heaters, houses) {
    let minRadRequired = 0;
    heaters = heaters.sort((a, b) => a - b);

    for (const house of houses) {
        let lb = lowerBound(heaters, house);

        const leftDis =
            lb > 0 ? house - heaters[lb - 1] : Infinity;
        const rightDis =
            lb < heaters.length ? heaters[lb] - house : Infinity;

        let minDis = Math.min(leftDis, rightDis);

        minRadRequired = Math.max(minRadRequired, minDis);
    }

    return minRadRequired;
}


let answer = minHeaterRadius([2, 8], [1, 5, 10])
console.log(answer);