# 算法汇总
## 2021.6.3 leetcode
### 动态规划基础
eg:礼物的最大价值  
```h
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

```js
if (grid.length === 0 || grid[0].length === 0) return 0;
    let rowLimit = grid.length,
        colLimit = grid[0].length;
    
    for (let row = 0; row < rowLimit; row++) {
      for (let col = 0; col < colLimit; col++) {
        let left = col - 1 < 0 ? 0 : grid[row][col - 1],
            top = row - 1 < 0 ? 0 : grid[row - 1][col];

        grid[row][col] += Math.max(left, top);
      }
    }
    
    return grid[rowLimit - 1][colLimit - 1];
```
