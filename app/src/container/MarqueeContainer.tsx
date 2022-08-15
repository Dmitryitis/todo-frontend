import { FC, useContext, useEffect, useState } from "react"
import Marquee from "components/marquee/Marquee"
import { ContextApp } from "store/reducer"
import { useMutation } from "react-query"
import axios from "axios"
import styles from "styles/modules/Marguee.module.scss"
import { Skeleton } from "@mui/material"
import { NEWS_API } from "../constants"

const MarqueeContainer: FC = () => {
  const [news, setNews] = useState<any>(null)
  const { mutate, isLoading } = useMutation(
    "get news",
    () => axios.get(NEWS_API),
    {
      onSuccess: ({ data }) => {
        const resData = data?.data.map((item: any) => {
          return { title: item.title, url: item.url, uuid: item.uuid }
        })
        setNews(resData)
      },
    },
  )
  const { state } = useContext(ContextApp)

  useEffect(() => {
    if (!state.isActiveNews && news === null) {
      mutate()
    }
  }, [state])

  if (isLoading)
    return (
      <div className={styles.MarqueeTop}>
        <Skeleton
          width="100%"
          height={40}
          variant="rectangular"
          animation="wave"
        />
      </div>
    )

  return (
    <span>
      {state.isActiveNews ? null : (
        <Marquee>
          <div className={styles.MarqueeFlex}>
            {news &&
              news.map((item: any) => (
                <a
                  key={item.uuid}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.MarqueeLink}
                >
                  {item.title}
                </a>
              ))}
          </div>
        </Marquee>
      )}
    </span>
  )
}

export default MarqueeContainer
