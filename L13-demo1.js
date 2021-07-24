/* 
 *
 * 兄弟姐妹组件之间的交流
 * 
*/


// 创建 1 个根的 Event 示例, 所有组件都可以通过这个实例来监听事件
window.Event = new Vue();


Vue.component('conpon',{

    template: `

        <input placeholder =" Enter your conpon code~" @blur="onConponApplied"></input>

    `,

    methods: {
        
        onConponApplied() {

            Event.$emit('applied');     
            
            // 修改 `this.` 为 `Event.` 后你会发现 `<h1>` 标签的内容无法触发了

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

    methods: {
        
        onConponApplied() {

            this.conponApplied = true;

        }

        // 由于上面修改 `this.` 为 `Event.` 了，这个方法已经无效了
        
    },

    created() {
        
        Event.$on('applied', () => alert('Handing it!' ));      // `$on` 监听

    },

});


// vue实例 必须在组件定义完成后创建，否则无法识别到