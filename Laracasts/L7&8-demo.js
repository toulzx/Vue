Vue.component('laracasts-task', {

    template: '<li><slot></slot></li>',
    
    // ```<slot>``` 槽保证使用者可以自定义组件内容，你可以把上面替换成这个语句对比一下：```template: '<li>Fool</li>',```

});


Vue.component('laracasts-task-list', {

    template: `
        
        <div>
        
            <laracasts-task v-for="task in tasks">{{ task.description }}</laracasts-task>
        
        </div>
    `,

    // 采用 es6 标准的格式，注意不是单引号'而是反引号`
    // template 不能是 “多个”标签，如上，出现了``v-for``语句，这是添加``<div>``的意义所在，若去掉则不能正常显示

    
    data() {

        return {

            tasks: [

                { description: 'Go to the store', completed: true },

                { description: 'Go to the email', completed: false },

                { description: 'Go to the farm', completed: true },

                { description: 'Go to work', completed: false },
            ]

        }
    }

    // 注意：data 在 ``Vue.component``中的写法，与以往 Vue 实例中的样式进行对比（这里并不是实例，因此要写成函数返回值的形式）
    // 哪个 component 使用了数据，就在哪个 component 添加 data() 和数据。

});


new Vue({

    el: '#root'

    // 这才是 Vue 实例

});