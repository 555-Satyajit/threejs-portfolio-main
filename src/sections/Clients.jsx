import React from 'react';

export const researchPapers = [
  {
    id: 1,
    title: 'IoT-Based Smart Irrigation System Using Hybrid Ensemble Models for Water Usage Prediction',
    authors: 'Click',
    conference: 'The 5th International Electronic Conference on Applied Sciences session Computing and Artificial Intelligence 2024',
    img: '/assets/paper-icon.svg',
    url: 'https://sciforum.net/paper/view/20757',
    abstract: 'The study aims to optimize irrigation using IoT and machine learning to reduce water wastage and enhance crop yields. The Ensemble Linear Regression and Random Forest model achieved the highest accuracy of 96.34%, providing an efficient solution for water management.'
  }
];

const ResearchPapers = () => {
  const handlePaperClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">
        My Research Papers
      </h3>

      <div className="client-container">
        {researchPapers.map((item) => (
          <div 
            key={`paper-${item.id}`} 
            className="client-review cursor-pointer hover:scale-[1.02] transition-transform duration-300" 
            onClick={() => handlePaperClick(item.url)}
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={item.img} 
                    alt="paper" 
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                  />
                  <div>
                    <h4 className="font-semibold text-white-800 line-clamp-2 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white-500 text-sm font-light">
                      {item.conference}
                    </p>
                  </div>
                </div>

                <p className="text-white-800 font-light line-clamp-3">
                  {item.abstract}
                </p>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <p className="text-white-500 text-sm font-light">
                  {item.authors}
                </p>
                <svg 
                  className="w-5 h-5 text-white-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;