"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"

const countries = [
  { value: "iran", label: "ایران" },
  { value: "turkey", label: "ترکیه" },
  { value: "uae", label: "امارات" },
  { value: "iraq", label: "عراق" },
  { value: "afghanistan", label: "افغانستان" },
]

export default function MultiSelectPage() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">انتخاب چندگانه</h1>
        <p className="text-lg text-muted-foreground">انتخاب چند مورد از لیست گزینه‌ها</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`const [selected, setSelected] = useState<string[]>([])

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      {selected.length > 0 ? \`\${selected.length} انتخاب شده\` : "انتخاب کنید"}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandInput placeholder="جستجو..." />
      <CommandEmpty>موردی یافت نشد</CommandEmpty>
      <CommandList>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.value}
              onSelect={() => {
                setSelected(prev => 
                  prev.includes(item.value)
                    ? prev.filter(v => v !== item.value)
                    : [...prev, item.value]
                )
              }}
            >
              <Check className={cn("ml-2 h-4 w-4", selected.includes(item.value) ? "opacity-100" : "opacity-0")} />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`}
          >
            <div className="space-y-4 w-full max-w-md">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    {selected.length > 0 ? `${selected.length} کشور انتخاب شده` : "انتخاب کشورها"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="جستجوی کشور..." />
                    <CommandList>
                      <CommandEmpty>کشوری یافت نشد</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            key={country.value}
                            onSelect={() => {
                              setSelected((prev) =>
                                prev.includes(country.value)
                                  ? prev.filter((v) => v !== country.value)
                                  : [...prev, country.value],
                              )
                            }}
                          >
                            <Check
                              className={cn(
                                "ml-2 h-4 w-4",
                                selected.includes(country.value) ? "opacity-100" : "opacity-0",
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              {selected.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selected.map((value) => {
                    const country = countries.find((c) => c.value === value)
                    return (
                      <Badge key={value} variant="secondary">
                        {country?.label}
                      </Badge>
                    )
                  })}
                </div>
              )}
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
