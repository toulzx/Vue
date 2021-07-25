Vue.component('progress-view', {

    // 对不会复用的临时组件的标签使用 `inline-template` 属性，可以保证 html 页面的可读性

    data() {
        return {
            
            completionRate: 0,

        }
    },


});

new Vue({

    el: "#root",
    
});