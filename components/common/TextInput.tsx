import { TextInputProps } from "types/TextInputProps.interface"
import cn from 'classnames';

export const TextInput = ({ id, label, variant="default" }: TextInputProps) => {

    return (
        <div className="relative">
            {variant !== "floating" && <label htmlFor={id} className="block mb-2 text-sm dark:text-white">Label</label>}
            <input type="text" id={id} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " />
            {variant === "floating" && <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{label}</label>}
        </div>
    )
}
