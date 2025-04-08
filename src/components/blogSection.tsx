'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostCard } from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { getBlogPosts, Metadata } from "@/app/blog/utils"
import Aos from "aos"
import 'aos/dist/aos.css'

type allBlogPosts={
  metadata: Metadata,
  content: string,
  slug: string
}[]

type allBlogPostsProps ={allBlogPosts:allBlogPosts}
export default function BlogPage(props: allBlogPostsProps ) {

  type positionProps ={
    a:number,
    b:number
  }

 
  //logic to view all blogposts/articles
  const [view_all, setView_all] = useState(false);
  const [position, setPosition] = useState<positionProps>({a: 0, b:3})
  useEffect(()=>{
    if (view_all){
      setPosition(prev=> ({a:0, b:prev.b*2}))
    }
    setView_all(false)
  },[view_all])

  //button up
  const [go_up, setGo_up] = useState(false)
  const [scrolly , setScrolly] = useState(0)
  useEffect(()=>{

    const handlescroll = ()=>{

      
    setScrolly(window.scrollY)
    setGo_up(window.scrollY>2500)
    }

    window.addEventListener('scroll', handlescroll)

    return()=>{window.removeEventListener('scroll', handlescroll)}
  },[scrolly])


  //animate on scroll
  useEffect(() => {
    Aos.init({
        easing: 'ease-in-sine',
        duration: 500,
    })
},[])

console.log('g0Up', go_up, window.scrollY)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 justify-center">
        <section className="w-full flex justify-center pt-12 md:pt-24 lg:pt-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container  max-w-[1200px] px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insights Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Exploring the latest trend on health related discussions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search articles..." className="w-full pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 ">
          <div className="relative container max-w-[1200px] px-4 md:px-6  ">
            {/* <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="heart-health">Heart Health</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
            </Tabs> */}

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {(props.allBlogPosts)
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            }).slice(position.a, position.b)
            .map((post) => {
              return (<div data-aos='fade-in' data-aos-once='true'><BlogPostCard
                title={post.metadata.title}
                excerpt={post.metadata.summary}
                date={post.metadata.publishedAt}
                category="Heart Health"
                image={post.metadata.image}
                image_alt={post.metadata.imageAlt}
                slug={`/blog/${post.slug}`}
              /></div>)})}
            </div>

            {(position.b<props.allBlogPosts.length)&&<div className="flex justify-center">
              <Button variant="outline" onClick={()=>setView_all(true)}>Load More Articles</Button>
            </div>}

            {go_up&&<Button onClick={()=>{window.scrollTo({top:0, behavior:'smooth'})}} className=" cursor-pointer fixed h-[50px] w-[50px] bg-yellow-500 right-2 lg:right-16 bottom-2" style={{opacity:go_up?1:0, transition: 'opacity 13s ease-in-out'}}><ArrowUp/></Button>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

