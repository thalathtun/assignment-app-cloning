import { ArrowLeftRight } from "lucide-react";

function Borrowings() {
  return (
    <section className="empty-page">
      <div className="empty-icon">
        <ArrowLeftRight size={32} />
      </div>

      <h2>Borrowing Management</h2>

      <p>
        This page will help you record borrowed books, due dates,
        and book returns.
      </p>

      <span className="coming-soon">Next development step</span>
    </section>
  );
}

export default Borrowings;