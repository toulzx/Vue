
// cdnjs 的链接地址：https://cdnjs.com/libraries/bulma


// L9 

Vue.component('laracasts-message',{

    props: ['title', 'body'],

    template: `
    
    <article class="message" v-show = "isVisible">

        <div class="message-header">

            <p>{{ title }}</p>

            <button class="delete" aria-label="delete" @click=" isVisible = false"></button>

        </div>

        <div class="message-body"> {{ body }} </div>

  </article>

    `,

    data() {

        return {

            isVisible: true,

        }

    }

    // CSS 组件：https://bulma.io/documentation/components/message/
    // 删除了 message-body 的示例内容
    // 增加了 button 的 @click 属性
    // 增加了 article 的 v-show 属性

});


// L10 
// 此处所用方法跟视频不太一样，视频中并未利用 CSS 框架自带的类 .is-active 来激活 modal。
// 而这里是结合 L5 的学习内容，对类 .is-active 设置状态从而实现
// 视频主要提到一个关键的 ``$emit`` 选项来实现子组件向父组件传值，因为视频中的值是存储在 Vue 实例中的，我们这里是在组件中存值的，这是必须掌握的
// 因此我设计了："当关闭 modal 时，按钮下方的文字会被修改" 来体现这一特性
// 对比上面 L9 部分，父向子组件传值是通过 props 选项实现的

Vue.component('laracasts-modal',{

    template: `

    <div>

        <button  @click=" isActive = true "> show modal </button>

        <div :class="{'modal' : true, 'is-active' : isActive}">

            <div class="modal-background"></div>

                <div class="modal-content">
                    
                    <div class="box">

                        <p> Hello! </p>

                        <button @click="$emit('change')">hit me!</button>

                    </div>

                </div>

            <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>

        </div>

    </div>
        

    `,    

    data() {

        return {

            isActive: false,

        }
    }
    
    // CSS 组件：https://bulma.io/documentation/components/modal/
    //


});


new Vue({

    el: '#root',

    data: {

        message: 'In order to show you how ``$emit`` works, if you hit the button in the modal(btn1), this message in the button above(btn2) will be change!',

    },

    // 别忘了实例化

});