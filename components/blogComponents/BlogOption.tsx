import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { SelectValue } from "@radix-ui/react-select"

type BlogOptionProps = {
  title: string
  options: {
    name: string
    value: string
    tailwind: string
  }[]
  onChange: (value: string) => void
}

export const BlogOption: React.FC<BlogOptionProps> = ({onChange, options, title}) => {
  return (
    <div className="flex flex-col bg-neutral-50 min-w-48 gap-2 border rounded-sm justify-center p-2">
      <p className="text-sm capitalize px-2">{title}</p>
      <Select value={undefined} onValueChange={onChange}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Click to select" />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => 
            <SelectItem key={option.value} value={option.value}>{option.name}</SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}
