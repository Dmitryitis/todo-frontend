import { FC, memo, useCallback, useRef, useState } from "react"
import clsx from "clsx"
import stylesMargin from "styles/modules/Margin.module.scss"
import stylesText from "styles/modules/Text.module.scss"
import stylesPosition from "styles/modules/Position.module.scss"
import Button from "components/UI/buttons/Button"
import SettingsSvg from "components/UI/svg/SettingsSvg"
import Dropdown from "components/UI/dropdown/Dropdown"
import useOnClickOutside from "hooks/useOnClickOutside"

const HeaderActionDropdown: FC = () => {
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleActive = useCallback(() => {
    setOpen((prevValue: boolean) => !prevValue)
  }, [open])

  useOnClickOutside(dropdownRef, () => setOpen(false))

  return (
    <div ref={dropdownRef} className={stylesPosition.PositionRelative}>
      <Button type="button" margin typeButton="Settings" onClick={handleActive}>
        <SettingsSvg />
        <span
          className={clsx(
            stylesMargin.MarginLeft10,
            stylesText.TextNoneTextMobile,
          )}
        >
          Settings
        </span>
      </Button>
      <Dropdown open={open} />
    </div>
  )
}

export default memo(HeaderActionDropdown)
