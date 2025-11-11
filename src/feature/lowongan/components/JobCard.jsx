export default function JobCard({ job, onView }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition flex flex-col">
      <img
        src={job.image}
        alt={job.company}
        className="rounded-md mb-3 h-48 w-full object-cover"
      />

      <h3 className="text-gray-800 font-semibold">{job.company}</h3>
      <p className="text-sm text-gray-600 mb-2">{job.position}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>📍 {job.location}</span>
        <span>👁️ Dilihat: {job.views}x</span>
      </div>

      <p className="text-yellow-500 font-semibold mb-3">{job.date}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.majors?.map((tag) => {
            const abbreviation = tag
            .split(" ")
            .map((word) => word[0]?.toUpperCase())
            .join("");
            return (
            <span
                key={tag}
                className="text-xs font-medium bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full"
            >
                {abbreviation}
            </span>
            );
        })}
        </div>

      <button onClick={() => onView?.(job)} className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium py-2 rounded-md transition">
        Lihat Detail
      </button>
    </div>
  );
}
