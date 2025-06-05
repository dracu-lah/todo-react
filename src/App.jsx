const App = () => {
  return (
    <>
      <div>
        <main className="container " style={{ marginTop: 40 }}>
          <header>
            <h1>Todo App</h1>
          </header>

          <section>
            <h2>Add New Todo</h2>
            <div className="grid">
              <input
                type="text"
                placeholder="Enter your todo..."
                aria-label="Todo input"
              />
              <button>Add Todo</button>
            </div>
          </section>

          <section>
            <h2>Added Todos</h2>
            <ul>
              <li>
                <div className="grid">
                  <div>
                    <strong>1. Todo1</strong>
                  </div>
                  <div>
                    <button className="secondary outline">Completed</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid">
                  <div>
                    <strong>2. Todo2</strong>
                  </div>
                  <div>
                    <button>Mark As Completed</button>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
