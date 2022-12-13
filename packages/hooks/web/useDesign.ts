// import { useAppProviderContext } from '$/components/Application';
// import { computed } from 'vue';
// import { lowerFirst } from 'lodash-es';
import { InjectionKey, Ref } from 'vue';
import { createContext, useContext } from '../core/index';

export interface AppProviderContextProps {
    prefixCls: Ref<string>;
    isMobile: Ref<boolean>;
}

const key: InjectionKey<AppProviderContextProps> = Symbol();

export function createAppProviderContext(context: AppProviderContextProps) {
    return createContext<AppProviderContextProps>(context, key);
}

export function useAppProviderContext() {
    return useContext<AppProviderContextProps>(key);
}

export function useDesign(scope: string) {
    const values = useAppProviderContext();
    return {
        // prefixCls: computed(() => `${values.prefixCls}-${scope}`),
        prefixCls: `${values.prefixCls}-${scope}`,
        prefixVar: values.prefixCls,
        // style,
    };
}
