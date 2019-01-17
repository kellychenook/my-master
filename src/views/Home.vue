<template>
    <div class="home">
        <p>{{food}}</p>
        <button @click="handle('back')">返回上一页</button>
        <button @click="handle('push')">跳转至argu</button>
        <button @click="handle('replace')">替换成main_info</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
        name: "home",
        props: {
            food: {
                type: String,
                default: "bear"
            }
        },
        components: {
            HelloWorld
        },
        methods: {
            handle(type) {
                if (type === "back") {
                    this.$router.back();
                } else if (type === "push") {
                    this.$router.push({
                        name: "argu",
                        params: {
                            name: "kelly"
                        }
                    });
                } else if (type === "replace") {
                    this.$router.replace({
                        name: "main_info"
                    });
                }
            }
        }
    };
</script>
