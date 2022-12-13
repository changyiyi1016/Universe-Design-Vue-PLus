<template>
    <a-button v-bind="getBindValue" :class="getButtonClass" @click="onClick">
        {{ label }}
    </a-button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'BioButton',
        inheritAttrs: false,
    });
</script>
<script lang="ts" setup>
    import { computed, unref, useAttrs } from 'vue';

    const props = defineProps({
        type: {
            type: String,
        },
        label: {
            type: String,
            default: '点击',
        },
        color: {
            type: String,
            default: '',
        },
        loading: { type: Boolean },
        disabled: { type: Boolean },
        /**
         * Text before icon.
         */
        preIcon: { type: String },
        /**
         * Text after icon.
         */
        postIcon: { type: String },
        /**
         * preIcon and postIcon icon size.
         * @default: 14
         */
        iconSize: { type: Number, default: 14 },
        onClick: { type: Function, default: null },
    });

    // get component class
    const attrs = useAttrs();
    const getButtonClass = computed(() => {
        const { color, disabled } = props;
        return [
            {
                [`ant-btn-${color}`]: color,
                [`is-disabled`]: disabled,
            },
        ];
    });

    // get inherit binding value
    const getBindValue = computed(() => ({ ...unref(attrs), ...props }));
</script>
