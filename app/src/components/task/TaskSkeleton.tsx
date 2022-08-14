import { FC, memo } from "react"
import { Grid, Skeleton } from "@mui/material"

const TaskSkeleton: FC = () => {
  return (
    <>
      {[...Array(4)].map((e, i) => {
        return (
          <Grid wrap="wrap" key={`${e}__${i}`} item xs={12} sm={6} md={4}>
            <Skeleton
              sx={{ borderRadius: "25px" }}
              variant="rectangular"
              animation="wave"
              width="100%"
              height={80}
            />
          </Grid>
        )
      })}
    </>
  )
}

export default memo(TaskSkeleton)
