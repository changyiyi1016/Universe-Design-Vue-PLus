<template>
    <svg
        :class="['biomap-svg-icon', $attrs.class, spin && 'svg-icon-spin']"
        :style="getStyle"
        aria-hidden="true"
    >
        <use :xlink:href="iconName" />
    </svg>
</template>
<script lang="ts">
    import type { CSSProperties } from 'vue';
    import { defineComponent, computed } from 'vue';
    import { useDesign } from '@biomap/ui-components-hooks/web';
    export default defineComponent({
        name: 'BioSvgIcon',
        props: {
            prefix: {
                type: String,
                default: 'icon',
            },
            name: {
                type: String,
                required: true,
            },
            size: {
                type: [Number, String],
                default: 16,
            },
            spin: {
                type: Boolean,
                default: false,
            },
        },
        setup(props) {
            const { prefixCls } = useDesign('svg-icon');
            const iconName = computed(() => `#${props.prefix}-${props.name}`);
            const getStyle = computed((): CSSProperties => {
                const { size } = props;
                let s = `${size}`;
                s = `${s.replace('px', '')}px`;
                return {
                    width: s,
                    height: s,
                };
            });
            return { iconName, prefixCls, getStyle };
        },
    });
</script>
<style lang="less" scoped>
    @iconify-bg-color: #5551;
    @namespace: biomap;
    @prefix-cls: ~'@{namespace}-svg-icon';

    .biomap-svg-icon {
        display: inline-block;
        overflow: hidden;
        vertical-align: -0.15em;
        fill: currentColor;
    }

    .svg-icon-spin {
        animation: loadingCircle 1s infinite linear;
    }
</style>
