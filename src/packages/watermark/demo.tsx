import React, { useState, useRef } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { WaterMark } from './watermark'
import Cell from '@/packages/cell'
import Button from '@/packages/button'

interface T {
  '84aa6bce': string
  ddd76b7f: string
  '6de1e02a': string
  fa139733: string
}
const WaterMarkDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      ddd76b7f: '文字水印',
      '6de1e02a': '图片水印',
      fa139733: '局部用法',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      ddd76b7f: '文字浮水印',
      '6de1e02a': '圖片浮水印',
      fa139733: '局部用法',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      ddd76b7f: 'Text WaterMark',
      '6de1e02a': 'Image WaterMark',
      fa139733: 'Part Usage',
    },
  })

  const [flag, setFlag] = useState(false)
  const imgSrc = useRef(
    '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )

  const showTextMark = () => {
    setFlag(false)
  }

  const showImageMark = () => {
    setFlag(true)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Button onClick={showTextMark} style={{ marginRight: '10px' }}>
            {translated.ddd76b7f}
          </Button>
          <Button onClick={showImageMark}>{translated['6de1e02a']}</Button>
          {!flag && <WaterMark zIndex={200} content="NutUI-WaterMark" />}
          {flag && (
            <WaterMark
              zIndex={200}
              content="NutUI-WaterMark"
              rotate={22}
              imageWidth={60}
              imageHeight={23}
              image={imgSrc.current}
            />
          )}
        </Cell>
        <h2>{translated.fa139733}</h2>
        <Cell style={{ height: '200px' }}>
          <WaterMark fullPage={false} color="red" content="nutui" />
        </Cell>
      </div>
    </>
  )
}

export default WaterMarkDemo
