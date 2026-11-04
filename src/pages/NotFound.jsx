import { Link } from 'react-router-dom'
import PageShell from '@components/ui/PageShell'
import usePageMeta from '@hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found — earthform',
    description: 'This page has grown over. Wander back to the earthform studio.',
  })

  return (
    <PageShell>
      <section className="container-earth flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <div className="arch-frame h-44 w-36 shadow-soft sm:h-52 sm:w-44">
          <img
            src="/images/products/cement/mini-house.jpg"
            alt="Hand-cast cement mini house"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-8 font-script text-3xl text-terra">a little lost?</p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,6vw,4rem)] text-moss">
          This path has grown over.
        </h1>
        <p className="mt-4 max-w-md text-pretty text-bark-soft">
          The page you were looking for isn't here. Let's wander back to the studio.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Back to earthform
        </Link>
      </section>
    </PageShell>
  )
}
