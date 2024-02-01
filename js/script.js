console.log('Axios OK', axios);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = Vue.createApp({
    data() {
        return {
            emails: []
        }
    },
    create() {
        axios.get(endpoint).then((res) => {
            const email = res.data.response
            this.emails.push(email)
        })
    }
});

app.mount('#root')

