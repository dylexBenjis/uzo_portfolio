import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText } from "lucide-react"
import Link from "next/link"

interface FeaturedPublicationProps {
  title: string
  journal: string
  year: string
  abstract: string
  doi: string
  citations: number
}

export function FeaturedPublication({ title, journal, year, abstract, doi, citations }: FeaturedPublicationProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="mb-2">
            {journal}
          </Badge>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">{abstract}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <FileText className="mr-1 h-4 w-4" />
          <span>Citations: {citations}</span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">
            <BookOpen className="mr-2 h-4 w-4" />
            Read Paper
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

