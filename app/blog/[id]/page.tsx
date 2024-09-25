import { Metadata } from 'next'
import { getPostData, getSortedPostsData } from '../../utils/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

// New function to generate dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id)
  const description = `Read about ${postData.title} in Bela Wiertz's blog.`
  return {
    title: `${postData.title} | Bela Wiertz Blog`,
    description,
    openGraph: {
      title: postData.title,
      description,
      type: 'article',
      publishedTime: postData.date,
      authors: ['Bela Wiertz'],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description,
    },
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return (
    <main>
      <h1>{postData.title}</h1>
      <div>{new Date(postData.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  )
}