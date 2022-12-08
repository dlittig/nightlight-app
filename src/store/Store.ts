import { atom } from "jotai";
import {
  STORE_SETTINGS_BATTERY_SAVING_LIMIT,
  STORE_SETTINGS_COLOR,
  STORE_SETTINGS_DISPLAY_CARE,
} from "./keys";

const APP_KEY = "com.dlittig.nightlight-app";

const fromLocalStorage = (key: string) =>
  localStorage.getItem(`${APP_KEY}.${key}`);

const toLocalStorage = (key: string, value: any) =>
  localStorage.setItem(`${APP_KEY}.${key}`, value);

const enabled = atom(false);

const colorSetting = atom(
  () => fromLocalStorage(STORE_SETTINGS_COLOR) || "#ffffff",
  (get, set, update) => {
    toLocalStorage(STORE_SETTINGS_COLOR, update);
    set(colorSetting, update);
  }
);

const displayCareSetting = atom(
  () => fromLocalStorage(STORE_SETTINGS_DISPLAY_CARE) || false,
  (get, set, update) => {
    toLocalStorage(STORE_SETTINGS_DISPLAY_CARE, update);
    set(colorSetting, update);
  }
);

const batterySavingLimitSetting = atom(
  () => fromLocalStorage(STORE_SETTINGS_BATTERY_SAVING_LIMIT) || -1,
  (get, set, update) => {
    toLocalStorage(STORE_SETTINGS_BATTERY_SAVING_LIMIT, update);
    set(colorSetting, update);
  }
);

export const useStore = () => ({
  enabled,
  colorSetting,
  displayCareSetting,
  batterySavingLimitSetting,
});

export default {};
