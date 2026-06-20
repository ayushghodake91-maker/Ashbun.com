import React from 'react';

export function Blog() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Insights & Blog</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl">
          The latest thoughts, strategies, and trends in digital marketing from our expert team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-video bg-slate-200"></div>
              <div className="p-6">
                <div className="text-sm text-primary-light font-medium mb-3">SEO Strategy</div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">How to adapt your SEO strategy for AI-driven search in 2024</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">Discover the latest tactics to maintain your organic traffic as search engines evolve with generative AI capabilities.</p>
                <div className="text-sm text-slate-500 font-medium">May 12, 2024 • 5 min read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}