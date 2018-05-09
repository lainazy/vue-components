### Alert

**_Props_**

| name         | type    | required | default     | description    |
| ------------ | ------- | -------- | ----------- | -------------- |
| title        | String  | false    |             | alert 标题     |
| content      | String  | true     |             | alert 内容     |
| no-mask      | Boolean | false    | false       | 是否去除遮罩层 |
| button-color | String  | false    | transparent | 按钮颜色       |
| button-text  | String  | false    | 确定        | 按钮文案       |

**_Events_**

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

### Confirm

**_Props_**

| name          | type    | required | default     | description    |
| ------------- | ------- | -------- | ----------- | -------------- |
| title         | String  | false    |             | confirm 标题   |
| content       | String  | true     |             | confirm 内容   |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层 |
| cancel-color  | String  | false    | transparent | 取消按钮颜色   |
| cancel-text   | String  | false    | 取消        | 取消按钮文案   |
| confirm-color | String  | false    | transparent | 确定按钮颜色   |
| confirm-text  | String  | false    | 确定        | 确定按钮文案   |

**_Events_**

| name       | params | description        |
| ---------- | ------ | ------------------ |
| on-show    |        | 显示时触发         |
| on-hide    |        | 隐藏时触发         |
| on-cancel  |        | 点击取消按钮时触发 |
| on-confirm |        | 点击确认按钮时触发 |

---

### Prompt

**_Props_**

| name          | type    | required | default     | description    |
| ------------- | ------- | -------- | ----------- | -------------- |
| title         | String  | false    |             | prompt 标题    |
| content       | String  | false    |             | prompt 内容    |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层 |
| placeholder   | String  | false    |             | prompt 备注    |
| cancel-color  | String  | false    | transparent | 取消按钮颜色   |
| cancel-text   | String  | false    | 取消        | 取消按钮文案   |
| confirm-color | String  | false    | transparent | 确定按钮颜色   |
| confirm-text  | String  | false    | 确定        | 确定按钮文案   |

**_Events_**

| name       | params  | description        |
| ---------- | ------- | ------------------ |
| on-show    |         | 显示时触发         |
| on-hide    |         | 隐藏时触发         |
| on-cancel  |         | 点击取消按钮时触发 |
| on-confirm | (value) | 点击确认按钮时触发 |

---

### Loading

**_Props_**

| name    | type    | required | default | description                                                                 |
| ------- | ------- | -------- | ------- | --------------------------------------------------------------------------- |
| use-svg | Boolean | false    | false   | 是否使用 svg loading，默认使用 css loading                                  |
| type    | String  | false    | blink   | loading 类型，只有使用 css loading 时有效，默认只有 blink 可选 ，可自行扩展 |

**_Events_**

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

### Notify

**_Props_**

| name     | type   | required | default | description                     |
| -------- | ------ | -------- | ------- | ------------------------------- |
| content  | String | true     |         | notify 文字内容                 |
| position | String | false    | top     | notify 位置，有 top/bottom 可选 |
| time     | Number | false    | 5000    | 持续时间                        |

**_Events_**

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

### Toast

**_Props_**

| name     | type   | required | default | description                                   |
| -------- | ------ | -------- | ------- | --------------------------------------------- |
| content  | String | false    |         | toast 文字内容                                |
| position | String | false    | middle  | toast 位置，有 top/middle/bottom 可选         |
| type     | String | false    | text    | toast 类型，有 success/error/cancel/text 可选 |
| time     | Number | false    | 2000    | 持续时间                                      |

**_Events_**

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |
