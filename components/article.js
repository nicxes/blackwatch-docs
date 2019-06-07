import MDX from '../mdx/hello.mdx'

export default function Article() {
  return (
    <article className="article">
      <MDX/>
      <style global jsx>{`
        .article p a {border-bottom: 1px solid #444;}
      `}</style>
    </article>
  )
}