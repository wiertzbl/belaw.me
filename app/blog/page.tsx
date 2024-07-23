import Link from 'next/link'
import { getSortedPostsData } from '../utils/posts'

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
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}