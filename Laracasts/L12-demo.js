/* 
 *
 * 把握组件交流的一个demo
 * 这节讲的是父子元素之间的交流，可以和 L9&10 这一节结合起来学习
 * 其它元素之间的交流见 L13
 * 
*/


Vue.component('conpon',{

    template: `

        <input placeholder =" Enter your conpon code~" @blur="onConponApplied"></input>

    `,

    methods: {
        
        onConponApplied() {

            alert("fuck!")

            this.$emit('applied');

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
        
    },

});


// vue实例 必须在组件定义完成后创建，否则无法识别到