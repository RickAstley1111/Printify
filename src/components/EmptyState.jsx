import "./EmptyState.css";

export default function EmptyState({ title, message }) {
    return (
        <div className="empty-state">
            <div className="empty-state__cube" aria-hidden="true">
                <div className="cube">
                    <span className="face f1" />
                    <span className="face f2" />
                    <span className="face f3" />
                    <span className="face f4" />
                    <span className="face f5" />
                    <span className="face f6" />
                </div>
                <div className="empty-state__q">?</div>
            </div>
            <h3 className="empty-state__title">{title || "Nothing here yet"}</h3>
            <p className="empty-state__msg">
                {message || "Looks like this space is empty… let's print something cool!"}
            </p>
        </div>
    );
}
