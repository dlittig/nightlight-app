import {
  STORE_SETTINGS_COLOR,
  STORE_SETTINGS_DISPLAY_CARE,
  STORE_SETTINGS_MAXIMUM_BRIGHTNESS,
  STORE_SETTINGS_BATTERY_SAVING_LIMIT,
} from "./keys";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const APP_KEY = "com.dlittig.nightlight-app";

const getFullStorageKey = (key: string) => `${APP_KEY}.${key}`;

const enabled = atom(false);

const colorSetting = atomWithStorage(
  getFullStorageKey(STORE_SETTINGS_COLOR),
  "#fff"
);

const displayCareSetting = atomWithStorage(
  getFullStorageKey(STORE_SETTINGS_DISPLAY_CARE),
  "false"
);

const batterySavingLimitSetting = atomWithStorage(
  getFullStorageKey(STORE_SETTINGS_BATTERY_SAVING_LIMIT),
  "false"
);

const maximumBrightnessSetting = atomWithStorage(
  getFullStorageKey(STORE_SETTINGS_MAXIMUM_BRIGHTNESS),
  "false"
);

export const useStore = () => ({
  enabled,
  colorSetting,
  displayCareSetting,
  batterySavingLimitSetting,
  maximumBrightnessSetting,
});

const Store = {};
export default Store;
