<template>
    <empty-page>
    </empty-page>
    <spin-loading :size="size">
    </spin-loading>
</template>

<script>
import {SpinLoading, EmptyPage } from "./styled";

export default {
    components: {
        "spin-loading": SpinLoading,
        "empty-page": EmptyPage,
    },
    props: {
        size: {
            type: String,
            default: null,
        },
    },
};
</script>
