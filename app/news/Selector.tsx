'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useState} from "react";

import {useRouter} from "next/navigation";

export function SelectDemo() {//{fetchDataWithFilter}: any
  const [isFeed, setIsFeed] = useState(false);
  const router = useRouter();
  const onOpenChange = () => {
    setIsFeed(true)
  }
  const onValueChange = (value: string) => {
    if (value == "Все") {
      router.push(`/news`);
    } else {
      router.push(`/news?filter=${value}`);
    }
    setTimeout(() => setIsFeed(false), 100)
  }
  return (

    <>
      {isFeed && <div onClick={() => setIsFeed(false)} className='h-dvh z-10 absolute top-0 bottom-0 right-0 left-0'>

      </div>}
      <Select
        onOpenChange={onOpenChange}
        onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Фильтр Напрямку"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Все">Все</SelectItem>
            <SelectItem value="Волейбол">Волейбол</SelectItem>
            <SelectItem value="Футбол">Футбол</SelectItem>
            <SelectItem value="Борьба">Борьба</SelectItem>
            <SelectItem value="Стрельба">Стрельба</SelectItem>
            <SelectItem value="Походы">Походы</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
