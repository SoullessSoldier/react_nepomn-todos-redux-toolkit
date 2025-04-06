export default function TodoForm ({text, handleInput, handleSubmit}) {
    return (
        <form action="" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name=""
            value={text}
            onChange={(e) => handleInput(e.target.value)}
          />
        </label>
        <button type="submit">
          Add Todo
        </button>
      </form>
    )
}