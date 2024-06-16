import "./style.css";

export default function HomePage() {
    return (
        <div>
            <h1>D&D Initative Tracker</h1>
            <section id="add-creature" className="border">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Creature Name" aria-label="Creature Name"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Initiative" aria-label="Initiative"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="HP" aria-label="HP"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="AC" aria-label="AC"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity"></input>
                    </div>
                </div>
                <button type="button" class="btn btn-dark" id="add-btn">Add</button>
            </section>
        </div>
    )
}