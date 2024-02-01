console.log('Axios OK', axios);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = Vue.createApp({
    data() {
        return {
            emails: []
        }
    }
});

app.mount('#root')

