<template>
    <spin-loading :size="size">
    </spin-loading>
</template>

<script>
import SpinLoading from "./styled";

export default {
    components: {
        "spin-loading": SpinLoading,
    },
    props: {
        color: {
            type: String,
            default: "chateauGreen",
        },
        size: {
            type: String,
            default: null,
        },
    },
};
</script>
