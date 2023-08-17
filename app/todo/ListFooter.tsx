export default function ListFooter() {
    return (
        <div className="list-footer flex justify-between p-4 border-t border-gray-300">
            {/* contains an item counter, a filter (all, active, completed) and a clear completed button */}
            <div className="item-counter">
                <p>0 items left</p>
            </div>
            <div className="filter flex justify-between">
                <button className="btn btn-primary active">All</button>
                <button className="btn btn-primary">Active</button>
                <button className="btn btn-primary">Completed</button>
            </div>
            <div className="clear-completed">
                <button className="btn btn-primary">Clear completed</button>
            </div>
        </div>
    )
}