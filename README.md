# taskrjs
one hundred percent self contained task app.

## How to

- copy the text below and paste into a browser.
```data:text/html,%3C!DOCTYPE%20html%3E%0A%3Chtml%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%3E%0A%20%20%20%20%3Chead%3E%0A%20%20%20%20%20%20%20%20%3Cmeta%20charset%3D%22utf-8%22%3E%0A%20%20%20%20%20%20%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22IE%3Dedge%2Cchrome%3D1%22%3E%0A%20%20%20%20%20%20%20%20%3Cmeta%20name%3D%22description%22%20content%3D%22Demo%20project%22%3E%0A%20%20%20%20%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1%22%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font%3A%2080%25%2F1.45em%20%22Lucida%20Grande%22%2C%20Verdana%2C%20Arial%2C%20Helvetica%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%23headersDiv%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%2030px%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23bbb%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%23tasksDiv%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20400px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%20400px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%2030px%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23bbb%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%23removeDiv%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%2030px%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23bbb%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border-spacing%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20caption%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20thead%20th%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border-bottom%3A%201px%20solid%20black%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20350px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20thead%20th.remove%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20td%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%203px%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20350px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%23removeDiv%20table%20td%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20tr%3Anth-child(even)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23ddffdd%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20tr%3Anth-child(odd)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23eeffee%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20tr%3Anth-child(even)%20input%5Btype%3D%22text%22%5D%2C%20textarea%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%20%3A%20%23ddffdd%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20table%20tr%3Anth-child(odd)%20input%5Btype%3D%22text%22%5D%2C%20textarea%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%20%3A%20%23eeffee%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%20%20%3Ctitle%3Etaskrjs%3C%2Ftitle%3E%0A%20%20%20%20%3C%2Fhead%3E%0A%20%20%20%20%3Cbody%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22headersDiv%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20id%3D%22headers%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccaption%3Etaskr%3C%2Fcaption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cthead%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%20class%3D%22type%22%3EType%3C%2Fth%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%20class%3D%22task%22%3ETask%3C%2Fth%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fthead%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctbody%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftable%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22tasksDiv%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20id%3D%22tasks%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctbody%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftable%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22removeDiv%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20id%3D%22remove%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctbody%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3C%2Ftd%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3C%2Ftd%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3Cbutton%20type%3D%22button%22%20id%3D%22add%22%3E%2B%3C%2Fbutton%3E%3C%2Ftd%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftbody%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftable%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F*!%0A%20%20%20%20%20%20%20%20%20%20%20%20%20*%20taskrjs%0A%20%20%20%20%20%20%20%20%20%20%20%20%20*%20Copyright(c)%202011%20Adam%20York%0A%20%20%20%20%20%20%20%20%20%20%20%20%20*%20MIT%20Licensed%0A%20%20%20%20%20%20%20%20%20%20%20%20%20*%2F%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20'use%20strict'%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20document.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20hash%20%3D%20window.location.hash%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20taskData%20%3D%20hash.slice(1%2C%20hash.length)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20tasks%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(taskData)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20decoded%20%3D%20window.atob(taskData)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tasks%20%3D%20JSON.parse(decoded)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tasks.forEach((task%2C%20i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.index%20%3D%20i%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20addItem(task)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20addButton%20%3D%20document.getElementById('add')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20addButton.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20addItem()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20function%20addItem(existing)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20task%20%3D%20existing%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!task)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task%20%3D%20%7B%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.type%20%3D%20'Task%20Type'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.value%20%3D%20'Task%20Contents'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20table%20%3D%20document.getElementById('tasks')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20tableBody%20%3D%20table.getElementsByTagName('tbody').item(0)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20row%20%3D%20document.createElement('tr')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20type%20%3D%20document.createElement('td')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20typeText%20%3D%20document.createElement('input')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20typeText.setAttribute('type'%2C%20'text')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20typeText.setAttribute('value'%2C%20task.type)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20typeText.addEventListener('input'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.type%20%3D%20e.target.value%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20update()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type.appendChild(typeText)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20value%20%3D%20document.createElement('td')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20valueText%20%3D%20document.createElement('input')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20valueText.setAttribute('type'%2C%20'text')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20valueText.setAttribute('value'%2C%20task.value)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20valueText.addEventListener('input'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.value%20%3D%20e.target.value%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20update()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value.appendChild(valueText)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20remove%20%3D%20document.createElement('button')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20remove.innerHTML%20%3D%20'-'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20remove.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tableBody.removeChild(remove.parentNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tasks.splice(task.index%2C%201)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20update()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20row.appendChild(type)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20row.appendChild(value)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20row.appendChild(remove)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tableBody.appendChild(row)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!existing)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20task.index%20%3D%20tasks.length%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tasks.push(task)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20update()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20function%20update()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20output%20%3D%20JSON.stringify(tasks)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20encoded%20%3D%20window.btoa(output)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.location.hash%20%3D%20encoded%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%3C%2Fscript%3E%0A%20%20%20%20%3C%2Fbody%3E%0A%3C%2Fhtml%3E```
- make edits , add items at will.
- bookmark the page before you exit the browser or close the tab.

## How it works

- the source html file located in this repository is converted into a data uri.
- the source file contains no additional libraries , css, or other downloads.
- the source file contains minimal javascript and basic css
- local storage is not used. so enabling cookies is not necessary