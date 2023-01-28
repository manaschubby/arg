import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SVG from './ouros/svg'

export default function Home() {
  return (
    <div className='background'>
      <div className='love'>Designed with love: <a href='https://www.linkedin.com/in/manas-ashwin-053755224/'>Manas Ashwin</a></div>
      <SVG />
      <div className='center-main'>
        <h1 className='level'>LEVIATHAN</h1>
        <div className='label'>ALTERNATE REALITY GAME</div>
      </div>
    </div>
  )
}
