var sum_to_n_a = function(n) {
    // simple for loop
    var sum = 0
    for (let i = 0; i <= n; i ++) {
        sum += i
    }
    return sum
};

var sum_to_n_b = function(n) {
    // using math
    return (n * (n+1)) / 2
};

var sum_to_n_c = function(n) {
    // recursion
    if (n == 1) {
        return n
    }
    return n + sum_to_n_c(n-1)
};

