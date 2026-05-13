import { useState } from "react";

// Standalone LearningCard Component
// Displays a single expression with meaning, context, examples, and tags

function LearningCard({
  expression = "I will not be a sucker",
  naturalMeaning = "I refuse to be deceived or taken advantage of. I won't fall for a trick.",
  context = "Use when rejecting an unfair deal, a scam, or a manipulative situation.",
  examples = [
    "They offered me a fraction of the market price, but I said no. I will not be a sucker.",
    "The salesman tried to up-sell me an expensive, unneeded service. I told him straight up: I will not be a sucker.",
  ],
  similarExpressions = [
    "I won't be made a fool of",
    "You can't take me for a ride",
  ],
  tags = ["casual", "defiant", "slang"],
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Tag color mapping
  const getTagColor = (tag) => {
    const colors = {
      casual: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      defiant: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      slang: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      emotional: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      idiomatic: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      formal: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      friendly: "bg-green-500/20 text-green-400 border-green-500/30",
      "very common": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "strong refusal": "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return (
      colors[tag.toLowerCase()] ||
      "bg-slate-500/20 text-slate-400 border-slate-500/30"
    );
  };

  return (
    <div className=" min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl flex items-center justify-center p-2">
      <div
        className={`
    
          max-w-3xl
          bg-slate-800/60 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl p-6
          transition-all duration-300 ease-out
          ${isHovered ? "border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-[1.01]" : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header: Expression + Tags */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <h3 className="text-xl font-semibold text-slate-100">
            Expression:{" "}
            <span className="text-cyan-400">{`"${expression}"`}</span>
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Natural Meaning */}
        <div className="mb-4">
          <p className="text-slate-100">
            <span className="font-bold text-slate-200">Definition: </span>
            {naturalMeaning}
          </p>
        </div>

        {/* Context */}
        <div className="mb-4">
          <p className="text-slate-300">
            <span className="font-bold text-slate-200">Context: </span>
            {context}
          </p>
        </div>

        {/* Examples */}
        <div className="mb-4">
          <p className="font-bold text-slate-200 mb-2">Examples:</p>
          <ul className="space-y-1.5 text-slate-300">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">•</span>
                <span>{`"${example}"`}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Similar Expressions */}
        <div>
          <p className="text-slate-300">
            <span className="font-bold text-slate-200">
              Similar Expressions:{" "}
            </span>
            {similarExpressions.map((expr, index) => (
              <span key={index}>
                {`"${expr}"`}
                {index < similarExpressions.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

// Example usage with multiple card variants
function LearningCardDemo() {
  const cards = [
    {
      expression: "I will not be a sucker",
      naturalMeaning:
        "I refuse to be deceived or taken advantage of. I won't fall for a trick.",
      context:
        "Use when rejecting an unfair deal, a scam, or a manipulative situation.",
      examples: [
        "They offered me a fraction of the market price, but I said no. I will not be a sucker.",
        "The salesman tried to up-sell me an expensive, unneeded service. I told him straight up: I will not be a sucker.",
      ],
      similarExpressions: [
        "I won't be made a fool of",
        "You can't take me for a ride",
      ],
      tags: ["casual", "defiant", "slang"],
    },
    {
      expression: "What's up?",
      naturalMeaning:
        "How are you? What are you doing? What's new? (A highly common, informal greeting)",
      context:
        "Used with friends, colleagues, or acquaintances in casual settings.",
      examples: [
        "(Meeting a friend) Hey John, what's up?",
        "(Texting) Hey, what's up? Are we still on for dinner?",
      ],
      similarExpressions: ["How's it going?", "What's new?", "Hi there"],
      tags: ["casual", "very common", "friendly"],
    },
    {
      expression: "Over my dead body",
      naturalMeaning:
        "Never. I will prevent this with all my power. (A very strong refusal or prohibition)",
      context:
        "Used when someone strongly objects to an idea or proposal and wants to signal extreme defiance.",
      examples: [
        "You want to sell the house? Over my dead body!",
        "He wants to marry my daughter? Over my dead body!",
      ],
      similarExpressions: ["Absolutely not", "No way on earth"],
      tags: ["emotional", "idiomatic", "strong refusal"],
    },
  ];

  return (
    <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {cards.map((card, index) => (
          <LearningCardInner key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

// Inner card component without wrapper for use in lists
function LearningCardInner({
  expression,
  naturalMeaning,
  context,
  examples,
  similarExpressions,
  tags,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getTagColor = (tag) => {
    const colors = {
      casual: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      defiant: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      slang: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      emotional: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      idiomatic: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      formal: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      friendly: "bg-green-500/20 text-green-400 border-green-500/30",
      "very common": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "strong refusal": "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return (
      colors[tag.toLowerCase()] ||
      "bg-slate-500/20 text-slate-400 border-slate-500/30"
    );
  };

  return (
    <div
      className={`
        w-full
        bg-slate-800/60 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl p-5 md:p-6
        transition-all duration-300 ease-out
        ${isHovered ? "border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-[1.005]" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header: Expression + Tags */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-slate-100">
          Original Expression:{" "}
          <span className="text-cyan-400">{`"${expression}"`}</span>
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Natural Meaning */}
      <div className="mb-3">
        <p className="text-slate-100 text-sm md:text-base">
          <span className="font-bold text-slate-200">Natural Meaning: </span>
          {naturalMeaning}
        </p>
      </div>

      {/* Context */}
      <div className="mb-3">
        <p className="text-slate-300 text-sm md:text-base">
          <span className="font-bold text-slate-200">Context: </span>
          {context}
        </p>
      </div>

      {/* Examples */}
      <div className="mb-3">
        <p className="font-bold text-slate-200 mb-1.5 text-sm md:text-base">
          Examples:
        </p>
        <ul className="space-y-1 text-slate-300 text-sm md:text-base">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">•</span>
              <span>{`"${example}"`}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Similar Expressions */}
      <div>
        <p className="text-slate-300 text-sm md:text-base">
          <span className="font-bold text-slate-200">
            Similar Expressions:{" "}
          </span>
          {similarExpressions.map((expr, index) => (
            <span key={index}>
              {`"${expr}"`}
              {index < similarExpressions.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}


export default LearningCard;
export { LearningCardInner, LearningCardDemo };


