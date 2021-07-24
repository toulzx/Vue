/*
 *
 * 本节关注自定义组件中多个 `<slot></slot>` 的处理方法： 利用 `name=""` 命名以区分
 * 类似的内容 在 L7&8 、 L11 中有提及
 * 本篇新增： `<template>` 标签避免额外的标签嵌套
 * 以及 `<slot></slot>` 中定义默认内容（但不建议）
 * 
*/

Vue.component('modal',{

    template: `
    
    <div class="modal is-active">


        <div class="modal-background"></div>


        <div class="modal-card">

            
            <header class="modal-card-head">

                <p class="modal-card-title">
                
                    <slot name="header"> hello </slot>

                </p>

                <button class="delete" aria-label="close"></button>

            </header>


            <section class="modal-card-body">

                <slot> Default content here </slot>

            </section>


            <footer class="modal-card-foot">
                
                <slot name="footer">
                
                    <button class="button is-success">default button is-success</button>

                    <button class="button">default button Cancel</button>
                
                </slot>


            </footer>


        </div>


    </div>

    `,

});


new Vue({

    el: "#root",

});