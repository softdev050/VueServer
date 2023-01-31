<template>
    <div class="sign sign-background">
        <div style="logo">
            <SignLogo :url="logourl"/>
        </div>
        <div class="">
            <Signin />
        </div>
    </div>
</template>

<script>
export default{

    name: "Sign",

    components: {
        Signin,
        Signup,
        Join,
        Resetpassword,
        SignLogo,
        ButtonsArrow,
    },

    props: [

    ],

    data(){
        return {

        }
    },

    methods: [

    ]
};
</script>

<