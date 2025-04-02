import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostCard } from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 justify-center">
        <section className="w-full flex justify-center pt-12 md:pt-24 lg:pt-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container  max-w-[1200px] px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Medical Insights Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Exploring the latest in cardiovascular health, medical research, and patient care.
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
          <div className="container max-w-[1200px] px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="heart-health">Heart Health</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BlogPostCard
                title="Understanding Heart Health: Beyond the Basics"
                excerpt="What everyone should know about maintaining cardiovascular health in today's fast-paced world."
                date="March 15, 2023"
                category="Heart Health"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/understanding-heart-health"
              />
              <BlogPostCard
                title="The Future of Telemedicine in Cardiology"
                excerpt="How remote monitoring and virtual consultations are transforming cardiac care delivery."
                date="February 28, 2023"
                category="Technology"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/telemedicine-cardiology"
              />
              <BlogPostCard
                title="Nutrition Myths and Heart Disease Prevention"
                excerpt="Separating fact from fiction when it comes to dietary recommendations for heart health."
                date="January 10, 2023"
                category="Nutrition"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/nutrition-myths-heart-disease"
              />
              <BlogPostCard
                title="Advances in Minimally Invasive Cardiac Procedures"
                excerpt="New techniques that are reducing recovery time and improving outcomes for cardiac patients."
                date="December 5, 2022"
                category="Research"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/minimally-invasive-procedures"
              />
              <BlogPostCard
                title="Women's Heart Health: Unique Considerations"
                excerpt="Understanding the gender-specific aspects of cardiovascular disease in women."
                date="November 18, 2022"
                category="Heart Health"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/womens-heart-health"
              />
              <BlogPostCard
                title="The Role of Genetics in Cardiovascular Disease"
                excerpt="How genetic factors influence heart health and what it means for personalized medicine."
                date="October 22, 2022"
                category="Research"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/genetics-cardiovascular-disease"
              />
              <BlogPostCard
                title="Exercise and Heart Health: Finding the Right Balance"
                excerpt="Guidelines for optimal physical activity to promote cardiovascular wellness."
                date="September 14, 2022"
                category="Heart Health"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/exercise-heart-health"
              />
              <BlogPostCard
                title="Stress Management for Cardiac Patients"
                excerpt="Evidence-based strategies to reduce stress and improve heart health outcomes."
                date="August 30, 2022"
                category="Heart Health"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/stress-management-cardiac"
              />
              <BlogPostCard
                title="Emerging Trends in Cardiovascular Research"
                excerpt="A look at the most promising areas of investigation in the field of cardiology."
                date="July 25, 2022"
                category="Research"
                image="/placeholder.svg?height=200&width=300"
                slug="/blog/emerging-trends-research"
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

