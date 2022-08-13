import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react"
import clsx from "clsx"
import style from "styles/modules/button/Button.module.scss"
import LoaderSvg from "components/UI/svg/LoaderSvg"

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean
  smallLoader?: boolean
  margin?: boolean
  className?: string
  children: ReactNode
  typeButton?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  isLoading,
  className,
  margin,
  smallLoader,
  typeButton,
  onClick,
  children,
  ...rest
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(style.Button, {
        [style[`Button${typeButton}`]]: typeButton,
        [style.ButtonMargin]: margin,
      })}
      onClick={onClick}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <LoaderSvg small={smallLoader} />
      ) : (
        <span className={style.ButtonFlex}>{children}</span>
      )}
    </button>
  )
}

export default Button
