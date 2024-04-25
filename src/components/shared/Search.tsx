'use client'

import { useState, KeyboardEvent } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { openWindowBaidu } from '@/lib/openWindowBaidu'

const SiderBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    openWindowBaidu(inputValue)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      openWindowBaidu(inputValue)
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
