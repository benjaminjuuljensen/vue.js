new Vue({
    el:'#app', //el: element
    data: {
        title: "Vores første Vue.js projekt",
        name: "Benjamin",
        url: 'ttp://www.youtube.com',
        classes: ['red', 'border'],
        isActive: true,
        hasError: true
    },
    methods: {
        hils(){
            return `Hej ${this.name}`
        },
        overskrift(){
            return `Hej ${this.title}`
        },
        changeColor(){
            this.isActive = !this.isActive;
        }
    } 
})