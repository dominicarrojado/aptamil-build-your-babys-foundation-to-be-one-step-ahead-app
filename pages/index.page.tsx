import type { NextPage } from 'next';
import Head from 'next/head';
import { getAssetUrl } from '../lib/assets';

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center min-h-screen pt-16">
        <h1 className="text-center text-6xl">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-600 hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="my-16 text-center text-2xl">
          Get started by editing{' '}
          <code className="rounded bg-slate-50 p-3 text-lg font-mono">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-col flex-wrap justify-center items-center max-w-full sm:flex-row sm:max-w-2xl">
          <a
            href="https://nextjs.org/docs"
            className="max-w-[300px] m-4 p-6 text-left text-inherit border border-slate-200 rounded-lg transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
            <p className="text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="max-w-[300px] m-4 p-6 text-left text-inherit border border-slate-200 rounded-lg transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
            <p className="text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="max-w-[300px] m-4 p-6 text-left text-inherit border border-slate-200 rounded-lg transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
            <p className="text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="max-w-[300px] m-4 p-6 text-left text-inherit border border-slate-200 rounded-lg transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
            <p className="text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <section className="max-w-full mx-auto pt-6 pb-8 text-center text-lg sm:max-w-lg md:pt-0">
        <a
          href="https://dominicarrojado.com/posts/how-to-create-your-own-otp-input-in-react-and-typescript-with-tests-part-1/"
          className="underline text-gray-600 hover:text-gray-800 transition-colors"
        >
          Learn how to set up a local development for Next.js projects with
          TypeScript and TailwindCSS
        </a>
      </section>

      <footer className="flex flex-1 justify-center items-center py-8 border-t border-slate-200">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-grow justify-center items-center"
        >
          Powered by{' '}
          <span className="h-[1em] ml-2">
            <img
              src={getAssetUrl('vercel.svg')}
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;