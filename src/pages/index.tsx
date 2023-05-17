import { useEffect, useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [apiInput, setApiInput] = useLocalStorage<string>('apiInput', '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiOutput, setApiOutput] = useLocalStorage<string>('apiOutput', '');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log('Calling API with input:', apiInput);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiInput,
        }),
      });

      const data = await response.json();
      console.log(`API Response: ${JSON.stringify(data)}`);
      if (data.output) {
        const { output } = data;
        console.log(`API: ${output.text}`);

        setApiOutput(`${output.text}`);
      } else if (data.error) {
        console.error(`API Error: ${data.error}`);
        alert(
          'Uh oh... something has gone wrong behind the scenes so please try again later.'
        );
      }
    } catch (err) {
      console.error(`An error occurred: ${err}`);
      alert(
        'Uh oh... something has gone wrong behind the scenes so please try again later.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const formatOutput = (output: string) => {
    return output
      .trim()
      .split('\n')
      .map((item, key) => {
        return (
          <p key={key} className='py-2'>
            {item}
          </p>
        );
      });
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='layout relative flex min-h-screen flex-col items-center py-12 text-center text-white'>
            <h1 className='mt-4'>Ar Hossain - GPT </h1>
            <p className='mt-2 text-sm text-gray-300'>
              Description of what Ar Hossain - GPT thing does{' '}
            </p>
            <div className='w-full'>
              <textarea
                rows={4}
                placeholder='Enter your prompt here...'
                className='mt-6 w-4/5 rounded-md border-orange-500 bg-dark text-gray-300 focus:border-orange-500 focus:ring-orange-500'
                value={apiInput}
                onChange={(event) => setApiInput(event.target.value)}
              />
            </div>
            <Button
              className='mt-4'
              isLoading={isGenerating}
              onClick={() => callGenerateEndpoint()}
              variant='outline'
              isDarkBg={true}
            >
              Generate
            </Button>

            {mounted && apiOutput && (
              <div className='mt-8'>
                <h2>Results</h2>
                <div className='mt-2 text-gray-300'>
                  {formatOutput(apiOutput)}
                </div>
              </div>
            )}

            <footer className='absolute bottom-2 text-gray-200'>
              © {new Date().getFullYear()}
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
