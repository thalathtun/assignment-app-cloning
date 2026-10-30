import {
  BookOpen,
  Users,
  BookCopy,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const statistics = [
  {
    title: "Total Books",
    value: "1,250",
    description: "Books in the collection",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Total Members",
    value: "320",
    description: "Registered members",
    icon: Users,
    color: "green",
  },
  {
    title: "Borrowed Books",
    value: "86",
    description: "Currently borrowed",
    icon: BookCopy,
    color: "purple",
  },
  {
    title: "Overdue Books",
    value: "12",
    description: "Past the return date",
    icon: Clock,
    color: "orange",
  },
];

const recentBorrowings = [
  {
    id: 1,
    member: "Sok Dara",
    book: "Introduction to Python",
    date: "2026-10-20",
    status: "Borrowed",
  },
  {
    id: 2,
    member: "Chan Sopheak",
    book: "Database Systems",
    date: "2026-10-19",
    status: "Returned",
  },
  {
    id: 3,
    member: "Kim Lina",
    book: "Clean Code",
    date: "2026-10-18",
    status: "Overdue",
  },
  {
    id: 4,
    member: "Pen Vicheka",
    book: "Computer Networks",
    date: "2026-10-17",
    status: "Borrowed",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="welcome-section">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Welcome to your library!</h2>
          <p>
            Here is a summary of your library's activity.
          </p>
        </div>

        <div className="date-badge">
          <BookOpen size={18} />
          Library Dashboard
        </div>
      </section>

      <section className="stats-grid">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <article className="stat-card" key={item.title}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={22} />
              </div>

              <p className="stat-title">{item.title}</p>
              <h3>{item.value}</h3>

              <p className="stat-description">
                {item.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="content-card">
        <div className="section-heading">
          <div>
            <h3>Recent Borrowings</h3>
            <p>Latest borrowing activity in the library</p>
          </div>

          <span className="view-label">
            Recent activity <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Book Title</th>
                <th>Borrow Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentBorrowings.map((item) => (
                <tr key={item.id}>
                  <td className="member-name">{item.member}</td>
                  <td>{item.book}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`status ${item.status.toLowerCase()}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="demo-note">
        These are sample records for development. Real data will come
        from your Flask API later.
      </p>
    </div>
  );
}

export default Dashboard;