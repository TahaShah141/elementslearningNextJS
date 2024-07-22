"use client"

import { defaultBlog } from "@/constants/Blogs/allBlogs"
import { Blog, BlogContent, Editable, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { useCallback, useState } from "react"
import { BlogBullets } from "@/components/blogComponents/BlogBullets"
import { BlogHeader } from "@/components/blogComponents/BlogHeader"
import { BlogImage } from "@/components/blogComponents/BlogImage"
import { BlogParagraph } from "@/components/blogComponents/BlogParagraph"
import { Input } from "../ui/input"

type EditBlogProps = {
  blogToEdit?: Blog
}

type BlogComponentProps = Editable & {
  type: string
}

const BlogComponent: React.FC<BlogComponentProps> = ({onEdit, moveUp, moveDown, type, ...props}) => {
  switch (type) {
    case "PARAGRAPH": {
      // @ts-ignore
      return <BlogParagraph editable moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    case "HEADER": {
      // @ts-ignore
      return <BlogHeader editable moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    case "BULLET": {
      // @ts-ignore
      return <BlogBullets {...props} />
    }
    case "IMAGE": {
      // @ts-ignore
      return <BlogImage {...props} />
    }
    default: {
      return <p className="font-bold text-3xl text-red-500">Error in BLOG JSON</p>
    }
  }
}

export const EditBlog: React.FC<EditBlogProps> = ({blogToEdit=defaultBlog}) => {

  const [blog, setBlog] = useState<Blog>({...blogToEdit})
  const { headerSrc, author, date, title, summary, content } = blog

  const moveUp = useCallback((index: number) => {
    if (index === 0) return;
    
    const newContent: BlogContent[] = [...blog.content];
    [newContent[index - 1], newContent[index]] = [newContent[index], newContent[index - 1]]

    setBlog(b => ({...b, content: newContent}))

  }, [blog])

  const moveDown = useCallback((index: number) => {
    if (index === blog.content.length - 1) return;

    const newContent: BlogContent[] = [...blog.content];
    [newContent[index + 1], newContent[index]] = [newContent[index], newContent[index + 1]]

    setBlog(b => ({...b, content: newContent}))

  }, [blog])


  return (
    <div className="flex flex-col gap-2">
      {/* {headerSrc &&
      <div className="relative max-h-[500px] overflow-hidden">
        <img src={headerSrc} alt="" className="w-full" />
      </div>
      } */}
      <div className="flex flex-col gap-4 w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:px-32">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Blog Title" value={title} onChange={(e) => setBlog({...blog, title: e.target.value})} className="font-bold text-2xl md:text-3xl xl:text-5xl h-fit border-0" />
            <Input placeholder="Author of Blog" value={author} onChange={(e) => setBlog({...blog, author: e.target.value})} className="text-base h-fit border-0" />
          </div>
        </div>
        {content?.map(({type, ...props}, i) => <BlogComponent key={i} type={type} {...props} 
        onEdit={(edited: BlogContent) => {
          setBlog({...blog, content: [...blog.content.slice(0, i), edited, ...blog.content.slice(i+1)]})
        }} moveUp={() => moveUp(i)} moveDown={() => moveDown(i)}
        />)}
      </div>
    </div>
  )
}