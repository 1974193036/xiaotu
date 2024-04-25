'use client'

import { useState, KeyboardEvent } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SiderBar = () => {
  const [inputValue, setInputValue] = useState('')

  const openWindow = (value: string) => {
    window.open(`https://www.baidu.com/s?wd=${value}`)
  }

  const handleSearch = () => {
    openWindow(inputValue)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      openWindow(inputValue)
    }
  }

  return (
    <div className="search-area">
      <Input
        className="search-field"
        placeholder=""
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button
        variant="destructive"
        className="search-button"
        onClick={handleSearch}
        type="submit"
      >
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={22}
          height={22}
        />
      </Button>
    </div>
  )
}

export default SiderBar
