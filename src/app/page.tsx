import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedPublication } from "@/components/featured-publication"
import { BlogPostCard } from "@/components/blog-post-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react"
import LinkScroll from "@/components/LinkScroll"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex justify-center w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container flex justify-center px-4 md:px-6">
            <div className="max-w-[1200px] grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bridget Chukwudile                  </h1>
                  <p className="text-xl text-muted-foreground">Cardiologist & Medical Researcher</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Dedicated to advancing cardiovascular health through innovative research and compassionate patient
                  care.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="cursor-pointer">
                    <LinkScroll to="publications" spy={true}
      smooth={true}
      delay={100}
      isDynamic={true}
      ignoreCancelEvents={false}
          spyThrottle={500}>View Publications</LinkScroll>
                  </Button>
                  <Button variant="outline" asChild className="cursor-pointer">
                    <LinkScroll to="contact" spy={true}
      smooth={true}
      delay={100}
      isDynamic={true}
      ignoreCancelEvents={false}
          spyThrottle={500}>Contact Me</LinkScroll>
                  </Button>
                </div>            
                <div className="flex space-x-4 px-5">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
              </div>
              <img
                alt="Dr. Sarah Johnson"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Background</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 15 years of experience in cardiology and medical research, I specialize in preventative
                  cardiology and innovative treatment approaches.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">
                        MD from Johns Hopkins School of Medicine
                        <br />
                        PhD in Cardiovascular Research from Harvard University
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Clinical Practice</h3>
                      <p className="text-muted-foreground">
                        Chief of Cardiology at Memorial Hospital
                        <br />
                        Private practice focusing on preventative care
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Research Focus</h3>
                      <p className="text-muted-foreground">
                        Cardiovascular disease prevention
                        <br />
                        Innovative treatment methodologies
                        <br />
                        Patient outcomes improvement
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Medical research"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Featured Publications */}
        <section id="publications" className="w-full flex justify-center py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-[1200px]  flex flex-col justify-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Research/Project</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Publications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my most impactful research papers and medical publications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 lg:grid-cols-2 lg:gap-12">
              <FeaturedPublication
                title="Long-term Effects of Preventative Cardiology Interventions"
                journal="New England Journal of Medicine"
                year="2023"
                abstract="This study examines the 10-year outcomes of preventative cardiology interventions in high-risk patients, demonstrating significant reductions in mortality and morbidity rates."
                doi="10.1056/NEJMoa2023123"
                citations={42}
              />
              <FeaturedPublication
                title="Novel Biomarkers for Early Detection of Cardiovascular Disease"
                journal="Journal of the American College of Cardiology"
                year="2022"
                abstract="Identification and validation of new biomarkers that enable earlier detection of cardiovascular disease, potentially allowing for more timely interventions."
                doi="10.1016/j.jacc.2022.08.015"
                citations={78}
              />
              <FeaturedPublication
                title="Artificial Intelligence in Cardiac Imaging: Current Applications and Future Directions"
                journal="Circulation"
                year="2021"
                abstract="A comprehensive review of how AI technologies are transforming cardiac imaging, improving diagnostic accuracy and efficiency."
                doi="10.1161/CIRCULATIONAHA.121.054677"
                citations={103}
              />
              <FeaturedPublication
                title="Patient-Centered Approaches to Cardiovascular Disease Management"
                journal="JAMA Cardiology"
                year="2020"
                abstract="This paper outlines innovative patient-centered strategies for managing cardiovascular disease, emphasizing shared decision-making and personalized care plans."
                doi="10.1001/jamacardio.2020.3344"
                citations={91}
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild className="mt-8">
                <Link href="/publications">View All Publications</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="w-full flex justify-center py-20">
          <div className="container max-w-[1200px]  flex flex-col justify-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Blog</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Articles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights, research updates, and medical perspectives from my professional journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild className="mt-4">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id='contact' className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-900">
          <div className="container max-w-[1200px]  flex flex-col justify-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  For research collaborations, speaking engagements, or patient consultations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild className="w-full">
                  <Link href="mailto:bridgetchukwudile@gmail.com" target="_blank">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

