import { Users } from "lucide-react";

function Members() {
  return (
    <section className="empty-page">
      <div className="empty-icon">
        <Users size={32} />
      </div>

      <h2>Members Management</h2>

      <p>
        This page will help you register members and manage their
        information.
      </p>

      <span className="coming-soon">Next development step</span>
    </section>
  );
}

export default Members;