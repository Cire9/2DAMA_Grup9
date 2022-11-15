
/*var app = new Vue ({
    el:"#app",
    data:{
        usuari: '',
        password: ''
    },
    methods:{
        getCaca: function(){
            console.log("hola");
        },
        getData: function(){
            console.log("Get Data Binded");
            const myHeaders = new Headers();
            this.data.usuari = document.getElementsByName('user').value;
            console.log(data);
            this.data.password = document.getElementsByName('passw').value;
            fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(data)
            //cache: 'default'
            }).then(
                (response) => {
                    console.log(response);
                    return response.json();
                }
            ).then(
                (data) => {
                    console.log(data);
                }
            ).catch(
                (error) => {
                    console.log("ERROR!!");
                    console.log(error);
                }
            )
        }
        
    }
});

function getData(){
    
    const data = {
        usuari: getElementById("userName").value,
        password: getElementById("passwUser").value
    }
    console.log("Get Data Binded");
    const myHeaders = new Headers();
    //data.usuari = document.getElementById('userName');
            console.log(data);
            document.getElementById("userName").value = data.usuari;
            document.getElementById("passwUser").value = data.password;
            console.log(data);
            //data.password = document.getElementById('passwUser');
            fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(data)
            //cache: 'default'
            }).then(
                (response) => {
                    console.log(response);
                    return response.json();
                }
            ).then(
                (data) => {
                    console.log(data);
                }
            ).catch(
                (error) => {
                    console.log("ERROR!!");
                    console.log(error);
                }
            )
        
} 




/*import {Validator} from 'simple-vue-validator'
const { required, maxLength, email } = validators
const validationMixin = vuelidate.validationMixin = vuelidate.validationMixin

Vue.use(vuelidate.default)

new Vue ({
    el: '#app',
    vuetify: new Vuetify(),
    mixins: [validationMixin],

    validations: {
        name: { required, email},
        select: { required },
        checkbox: {
            checked (val) {
                return val
            },
        },
    },
    
    data: () =>  ({
        name: '',
        email: '',
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),

    computed: {
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkboc.checked && errors.push('You must agree to continue!')
            return errors
        },
        selectErrors () {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return this.selectErrors
        },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
    },

    methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        }
    }
})*/
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
      data () {
            return {
              valid: false,
              e1: false,
              password: '',
              passwordRules: [
                (v) => !!v || 'Password is required',
              ],
              email: '',
              emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
              ],
            }
          },
    methods: {
            submit () {
              console.log("hola")
              if (this.$refs.form.validate()) {
                this.$refs.form.$el.submit()
              }
            },
            clear () {
              this.$refs.form.reset()
            }
          },
  })