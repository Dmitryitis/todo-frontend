import { FC } from "react"
import { Dialog, DialogTitle, useMediaQuery } from "@mui/material"
import stylesText from "styles/modules/Text.module.scss"
import { useTheme } from "@mui/system"
import FormTask from "components/form/FormTask"

interface Props {
  onClick: () => void
  open: boolean
  change?: boolean
}

const ModalTask: FC<Props> = ({ onClick, open, change = false }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Dialog open={open} maxWidth="lg" fullScreen={fullScreen} onClose={onClick}>
      <DialogTitle className={stylesText.TextTitle}>
        {change ? "Change task" : "Create task"}
      </DialogTitle>
      <FormTask onClick={onClick} />
    </Dialog>
  )
}

export default ModalTask
