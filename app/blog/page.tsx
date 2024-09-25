import Link from 'next/link'
import { getSortedPostsData } from '../utils/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Bela Wiertz',
  description: 'Read the latest articles from Bela Wiertz\'s blog.',
}

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <main>
      <h1>Blog</h1>
      <ul className="post-list">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
            <br />
            <small>{new Date(date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}