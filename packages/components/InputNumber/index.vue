<template>
    <a-input
        v-bind="$attrs"
        v-model:value.number="computedValue"
        :max-length="5"
        size="small"
        type="number"
        :min="0"
        :max="computedMax"
    >
        <template #addonBefore>
            <a-button @click="onMinus" v-if="!$attrs.disabled" size="small">-</a-button>
        </template>
        <template #addonAfter>
            <a-button @click="onAdd" v-if="!$attrs.disabled" size="small">+</a-button>
        </template>
    </a-input>
</template>

<script lang="ts">
    import { computed, defineComponent, watch } from 'vue';

    export default defineComponent({
        name: 'InputNumber2',
        props: {
            value: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
            },
        },
        emits: ['update:value', 'change'],
        setup(props, { emit }) {
            const computedValue = computed({
                get: () => (Number.isNaN(+props.value) ? null : +props.value),
                set: (val) => {
                    emit('update:value', val);
                    emit('change', val);
                },
            });
            const computedMax = computed(() => {
                return props.max;
            });
            function onAdd() {
                if (!computedValue.value) {
                    computedValue.value = 1;
                } else {
                    computedValue.value += 1;
                }
            }

            function onMinus() {
                if (computedValue.value) {
                    computedValue.value -= 1;
                }
            }
            watch(
                () => props,
                (newVal) => {
                    if (newVal.max && newVal.value > newVal.max) {
                        emit('update:value', newVal.max);
                    }
                },
                { deep: true },
            );
            return {
                onAdd,
                onMinus,
                computedValue,
                computedMax,
            };
        },
    });
</script>

<style lang="less" scoped>
    :deep(.ant-input-wrapper) {
        .ant-input-group-addon {
            border: none;
            background: unset;
            padding: 0 5px;
        }

        input[type='number'] {
            -moz-appearance: textfield;
            text-align: center;
        }

        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
</style>
