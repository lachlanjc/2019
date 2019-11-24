import { Image } from '@theme-ui/components'

export default ({ size = 32, ...props }) => (
  <Image
    {...props}
    src="https://github.com/lachlanjc.png"
    alt="Lachlan’s avatar"
    width={size}
    height={size}
    sx={{ borderRadius: 'circle', overflow: 'hidden', ...props.sx }}
  />
)
