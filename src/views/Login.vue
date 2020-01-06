<template>
    <div>
        <form autocomplete="off">
            <Panel header="Login">
                <span class="p-float-label">
                    <InputText id="username" type="text"/>
                    <label for="username">Username</label>
                </span>

                <span class="p-float-label">
                    <InputText id="password" type="password"/>
                    <label for="password">Password</label>
                </span>
                <Button label="Primary" />
            </Panel>
            
        </form> 
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>

</style>