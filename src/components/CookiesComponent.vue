<template>
    <div v-if="!cookiesAccepted" class="cookie-banner bg-dark text-white">
      <p>Este site usa cookies para melhorar a sua experiência. Aceitar cookies?</p>
      <button @click="acceptCookies" class="btn btn-primary">Aceitar</button>
      <button @click="declineCookies" class="btn btn-outline-dark">Recusar</button>
    </div>
  </template>
  
<script>
    export default {
        data() {
            return {
                cookiesAccepted: false,
            };
        },
        methods: {
            acceptCookies() {
                this.cookiesAccepted = true;
                localStorage.setItem('cookiesAccepted', true); 
            },
            declineCookies() {
                this.cookiesAccepted = true;
                localStorage.setItem('cookiesAccepted', false); 
            }
        },
        mounted() {
            const storedPreference = localStorage.getItem('cookiesAccepted');
            if (storedPreference !== null) {
                this.cookiesAccepted = true; 
            }
        }
    };
</script>
  
<style scoped>
    .cookie-banner {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #f4f4f4;
        padding: 10px;
        text-align: center;
        border-top: 1px solid #ddd;
    }

    .cookie-banner button {
        margin: 0 10px;
    }
</style>
