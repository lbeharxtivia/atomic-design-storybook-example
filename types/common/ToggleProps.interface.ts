export interface ToggleProps {
    defaultChecked?: boolean; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string;
    checked?:boolean; //only use for storybook
}
