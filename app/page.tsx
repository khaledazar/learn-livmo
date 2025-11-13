export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Temporary homepage - will be replaced with actual homepage */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-livmo-navy mb-4">
            Learn.Livmo.com
          </h1>
          <p className="text-xl md:text-2xl text-livmo-primary font-medium mb-2">
            Your Complete Exit Readiness Academy
          </p>
          <p className="text-lg text-livmo-body">
            Whether you're exiting now or building value for later, everything you need is here.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
            🚀 Next.js Project Initialized!
          </h2>
          <div className="text-left space-y-3 text-livmo-body">
            <p>✅ Next.js 15 with App Router</p>
            <p>✅ TypeScript configured</p>
            <p>✅ Tailwind CSS with Livmo brand colors</p>
            <p>✅ Roboto (headlines) + Poppins (body) fonts</p>
            <p>✅ Design system components ready</p>
            <p>✅ Assets organized</p>
          </div>
          
          <div className="mt-6 p-4 bg-livmo-light-gold rounded-lg">
            <p className="text-sm text-livmo-navy font-medium">
              <strong>Next Step:</strong> Install dependencies and build the homepage
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> to start development server</p>
        </div>
      </div>
    </main>
  );
}

