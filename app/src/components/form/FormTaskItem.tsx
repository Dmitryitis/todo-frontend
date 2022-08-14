import { FC, useCallback, useEffect, useState } from "react"
import stylesText from "styles/modules/Text.module.scss"
import Button from "components/UI/buttons/Button"
import AddBoldSvg from "components/UI/svg/AddBoldSvg"
import { object, string } from "zod"
import { TextField, Button as MuiButton } from "@mui/material"
import { Form, useZodForm } from "components/UI/form/Form"
import PopoverPicker from "components/UI/picker/PopoverPicker"
import { Box } from "@mui/system"
import { TaskItem_TaskItemWrite } from "api/__generated__"
import { ChangeState } from "types"

const taskItemSchema = object({
  title: string().min(1, { message: "Required field" }),
  text: string().min(1, { message: "Required field" }),
})

interface Props {
  addTask: (task: TaskItem_TaskItemWrite) => void
  change: ChangeState
}

const FormTaskItem: FC<Props> = ({ addTask, change }) => {
  const initialColor = "#FFEB33"
  const [active, setActive] = useState<boolean>(false)
  const [color, setColor] = useState(initialColor)

  const form = useZodForm({
    schema: taskItemSchema,
    mode: "onChange",
  })

  useEffect(() => {
    if (change.change) {
      setActive(true)
      if (change.task) {
        setColor(change.task?.color || initialColor)
        form.setValue("text", change.task.text)
        form.setValue("title", change.task.title)
      }
    }
  }, [change.change])

  const clickAdd = useCallback(() => {
    setActive((prevState) => !prevState)
    if (change.change && change.task) {
      addTask(change.task)
      form.reset()
    }
  }, [active])

  const submitAuth = (text: string, title: string) => {
    const data: TaskItem_TaskItemWrite = {
      text,
      title,
      is_done: false,
      index: null,
      color,
    }

    addTask(data)
    setActive(false)
    form.reset()
    setColor("#FFEB33")
  }

  return (
    <span>
      {active ? (
        <Form
          form={form}
          onSubmit={({ text, title }) => {
            submitAuth(text, title)
          }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            {...form.register("title")}
          />
          <TextField
            label="Text"
            multiline
            maxRows={4}
            variant="standard"
            {...form.register("text")}
          />
          <PopoverPicker color={color} onChange={setColor} />
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <MuiButton type="submit" variant="outlined" size="small">
                {change.change ? "Change" : "Add"}
              </MuiButton>
              <MuiButton type="button" size="small" onClick={clickAdd}>
                Cancel
              </MuiButton>
            </div>
          </Box>
        </Form>
      ) : (
        <Button type="button" typeButton="FormTask" onClick={clickAdd}>
          <AddBoldSvg />
          <span className={stylesText.TextButton}>Add item</span>
        </Button>
      )}
    </span>
  )
}

export default FormTaskItem
