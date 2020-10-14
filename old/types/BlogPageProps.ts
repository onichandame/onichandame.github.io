import { PageProps } from "gatsby"

export type BlogPageProps = PageProps<
  {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string
            author: string
            date: string
          }
          fields: {
            name: string
            locale: string
          }
          parent: {
            relativeDirectory: string
          }
        }
      }[]
    }
  },
  { locale: string }
>
