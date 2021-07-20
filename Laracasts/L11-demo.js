Vue.component('tabs',{
    
    template: `

        <div>
        
            <div class="tabs">

                <ul>

                    <li :class="{'is-active': tab.isActive}" v-for="tab in tabs">
                        
                        <a :href="tab.regulateHref" @click="changeSelection(tab)">{{ tab.name }}</a>
                        
                    </li>

                </ul> 

            </div>

            <div class="tabs-details">

                <slot></slot>

            </div>

        </div>
    

    `,

    // 修改为 v-for 数组

    data() {

        return {

            tabs: [],

        }

    },


    methods: {
        
        changeSelection(tab) {

            this.tabs.forEach(eachTab => {

                // eachTab.selected = (eachTab.name == tab.name);    // 注意：不要通过修改 props 的方式去修改组件的状态，因为一旦刷新 props 会初始化。
                eachTab.isActive = (eachTab.name == tab.name);

            });

        }

    },

    created() {

        // 获取子组件

        this.tabs = this.$children;     // 注意，tabs 的获取也需要 this.

    },

    mounted() {

        // 查看控制台

        console.log(this.$children); // Vue3.0 中已经移除对 $children 的支持，改为统一使用 $ref
        
        //console.log(this.$refs);     // 尝试了一下，好像不能复现出和 $children 一样的效果，待解决！！！！！

        this.$children.forEach(tab => console.log(tab.name));   // 需添加 props 后才会获取到外部（父组件）的值

    },

});

Vue.component('tab',{

    props: {

        name: { required: true },    // 定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。

        selected: { default: false },    // 如果该 prop 没有被传入，则使用这个值。对象或数组的默认值必须从一个工厂函数返回
        
    },

    template: `

        <div v-show="isActive"><slot></slot></div>
    
    `,

    data() {

        return {

            isActive: false,

        }

    },

    computed: {

        regulateHref() {

            return '#' + this.name.toLowerCase().replace(/ /g, '-');

        }
    },

    mounted() {

        // 初始化

        this.isActive = this.selected;

    }

})



new Vue({
    
    el: "#root",

})