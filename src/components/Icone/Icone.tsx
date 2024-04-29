import classNames from "classnames"

interface IconeProps {
    children: string
    style?: React.CSSProperties
    className?: string
    onClick?: () => void
}

export default function Icone({ children, className, style, onClick }: IconeProps) {
    return (
        <span
            className={classNames(
                "material-symbols-outlined",
                className
            )}
            style={style}
            onClick={onClick}
        >{children}</span>
    )
}
