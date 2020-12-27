import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { colors } from './theme'

const Progress = ({ color = colors.accent }) => {
  const router = useRouter()

  useEffect(() => {
    let timeout

    const start = () => {
      timeout = setTimeout(NProgress.start, 100)
    }

    const done = () => {
      clearTimeout(timeout)
      NProgress.done()
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', done)
    router.events.on('routeChangeError', done)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', done)
      router.events.off('routeChangeError', done)
    }
  }, [])

  return (
    <style>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
    `}</style>
  )
}

export default Progress
