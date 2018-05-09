### IconText

**_Props_**

| name       | type   | required | default | description                                                                    |
| ---------- | ------ | -------- | ------- | ------------------------------------------------------------------------------ |
| icon       | String | false    |         | icon 字体类名，也可以直接通过 slot 嵌入 icon 字体，此时该值无效                |
| image      | String | false    |         | 图片的 src，使用图片时 icon 不显示，也可以直接通过 slot 嵌入图片，此时该值无效 |
| text       | String | false    |         | 文案                                                                           |
| icon-size  | String | false    | 24px    | icon 字体大小                                                                  |
| image-size | String | false    | 24px    | 图片的宽高，宽高相等                                                           |
| text-size  | String | false    | 14px    | 文案字体大小                                                                   |
| icon-color | String | false    |         | icon 字体颜色                                                                  |
| text-color | String | false    |         | 文案字体颜色                                                                   |
| position   | String | false    | left    | icon 或图片相对文案的定位，left/right/top/bottom，无文案时无效果               |
| spacing    | String | false    |         | icon 或图片与文案之间的间距，无文案时无效果                                    |

**_Slots_**

| name    | description     |
| ------- | --------------- |
| default | icon 字体或图片 |

**_注意：图片 src 值(属性 image)设置为本地图片资源时，需要先将图片资源在当前组件中引入再赋值，否则将无法正常显示_**
