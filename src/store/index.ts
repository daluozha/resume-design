import { initResetFun } from '@/utils/storeTools';
import { useDesignStore } from './design';
import { useLoadingStore } from './loading';
import { useResumeJsonStore, useResumeModelStore } from './resume';
import { useUuidStore } from './uuid';

export interface IAppStore {
  useLoadingStore: ReturnType<typeof useLoadingStore>;
  useResumeJsonStore: ReturnType<typeof useResumeJsonStore>;
  useResumeModelStore: ReturnType<typeof useResumeModelStore>;
  useUuidStore: ReturnType<typeof useUuidStore>;
  useDesignStore: ReturnType<typeof useDesignStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useLoadingStore = useLoadingStore();
  appStore.useResumeJsonStore = useResumeJsonStore();
  appStore.useResumeModelStore = useResumeModelStore();
  appStore.useUuidStore = useUuidStore();
  appStore.useDesignStore = useDesignStore();
  // 重写reset方法
  initResetFun(appStore);
};
export default appStore;
