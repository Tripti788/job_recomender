import React from 'react';
import { useLocation } from 'react-router-dom'; // ✅ You forgot this import

const Jobsuggestion = () => {
  const location = useLocation();
  const suggestions = location.state?.suggestions || [];

  const getEmojiForJob = (title) => {
  title = title.toLowerCase();

  if (title.includes("frontend") || title.includes("developer")) return "💻";
  if (title.includes("backend")) return "🖥️";
  if (title.includes("data")) return "📊";
  if (title.includes("ai") || title.includes("ml")) return "🧠";
  if (title.includes("security")) return "🔒";
  if (title.includes("designer")) return "🎨";
  if (title.includes("teacher")) return "🧑‍🏫";
  if (title.includes("engineer")) return "🛠️";
  if (title.includes("marketing")) return "📈";
  if (title.includes("nurse") || title.includes("doctor")) return "⚕️";
  if (title.includes("mobile")) return "📱";
  if (title.includes("analyst")) return "📊";
  return "💼";
};


  return (
    <div className="container p-4 " >
      <h3 className="mb-3">Job Role Suggestions</h3>

      {suggestions.length > 0 ? (
        <div className="suggestion-list">
          { suggestions.map((job, index) => (
            <div key={index} className="card shadow p-3 mb-3 rounded" style={{backgroundColor:'#f0faff', border: '1px solid #d0ebff'}}>

              <h3> {getEmojiForJob(job.title)}  {job.title}</h3>
              {job.description && <p className="text-muted">{job.description}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p>No suggestions found. Try adding more relevant skills.</p>
      )}
    </div>
  );
};

export default Jobsuggestion;
