<template>
    <div>
        <x-header :left-options="{backText: ''}" style="background:#1e6dfd;">{{ title }}</x-header>
    </div>
</template>

<script>
export default {
    props: {
        title: String  //定义传值的类型<br>    }
    }
}
</script>




