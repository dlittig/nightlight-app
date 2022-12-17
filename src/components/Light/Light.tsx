import { useAtom } from "jotai";
import { useStore } from "../../store/Store";
import "./style.scss";

const Light = () => {
  const { colorSetting, displayCareSetting } = useStore();
  const [color] = useAtom(colorSetting);
  const [isDisplayCareEnabled] = useAtom(displayCareSetting);

  return (
    <div className="Light" style={{ backgroundColor: color }}>
      {isDisplayCareEnabled === "true" && (
        <div className="Light__pulsate"></div>
      )}
    </div>
  );
};
export default Light;
