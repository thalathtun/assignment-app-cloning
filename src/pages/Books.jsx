import { BookOpen, Plus, Search } from "lucide-react";

const sampleBooks = [
  {
    id: 1,
    title: "Introduction to Python",
    author: "John Smith",
    category: "Programming",
    quantity: 10,
    available: 7,
  },
  {
    id: 2,
    title: "Database Systems",
    author: "Thomas Connolly",
    category: "Database",
    quantity: 8,
    available: 5,
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    quantity: 5,
    available: 2,
  },
];

function Books() {
  return (
    <div className="page-section">
      <div className="page-toolbar">
        <div>
          <h2>Book Collection</h2>
          <p>Manage all books available in your library.</p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => alert("We will build the Add Book form in a later step.")}
        >
          <Plus size={18} />
          Add Book
        </button>
      </div>

      <div className="content-card">
        <div className="book-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search books..."
            aria-label="Search books"
          />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Author</th>
                <th>Category</th>
                <th>Total Copies</th>
                <th>Available</th>
              </tr>
            </thead>

            <tbody>
              {sampleBooks.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div className="book-cell">
                      <span className="book-icon">
                        <BookOpen size={18} />
                      </span>
                      <strong>{book.title}</strong>
                    </div>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <span className="available-count">
                      {book.available}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="demo-note">
          Showing sample books. Flask integration comes later.
        </p>
      </div>
    </div>
  );
}

export default Books;