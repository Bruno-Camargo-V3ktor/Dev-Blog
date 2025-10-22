/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {

  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <img
            className='w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-200'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
          />
        </Link>
        <div className='flex flex-col gap-2 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight mb-4 block' dateTime='2025-04-20'>20/04/2025 10:00</time>

          <PostHeading as='h1' url='#'>
            Lorem ipsum, dolor sit amet consectetur
          </PostHeading>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet,
            atque consequuntur similique architecto omnis, placeat debitis fugiat nesciunt
            rerum facilis enim dignissimos corrupti nobis quaerat voluptates, dolore ab
            perferendis!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
      </footer>
    </Container>
  );
}