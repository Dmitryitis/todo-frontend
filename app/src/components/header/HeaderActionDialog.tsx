import { FC, useCallback, useState } from "react"
import stylesMargin from "styles/modules/Margin.module.scss"
import stylesText from "styles/modules/Text.module.scss"
import Button from "components/UI/buttons/Button"
import AddSvg from "components/UI/svg/AddSvg"
import clsx from "clsx"
import ModalTask from "components/UI/modal/ModalTask"

const HeaderActionDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => {
    setOpen((prevState) => !prevState)
  }, [open])

  return (
    <>
      <Button type="button" typeButton="AddTask" onClick={handleClick}>
        <AddSvg />
        <span
          className={clsx(
            stylesMargin.MarginLeft10,
            stylesText.TextNoneTextMobile,
          )}
        >
          Add task
        </span>
      </Button>
      <ModalTask open={open} onClick={handleClick} />
    </>
  )
}

export default HeaderActionDialog
