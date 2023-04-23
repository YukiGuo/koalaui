---
order: 20
subtitle: 对话框
title: Modal
demo:
  cols: 2
---

## API

| 参数         | 说明                                                       | 类型        | 默认值         |
| ------------ | ---------------------------------------------------------- | ----------- | -------------- | --- |
| footer       | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode   | (确定取消按钮) |
| maskClosable | 点击蒙层是否允许关闭                                       | boolean     | true           |     |
| okText       | 确认按钮文字                                               | ReactNode   | `确定`         |     |
| cancelText   | 取消按钮文字                                               | ReactNode   | `取消`         |     |
| title        | 标题                                                       | ReactNode   | -              |     |
| visible      | 对话框是否可见                                             | boolean     | -              |     |
| onCancel     | 点击遮罩层或右上角叉或取消按钮的回调                       | function(e) | -              |     |
| onOk         | 点击确定回调                                               | function(e) | -              |     |

## 代码演示

<!-- prettier-ignore -->
<code src="../../demo/dialog/basic"></code>
<code src="../../demo/dialog/customfooter"></code>
<code src="../../demo/dialog/confirm"></code>
<code src="../../demo/dialog/alert"></code>
<code src="../../demo/dialog/text"></code>
<code src="../../demo/dialog/mask"></code>
