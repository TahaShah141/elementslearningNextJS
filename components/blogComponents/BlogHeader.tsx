import { Editable, HeaderType, IndentedType } from "@/constants/Blogs/blog"
import { headerOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, ChevronRightIcon, CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { Card } from "../ui/card"
import { BlogOption } from "./BlogOption"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { XIcon } from "lucide-react"

export const BlogHeader: React.FC<HeaderType & IndentedType & Editable> = ({size, weight, style, alignment, text, indented, 
  editable=false, onEdit=()=>{}, moveUp=()=>{}, moveDown=()=>{}, deleteComponent=()=>{}}) => {
  
  const styleClassName = getTailwind(headerOptions, "Font Style", style)
  const weightClassName = getTailwind(headerOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(headerOptions, "Font Size", size)
  const alignmentClassName = getTailwind(headerOptions, "Text Alignment", alignment)

  const [opened, setOpened] = useState(false) 
  const [textAreaContent, setTextAreaContent] = useState(text)

  useEffect(() => {
    setTextAreaContent(text)
  }, [text])

  const current: HeaderType & IndentedType = {
    type: "HEADER",
    text: text,
    size: size,
    weight: weight,
    style: style,
    alignment: alignment,
    indented: indented
  }

  return (
    <div className="relative group">
      {editable && 
      <div className="absolute p-1 bg-neutral-50 shadow-md z-10 rounded-md translate-x-1/2 -translate-y-1/2 top-0 right-0" onClick={() => {setOpened(!opened); onEdit({...current, text: textAreaContent})}}>
        {opened ? <CrossCircledIcon className="size-6" /> : <Pencil2Icon className="size-6" />}
      </div>}
      {editable ?
      <>
      <div className={`overflow-hidden border-0 flex p-0 justify-between items-center absolute h-0 w-full transition-all duration-200 top-0 -translate-y-full ${opened ? "py-2 h-32" : "p-0 border-0 h-0"}`} >
        <Card className="size-full flex justify-between items-center p-4">
          <div className="flex gap-2">
            <Button size={"icon"} variant={"ghost"} onClick={() => deleteComponent()}>
              <XIcon className="size-4"/>
            </Button>
            <p className="text-3xl text-light-black">Header</p>
          </div>
          <div className="flex gap-4 items-center">
            {headerOptions.map(option => 
            <BlogOption key={option.JSONkey} 
            {...option} value={(current as unknown as Record<string, string>)[option.JSONkey]}
            onChange={(value) => onEdit({...current, [option.JSONkey]: value})}
            />)}
          </div>
        </Card>
      </div>
      <div className={`absolute px-2 left-0 top-0 bottom-0 -translate-x-full overflow-hidden transition-all duration-300 group-hover:w-20 min-h-40 ${opened ? "w-20" : "w-0"}`} >
        <Card className="size-full flex flex-col justify-between py-6 gap-2 border-0 group-hover:border items-center overflow-hidden text-neutral-400">
          <Button onClick={() => moveUp()} size={"icon"} variant={"ghost"}>
            <ArrowUpIcon className="size-6 hover:text-neutral-700" />
          </Button>
          <Button onClick={() => onEdit({...current, indented: !current.indented})} size={"icon"} variant={"ghost"}>
            <ChevronRightIcon className={`size-6 hover:text-neutral-700 transition-transform duration-150 ${current.indented ? "rotate-180" : ""}`} />
          </Button>
          <Button onClick={() => moveDown()} size={"icon"} variant={"ghost"}>
            <ArrowDownIcon className="size-6 hover:text-neutral-700" />
          </Button>
        </Card>
      </div>
      {opened ? 
      <Textarea value={textAreaContent} onChange={(e) => setTextAreaContent(e.target.value)} className={`h-48 ${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`} />
      :
      <h3 className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {text}
      </h3>}
      </>:
      <h3 className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {text}
      </h3>}
    </div>
  )
}
