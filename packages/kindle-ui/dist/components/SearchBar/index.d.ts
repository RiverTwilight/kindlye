import { InputHTMLAttributes } from "react";
interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disable?: boolean;
}
declare const _default: import("styled-components").StyledComponent<({ className, disable, ...rest }: ISearchBarProps) => JSX.Element, any, {}, never>;
export default _default;
