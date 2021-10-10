const vm = new Vue({
    el: '#app',
    data: {
        isActive: '1'
    },
    methods: {
        tabChange: function(num){
        this.isActive = num
        }
    }
})

