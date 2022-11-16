import { ToggleProps } from "types/common/ToggleProps.interface"

export const Toggle = ({label, onChange, checked, defaultChecked}:ToggleProps) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" {...{defaultChecked, onChange, checked}} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
        <span className="ml-3 text-body dark:text-gray-300">{label}</span>
      </label>
    )
}
