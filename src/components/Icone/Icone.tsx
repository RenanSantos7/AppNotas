import classNames from "classnames"

interface IconeProps {
    children: string
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLSpanElement>
}

export default function Icone({ children, className, style }: IconeProps) {
    return (
        <span
            className={classNames(
                "material-symbols-outlined",
                className
            )}
            style={style}
        >{children}</span>
    )
}
