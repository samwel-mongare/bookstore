import Buttons from "../../components/Buttons";

const Books = () => {
    return (
        <div className='booksContainer'>
            <ul>
                <li style={{ display: 'flex',}}>
                    <p style={{ margin: '0',}}>No books to display!</p>
                    < Buttons label='Remove' />
                </li>
            </ul>
            <form>
                <input type='text' placeholder="Enter book name" />
                < Buttons label='Add' />
            </form>
        </div>
    )
}

export default Books;