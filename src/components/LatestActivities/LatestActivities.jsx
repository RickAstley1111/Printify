import cartIcon from "./shopping-cart.svg";
import tagIcon from "./price-tag.svg";
import "./LatestActivities.css";

const activities = [
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
    { icon: "tag", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "pending" },
    { icon: "tag", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "pending" },
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
];

function ActivityRow({ activity }) {
    const isCompleted = activity.status === "completed";

    return (
        <div className="activity-row">

            <div className="activity-row_left">
                <div className="activity-row_icon-box">
                    <img
                        src={activity.icon === "cart" ? cartIcon : tagIcon}
                        alt={activity.icon}
                    />
                </div>

                <div className="activity-row_info">
                    <div className="activity-row_name-row">
                        <p className="activity-row_name">{activity.name}</p>

                        <svg className="activity-row_dot" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <path
                                d="M2.5 0C1.83696 0 1.20107 0.263393 0.732234 0.732234C0.263393 1.20107 0 1.83696 0 2.5C0 3.16304 0.263393 3.79893 0.732234 4.26777C1.20107 4.73661 1.83696 5 2.5 5C3.8875 5 5 3.8875 5 2.5C5 1.83696 4.73661 1.20107 4.26777 0.732234C3.79893 0.263393 3.16304 0 2.5 0Z"
                                fill="#B6B6B6"
                            />
                        </svg>

                        <p className="activity-row_time">{activity.time}</p>
                    </div>

                    <p className="activity-row_item">{activity.item}</p>
                </div>
            </div>

            <div className="activity-row_right">
                <p className="activity-row_price">{activity.price}</p>

                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                        d="M4 0C2.93913 0 1.92172 0.421428 1.17157 1.17157C0.421428 1.92172 0 2.93913 0 4C0 5.06087 0.421428 6.07828 1.17157 6.82843C1.92172 7.57857 2.93913 8 4 8C6.22 8 8 6.22 8 4C8 2.93913 7.57857 1.92172 6.82843 1.17157C6.07828 0.421428 5.06087 0 4 0Z"
                        fill={isCompleted ? "#BAFF19" : "#FD3240"}
                    />
                </svg>

                <p className="activity-row_status">
                    {isCompleted ? "Completed" : "Pending"}
                </p>
            </div>

        </div>
    );
}

export default function LatestActivities() {
    return (
        <section className="activities-section">

            <h2 className="activities-section_title">
                <span>LATEST </span>
                <span>ACTIVITIES</span>
            </h2>

            <div className="activities-section_box">
                {activities.map((activity, index) => (
                    <ActivityRow key={index} activity={activity} />
                ))}
            </div>

        </section>
    );
}
