import { FC, useCallback, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"
import useOnClickOutside from "hooks/useOnClickOutside"
import styles from "styles/modules/picker/ColorPicker.module.scss"

interface Props {
  color: string
  onChange: (color: string) => void
}

const PopoverPicker: FC<Props> = ({ color, onChange }) => {
  const popover = useRef(null)
  const [isOpen, toggle] = useState(false)
  const close = useCallback(() => toggle(false), [])

  useOnClickOutside(popover, close)

  return (
    <div className={styles.Picker}>
      <button
        type="button"
        className={styles.PickerSwatch}
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className={styles.PickerPopover} ref={popover}>
          <HexColorPicker
            color={color}
            onChange={(newColor) => onChange(newColor)}
          />
        </div>
      )}
    </div>
  )
}

export default PopoverPicker
