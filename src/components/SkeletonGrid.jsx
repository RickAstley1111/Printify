import "./SkeletonGrid.css";

export default function SkeletonGrid({ count = 6 }) {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="skeleton-card" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="sk-thumb shimmer" />
                    <div className="sk-line shimmer" style={{ width: "70%" }} />
                    <div className="sk-line shimmer" style={{ width: "40%" }} />
                    <div className="sk-row">
                        <div className="sk-pill shimmer" />
                        <div className="sk-pill shimmer" />
                    </div>
                </div>
            ))}
        </div>
    );
}
