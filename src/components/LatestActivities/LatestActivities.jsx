import cartIcon from "./shopping-cart.svg";
import tagIcon from "./price-tag.svg";
import "./LatestActivities.css";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const activities = [
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
    { icon: "tag", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "pending" },
    { icon: "tag", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "pending" },
    { icon: "cart", name: "Alex Chan", item: "Cyberpunk Helmet STL", time: "5 min ago", price: "$24.99", status: "completed" },
];

function ActivityRow({ activity, t }) {
    const isCompleted = activity.status === "completed";

    return (
        <section className="activities">
            <div className="activity-row">
                <div className="activity-row_left">
                    <div className="activity-row_icon-box">
                        <img src={activity.icon === "cart" ? cartIcon : tagIcon} alt={activity.icon} />
                    </div>

                    <div className="activity-row_info">
                        <div className="activity-row_name-row">
                            <p className="activity-row_name">{activity.name}</p>
                            <svg className="activity-row_dot" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#B6B6B6" />
                            </svg>
                            <p className="activity-row_time">{activity.time}</p>
                        </div>
                        <p className="activity-row_item">{activity.item}</p>
                    </div>
                </div>

                <div className="activity-row_right">
                    <p className="activity-row_price">{activity.price}</p>
                    <div className="activity-status-wrapper">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill={isCompleted ? "#BAFF19" : "#FD3240"} />
                        </svg>
                        <p className="activity-row_status">
                            {isCompleted ? t.completed : t.pending}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function LatestActivities() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <section className="activities-section">
            <h2 className="activities-section_title">
                <span>{t.latest} </span>
                <span>{t.activities}</span>
            </h2>

            <div className="activities-section_box">
                {activities.map((activity, index) => (
                    <ActivityRow key={index} activity={activity} t={t} />
                ))}
            </div>
        </section>
    );
}
