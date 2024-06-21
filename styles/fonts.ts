import { Kanit } from 'next/font/google'
import localFont from 'next/font/local'

const kanit300 = Kanit({ weight: '300', subsets: ['latin'] })
const spaceBoard = localFont({ src: '../public/fonts/Spaceboardsdemo.otf' })

export { spaceBoard, kanit300 }