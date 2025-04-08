import { getBlogPosts } from "./utils"
import BlogPage from "@/components/blogSection"

export default function Page() {


  //get all blog/articles
  let allBlogPosts = getBlogPosts();




  return (
    <BlogPage allBlogPosts={allBlogPosts}/>
  )
}

