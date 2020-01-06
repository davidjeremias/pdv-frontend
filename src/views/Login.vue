<template>
    <div>
        <form autocomplete="off">
            <Panel header="Login">
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="user"/>
                    <label for="username">Username</label>
                </span>

                <span class="p-float-label">
                    <InputText id="password" type="password" v-model="password"/>
                    <label for="password">Password</label>
                </span>
                <Button label="Primary" @click="logar()"/>
            </Panel>
            
        </form> 
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            user: '',
            password: ''
        }
    },
    methods:{
        logar(){
            if(this.user !== null && this.password !== null){
                this.$router.push({name: 'home'})
            }
        }
    }
}
</script>

<style>

</style>