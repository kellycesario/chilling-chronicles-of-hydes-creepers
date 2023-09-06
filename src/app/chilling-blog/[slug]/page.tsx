import { Accordion } from '@/components/organisms/Accordion'
import { ArticleContent } from '@/components/organisms/ArticleContent'

type ArticleContentProps = {
  reviewer: string
  date: string
  alt: string
  lead: string
  picture: string
  subtitle: string
  description: string
  emphasis: string
  quote: string
  firstParagraph: string
  secondParagraph: string
  thirdParagraph: string
  fourthParagraph: string
}

export default function Article({
  reviewer,
  date,
  alt,
  lead,
  picture,
  subtitle,
  description,
  emphasis,
  quote,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
}: ArticleContentProps) {
  return (
    <section>
      <ArticleContent
        reviewer={reviewer}
        date={date}
        alt={alt}
        lead={lead}
        picture={picture}
        subtitle={subtitle}
        description={description}
        emphasis={emphasis}
        quote={quote}
        firstParagraph={firstParagraph}
        secondParagraph={secondParagraph}
        thirdParagraph={thirdParagraph}
        fourthParagraph={fourthParagraph}
      />
      <Accordion />
    </section>
  )
}
