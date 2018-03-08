console.log(1);

let vm = new Vue({
    el: '#app',
    data: {
        name: '',
        openId: '',
        age: ''
    },
    computed: {},
    created: function () {

    },
    mounted: function () {

    },
    methods: {
        submit: function () {
            axios.get('http://127.0.0.1:7001/user/register_async', {
                params:{
                    name: this.name,
                    openId: this.openId,
                    age: this.age
                }
            }).then(response=>{
                console.log(response.data)
            }).catch(error=>{
                console.log(error);
            })
        }
    }
});