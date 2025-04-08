import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  image_alt:string
  category: string
  image?: string
  slug: string
}

export function BlogPostCard({ title, excerpt, date, category, image, slug, image_alt }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative">
      <div className="flex relative h-full w-full overflow-hidden bg-gray-100">
            <Image
              src={image||'/placeholder.svg'} alt={image_alt}
              fill={true}
              objectFit="cover"
            />
          </div>      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <Link href={slug} className="hover:underline">
          <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={slug} className="text-sm font-medium text-primary hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}

