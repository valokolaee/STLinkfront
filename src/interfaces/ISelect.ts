export interface ISelect<T>   {
    disabled?: boolean;
    info?: T,
    onSelect?: (value?: T) => void;
    clearSelection?: () => void;
    delete?: (value?: T) => void;
    edit?: (value?: T) => void;
    isSelected?: boolean;
    selectedItem?: T;

}