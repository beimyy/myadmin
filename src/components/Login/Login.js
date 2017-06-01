module.exports = {
    name: 'login',
    data() {
        return {
            winSize: {
                width: '',
                height: ''
            },

            formOffset: {
                position: 'absolute',
                left: '',
                top: ''
            },

            remumber: false,

            register:false,

            login_actions: {
                disabled: false
            },

            data: {
                username: '',
                password: '',
                // token: ''
            },

            rule_data: {
                
            }
        }
    },
    methods: {
        setSize() {
            this.winSize.width = $(window).width() + "px";
            this.winSize.height = $(window).height() + "px";

            this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
            this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
        },

        onLogin(ref,type) {
            console.log("onLogin");
        },

        onRegister(ref){
			console.log("onRegister");
        },

        resetForm(ref) {
            console.log("resetForm");
        },

        toggleStatus(type){
            console.log("toggleStatus");
        }
    },
    created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    },
    mounted() {
        // this.toggleStatus(true);
        // console.log(this.remumber);

        //如果上次登录选择的是记住密码并登录成功，则会保存状态，用户名以及token
        if (this.remumber.remumber_flag === true) {
            this.data.username = this.remumber.remumber_login_info.username;
            this.data.password = this.remumber.remumber_login_info.token.substring(0, 16);
            this.$set(this.data, 'token', this.remumber.remumber_login_info.token);
        }
    }
}