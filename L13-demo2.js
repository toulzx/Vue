// 将其修改为 class 类
// 这里使用的依然是 es6 的方式
 
window.Event = new class {

    constructor() {

        // 用于创建和初始化 class 创建的对象的特殊方法

        this.vue = new Vue();
    
    }

    fire(event, data = null) {

        this.vue.$emit(event, data);

    }

    listen(event, callback) {

        this.vue.$on(event, callback);

    }

}


Vue.component('conpon',{

    template: `

        <input placeholder =" Enter your conpon code~" @blur="onConponApplied"></input>

    `,

    methods: {
        
        onConponApplied() {

            Event.fire('applied');      // 修改 `$emit` 为 `fire`

        }

    },

})



new Vue({

    el: "#root",

    data() {

        return {
            
            conponApplied: false,

        }

    },



    created() {
        
        Event.on('applied', () => alert('Handing it!' ));       // 修改 `$on` 为 `fire`

    },

});

