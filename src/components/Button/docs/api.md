### Button

**_Props_**

| name           | type           | required | default | description                                                    |
| -------------- | -------------- | -------- | ------- | -------------------------------------------------------------- |
| color          | String         | false    |         | 字体颜色，当没指定 ripple-color 时，ripple-color 为此 color 值 |
| bg-color       | String         | false    |         | 背景颜色                                                       |
| ripple-color   | String         | false    |         | 点击时波纹效果的颜色                                           |
| ripple-opacity | String, Number | false    | 0.1     | 点击时波纹效果的透明度                                         |
| shadow         | Boolean        | false    | false   | 是否显示 box-shadow                                            |
| disabled       | Boolean        | false    | false   | 是否禁用                                                       |

**_注意：按钮背景色较深时，应适当增加波纹效果透明度，否则波纹效果不明显，透明度参考值：背景白色：0.1，背景黑色：0.5_**
