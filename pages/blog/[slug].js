import { useRouter } from 'next/router'

const BlogPost = () => {
  const router = useRouter()
  const slug = router.query;

  return <p>blog post</p>
}

export default BlogPost