new Vue({
    el: '#app',
    vuetify: new Vuetify(),
      data () {
            return {
              valid: false,
              e1: false,
              //password: '',
              passwordRules: [
                (v) => !!v || 'Password is required',
              ],
              //email: '',
              emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
              ],
              date:{
                email: '',
                password: '',
                }
            }
          },
    methods: {
            submit () {
               
                console.log("hola");
                console.log(this.data);
                fetch("http://127.0.0.1:3000/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                mode: 'cors',
                body: JSON.stringify(this.date)
                //cache: 'default'
                }).then(
                    (response) => {
                        console.log(response);
                        return response.json();
                    }
                ).then(
                    (data) => {
                        console.log(data);
                        this.response = data;
                    }
                ).catch(
                    (error) => {
                        console.log("ERROR!!");
                        console.log(error);
                    }
                )}/*
                if (this.$refs.form.validate()) {
                    this.$refs.form.$el.submit()
                }
                },
                clear () {
                this.$refs.form.reset()
                }*/
            },
  })