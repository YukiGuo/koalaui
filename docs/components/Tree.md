---
order: 30
subtitle: 树状
title: Tree
demo:
  cols: 2
---

## API

| 参数       | 说明                                       | 类型            | 默认值 |
| ---------- | ------------------------------------------ | --------------- | ------ | --- |
| treeData   | 数据源                                     | 数组            |
| value      | 选中值                                     | string/string[] |        |
| multiple   | 多选                                       | boolean         | false  |     |
| checkable  | 可选状态                                   | boolean         | false  |     |
| autoSelect | 选中节点时自动判断子节点和父节点的选中状态 | boolean         | false  |     |
| onChange   | 选中值变更时                               | (value)=>{}     |        |     |
| loadData   | 加载数据                                   | (item)=>{}      |        |     |

### TreeItem 参数

| 参数   | 说明                                       | 类型    | 默认值 |
| ------ | ------------------------------------------ | ------- | ------ |
| isLeaf | 是否是叶子节点（仅在传入 loadData 时生效） | boolean | false  |

## 代码演示

<!-- prettier-ignore -->
<code src="../../demo/tree/basic"></code>
<code src="../../demo/tree/multipleTree"></code>
<code src="../../demo/tree/autoSelect"></code>
<code src="../../demo/tree/loadData"></code>
