import { FC, memo } from "react"
import styles from "styles/modules/task/TaskItem.module.scss"
import { shortTextTaskFormatter, shortTitleFormatter } from "utils/formatters"

interface PropsTitle {
  title: string | undefined
}

interface PropsText {
  text: string | undefined
  open: boolean
}

export const TaskItemTitle: FC<PropsTitle> = memo(({ title }) => {
  return <h4 className={styles.TaskItemTitle}>{shortTitleFormatter(title)}</h4>
})

export const TaskItemText: FC<PropsText> = memo(({ text, open }) => {
  return (
    <p className={styles.TaskItemText}>
      {open ? text : shortTextTaskFormatter(text)}
    </p>
  )
})
