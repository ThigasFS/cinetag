import React from 'react'
import styles from './Banner.module.css'

function Banner({ page }) {
  return (
    <div 
        className={styles.capa}
        style={{ backgroundImage: `url(/imagens/banner-${page}.png)`}}
    >
        
    </div>
  )
}

export default Banner