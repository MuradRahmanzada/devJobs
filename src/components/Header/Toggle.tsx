import { useContext } from "react";
import { themeContext } from "../../store/ThemeContext";
import iconSun from "/assets/desktop/icon-sun.svg";
import iconMoon from "/assets/desktop/icon-moon.svg";

const HeaderToggle = () => {
  const { handleThemeSwitch } = useContext(themeContext);

  return (
    <div className="flex items-center gap-3">
      <i>
        <img src={iconSun} alt="" className="w-4" />
      </i>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={handleThemeSwitch}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-violet after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
      </label>
      <i>
        <img src={iconMoon} alt="" className="" />
      </i>
    </div>
  );
};

export default HeaderToggle;
