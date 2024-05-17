'use client' // Error components must be Client Components
 
import { ArrowBack } from '@/components/ArrowBack'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './error/error.module.scss';
 
export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const ALERT_COLOR = '#81FE88';
 
  return (
    <div className={styles['wrapper-error']}>
      <Image className={styles['cover']} src={`/images/404.png`} width={657} height={367} />
      <h2 className={styles['title']}>Ops! Página não encontrada.</h2>
      <span className={styles['message']}>A página que você tentou acessar não existe.</span>
      <Link className={styles['btn-back']} href={'/'}>Voltar ao feed <ArrowBack color={ALERT_COLOR}/></Link>
    </div>
  )
}
